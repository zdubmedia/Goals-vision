import type { Config } from '@netlify/functions';
import { handle } from '../../server/handler';
import type { Store } from '../../server/store';

// Login has its own function so it can be rate limited without slowing down the rest of the API.
const noStore: Store = {
  getJSON: async () => null,
  setJSON: async () => false,
  getBinary: async () => null,
  setBinary: async () => {},
  delete: async () => {},
};

export default async (req: Request) => handle(req, { store: noStore, env: (k) => Netlify.env.get(k) });

export const config: Config = {
  path: '/api/login',
  method: 'POST',
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ['ip', 'domain'] },
};
