import { createChatHandler } from '../server/chatHandler.js';

const handler = createChatHandler(process.env.OPENROUTER_API_KEY);

export default handler;

export const config = {
  runtime: 'nodejs',
  // The free-model fallback chain can need several sequential attempts
  // (each with its own ~10s timeout) before one succeeds, especially for
  // the marriage-compatibility tool call, which needs two model calls per
  // attempt. Without room to actually finish, Vercel kills the function
  // mid-flight and the client gets a dead connection instead of any reply.
  maxDuration: 60,
};
