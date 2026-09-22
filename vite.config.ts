import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {createChatHandler} from './server/chatHandler';

function askVisaganChatApi(apiKey: string | undefined): Plugin {
  return {
    name: 'ask-visagan-chat-api',
    configureServer(server) {
      if (!apiKey) {
        server.middlewares.use('/api/chat', (_req, res) => {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'GEMINI_API_KEY is not set. Add it to .env and restart the dev server.' }));
        });
        return;
      }
      server.middlewares.use('/api/chat', createChatHandler(apiKey));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss(), askVisaganChatApi(env.GEMINI_API_KEY)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
