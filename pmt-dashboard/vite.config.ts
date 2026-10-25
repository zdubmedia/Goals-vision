import react from '@vitejs/plugin-react';
import type { IncomingMessage } from 'node:http';
import type { Plugin } from 'vite';
import { defineConfig } from 'vitest/config';

/** Runs the same API the Netlify Function runs, inside `npm run dev`, with data saved in .localdata/. */
function localApi(): Plugin {
  return {
    name: 'local-api',
    apply: 'serve',
    async configureServer(server) {
      if (process.env.VITEST) return;
      const { handle } = await server.ssrLoadModule('/server/handler.ts');
      const { folderStore } = await server.ssrLoadModule('/server/devStore.ts');
      const store = folderStore('.localdata');
      const env = (k: string) => process.env[k] ?? (k === 'ADMIN_PASSWORD' ? 'dev-password' : undefined);
      server.middlewares.use(async (req: IncomingMessage, res, next) => {
        if (!req.url?.startsWith('/api')) return next();
        const chunks: Buffer[] = [];
        for await (const c of req) chunks.push(c as Buffer);
        const body = chunks.length ? Buffer.concat(chunks) : undefined;
        const headers = new Headers();
        for (const [k, v] of Object.entries(req.headers)) if (typeof v === 'string') headers.set(k, v);
        const request = new Request(`http://localhost${req.url}`, {
          method: req.method,
          headers,
          body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
        });
        const response: Response = await handle(request, { store, env });
        res.statusCode = response.status;
        response.headers.forEach((v, k) => res.setHeader(k, v));
        res.end(Buffer.from(await response.arrayBuffer()));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), localApi()],
  build: { chunkSizeWarningLimit: 1200 },
  test: { include: ['src/**/*.test.ts', 'server/**/*.test.ts'] },
});
