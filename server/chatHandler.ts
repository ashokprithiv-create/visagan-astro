import type { IncomingMessage, ServerResponse } from 'http';
import { SYSTEM_PROMPT } from './systemPrompt.js';
import { KNOWLEDGE_BASE } from './knowledgeBase.js';
import {
  marriageMatchToolSchema,
  runMarriageMatch,
  MARRIAGE_MATCH_FUNCTION_NAME,
  type MarriageMatchArgs,
} from './marriageMatchTool.js';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Free OpenRouter models, tried in this order until one succeeds. This is a
// resilience chain (a model being down/overloaded/deprecated falls through
// to the next one) — it does NOT multiply your request budget, since
// OpenRouter's free tier is a single account-wide daily cap shared across
// every free model.
//
// Trimmed (2026-09-25 QA pass) to fewer, larger, well-established models
// after a 30-question live test showed smaller/lesser-known free models
// tend to ignore the system prompt's knowledge base and fall back to a
// generic non-answer even when the information is available. Only
// nvidia/qwen/google entries survived, plus openrouter/free as a last-
// resort catch-all.
const MODEL_FALLBACK_CHAIN = [
  'nvidia/nemotron-3-ultra-550b-a55b:free',
  'nvidia/nemotron-3.5-lightning:free',
  'nvidia/nemotron-3-super-120b-a12b:free',
  'qwen/qwen3.8-27b:free',
  'google/gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free',
  'openrouter/free',
];

// Each individual OpenRouter call gets this long before we abort and move
// to the next model — a hung/slow model shouldn't stall the whole chain.
const PER_MODEL_TIMEOUT_MS = 10000;

const CONTACT_LINE = 'Phone / WhatsApp: +91 9789747397 (https://wa.me/919789747397)';

const FALLBACK_TEXT =
  `I don't have that information available right now. A Visagan Astro representative will need to confirm it for you. You can reach us directly — ${CONTACT_LINE}`;

interface ORToolCall {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
}

interface ORMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string | null;
  tool_calls?: ORToolCall[];
  tool_call_id?: string;
}

interface ORResponse {
  choices?: { message: ORMessage }[];
  error?: { message?: string; code?: number };
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

async function callOpenRouter(apiKey: string, model: string, messages: ORMessage[]): Promise<ORResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), PER_MODEL_TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://visagan-astro.vercel.app',
        'X-Title': 'Ask Visagan',
      },
      body: JSON.stringify({
        model,
        messages,
        tools: [marriageMatchToolSchema],
        temperature: 0.3,
      }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      const timeoutErr = new Error(`OpenRouter request to ${model} timed out after ${PER_MODEL_TIMEOUT_MS}ms`) as Error & {
        status?: number;
      };
      timeoutErr.status = 408;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`OpenRouter request to ${model} failed (${res.status}): ${text}`) as Error & {
      status?: number;
    };
    err.status = res.status;
    throw err;
  }

  const data = (await res.json()) as ORResponse;

  // OpenRouter sometimes wraps a provider-side failure (e.g. the upstream
  // model being overloaded) in an HTTP 200 with an `error` field instead of
  // a non-2xx status, so res.ok alone isn't enough to detect it — without
  // this check we'd silently treat the error envelope as a valid empty
  // reply and never fall through to the next model.
  if (data.error) {
    const err = new Error(
      `OpenRouter request to ${model} returned an error: ${data.error.message ?? JSON.stringify(data.error)}`
    ) as Error & { status?: number };
    err.status = data.error.code ?? 502;
    throw err;
  }

  return data;
}

async function runExchange(apiKey: string, model: string, messages: ORMessage[]): Promise<string> {
  const first = await callOpenRouter(apiKey, model, messages);
  const message = first.choices?.[0]?.message;
  const toolCall = message?.tool_calls?.[0];

  if (toolCall && toolCall.function?.name === MARRIAGE_MATCH_FUNCTION_NAME) {
    let toolResult: Record<string, unknown>;
    try {
      const args = JSON.parse(toolCall.function.arguments || '{}') as MarriageMatchArgs;
      toolResult = runMarriageMatch(args);
    } catch {
      toolResult = {
        error:
          'Could not calculate compatibility with the details given. Please double-check the dates, times, and places of birth.',
      };
    }

    const followUp: ORMessage[] = [
      ...messages,
      { role: 'assistant', content: message?.content ?? null, tool_calls: message?.tool_calls },
      { role: 'tool', tool_call_id: toolCall.id, content: JSON.stringify(toolResult) },
    ];

    const second = await callOpenRouter(apiKey, model, followUp);
    return second.choices?.[0]?.message?.content ?? FALLBACK_TEXT;
  }

  return message?.content ?? FALLBACK_TEXT;
}

async function generateReplyWithFallback(apiKey: string, messages: ORMessage[]): Promise<string> {
  let lastErr: unknown;
  for (const model of MODEL_FALLBACK_CHAIN) {
    try {
      return await runExchange(apiKey, model, messages);
    } catch (err) {
      lastErr = err;
      console.error(`[Ask Visagan] model "${model}" failed, trying next:`, err);
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error('All fallback models failed');
}

export function createChatHandler(apiKey: string | undefined) {
  const fullSystemInstruction = `${SYSTEM_PROMPT}\n\n---\n\n## Retrieved knowledge-base chunks\n\n${KNOWLEDGE_BASE}`;

  return async function chatHandler(req: IncomingMessage, res: ServerResponse) {
    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed' });
      return;
    }

    if (!apiKey) {
      sendJson(res, 500, { error: 'OPENROUTER_API_KEY is not set on the server.' });
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

      const orMessages: ORMessage[] = [
        { role: 'system', content: fullSystemInstruction },
        ...messages.map((m) => ({
          role: (m.role === 'model' ? 'assistant' : 'user') as 'assistant' | 'user',
          content: String(m.text ?? ''),
        })),
      ];

      const reply = await generateReplyWithFallback(apiKey, orMessages);

      sendJson(res, 200, { reply });
    } catch (err) {
      console.error('[Ask Visagan] chat handler error:', err);
      sendJson(res, 500, { error: 'Something went wrong. Please try again in a moment.' });
    }
  };
}
