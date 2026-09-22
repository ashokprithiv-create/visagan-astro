import { GoogleGenAI } from '@google/genai';
import type { IncomingMessage, ServerResponse } from 'http';
import { SYSTEM_PROMPT } from './systemPrompt';
import { KNOWLEDGE_BASE } from './knowledgeBase';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

function readBody(req: IncomingMessage): Promise<string> {
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

export function createChatHandler(apiKey: string | undefined) {
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;
  const fullSystemInstruction = `${SYSTEM_PROMPT}\n\n---\n\n## Retrieved knowledge-base chunks\n\n${KNOWLEDGE_BASE}`;

  return async function chatHandler(req: IncomingMessage, res: ServerResponse) {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' });
      return;
    }

    if (!ai) {
      sendJson(res, 500, { error: 'GEMINI_API_KEY is not set on the server.' });
      return;
    }

    try {
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

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents,
        config: {
          systemInstruction: fullSystemInstruction,
          temperature: 0.3,
        },
      });

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
