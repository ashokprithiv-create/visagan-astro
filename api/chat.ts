import { createChatHandler } from '../server/chatHandler';

const handler = createChatHandler(process.env.GEMINI_API_KEY);

export default handler;

export const config = {
  runtime: 'nodejs',
};
