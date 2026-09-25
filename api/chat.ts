import { createChatHandler } from '../server/chatHandler.js';

const handler = createChatHandler(process.env.OPENROUTER_API_KEY);

export default handler;

export const config = {
  runtime: 'nodejs',
};
