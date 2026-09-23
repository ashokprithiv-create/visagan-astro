import { GoogleGenAI, createPartFromFunctionResponse } from '@google/genai';
import type { IncomingMessage, ServerResponse } from 'http';
import { SYSTEM_PROMPT } from './systemPrompt.js';
import { KNOWLEDGE_BASE } from './knowledgeBase.js';
import {
  marriageMatchFunctionDeclaration,
  runMarriageMatch,
  MARRIAGE_MATCH_FUNCTION_NAME,
  type MarriageMatchArgs,
} from './marriageMatchTool.js';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

function readBody(req: IncomingMessage & { body?: unknown }): Promise<string> {
  // On Vercel's Node.js runtime, the platform already buffers the request
  // and exposes the parsed result as req.body, draining the raw stream in
  // the process — so 'data'/'end' never fire there. The local Vite dev
  // middleware doesn't do this, so we still fall back to reading the stream.
  if (req.body !== undefined) {
    return Promise.resolve(typeof req.body === 'string' ? req.body : JSON.stringify(req.body));
  }

  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, statusCode: number, body: unknown) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Gemini occasionally returns 503 UNAVAILABLE ("high demand") — Google's own
// message says these are usually temporary, so retry a couple of times with
// a short backoff before giving up.
async function generateContentWithRetry(
  ai: GoogleGenAI,
  params: Parameters<GoogleGenAI['models']['generateContent']>[0]
) {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await ai.models.generateContent(params);
    } catch (err) {
      const status = (err as { status?: number })?.status;
      if (status !== 503 || attempt === maxAttempts) {
        throw err;
      }
      await sleep(500 * attempt);
    }
  }
  throw new Error('unreachable');
}

export function createChatHandler(apiKey: string | undefined) {
  const fullSystemInstruction = `${SYSTEM_PROMPT}\n\n---\n\n## Retrieved knowledge-base chunks\n\n${KNOWLEDGE_BASE}`;
  let ai: GoogleGenAI | null = null;

  return async function chatHandler(req: IncomingMessage, res: ServerResponse) {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' });
      return;
    }

    if (!apiKey) {
      sendJson(res, 500, { error: 'GEMINI_API_KEY is not set on the server.' });
      return;
    }

    try {
      // Constructing the client lazily, inside this try/catch, means a
      // failure here (e.g. an SDK bundling issue) comes back as a JSON
      // error instead of crashing the whole function invocation.
      if (!ai) {
        ai = new GoogleGenAI({ apiKey });
      }

      const raw = await readBody(req);
      const body = JSON.parse(raw || '{}') as { messages?: ChatMessage[] };
      const messages = Array.isArray(body.messages) ? body.messages : [];

      if (messages.length === 0) {
        sendJson(res, 400, { error: 'messages is required' });
        return;
      }

      const contents = messages.map((m) => ({
        role: m.role === 'model' ? ('model' as const) : ('user' as const),
        parts: [{ text: String(m.text ?? '') }],
      }));

      const generationConfig = {
        systemInstruction: fullSystemInstruction,
        temperature: 0.3,
        tools: [{ functionDeclarations: [marriageMatchFunctionDeclaration] }],
      };

      let response = await generateContentWithRetry(ai, {
        model: 'gemini-flash-latest',
        contents,
        config: generationConfig,
      });

      const call = response.functionCalls?.[0];

      if (call && call.name === MARRIAGE_MATCH_FUNCTION_NAME) {
        let toolResult: Record<string, unknown>;
        try {
          toolResult = runMarriageMatch(call.args as unknown as MarriageMatchArgs);
        } catch {
          toolResult = {
            error:
              'Could not calculate compatibility with the details given. Please double-check the dates, times, and places of birth.',
          };
        }

        const modelTurn = response.candidates?.[0]?.content ?? {
          role: 'model',
          parts: [{ functionCall: call }],
        };
        const responsePart = createPartFromFunctionResponse(
          call.id ?? call.name,
          call.name,
          toolResult
        );

        response = await generateContentWithRetry(ai, {
          model: 'gemini-flash-latest',
          contents: [...contents, modelTurn, { role: 'user', parts: [responsePart] }],
          config: generationConfig,
        });
      }

      const reply =
        response.text ??
        "I don't have that information available right now. A Visagan Astro representative will need to confirm it for you.";

      sendJson(res, 200, { reply });
    } catch (err) {
      console.error('[Ask Visagan] chat handler error:', err);
      sendJson(res, 500, { error: 'Something went wrong. Please try again in a moment.' });
    }
  };
}
