import { getStore } from '@netlify/blobs';
import type { Config } from '@netlify/functions';
import { handle } from '../../server/handler';
import type { Store } from '../../server/store';

function blobsStore(): Store {
  const s = getStore({ name: 'pmt-dashboard', consistency: 'strong' });
  return {
    async getJSON<T>(key: string) {
      const r = await s.getWithMetadata(key, { type: 'json' });
      return r ? { value: r.data as T, etag: r.etag ?? '' } : null;
    },
    async setJSON(key, value, opts = {}) {
      const res = await s.setJSON(key, value, opts.onlyIfNew ? { onlyIfNew: true } : opts.onlyIfMatch ? { onlyIfMatch: opts.onlyIfMatch } : {});
      return res.modified;
    },
    async getBinary(key) {
      const r = await s.getWithMetadata(key, { type: 'arrayBuffer' });
      if (!r) return null;
      return { data: r.data, contentType: String(r.metadata.contentType ?? 'application/octet-stream') };
    },
    async setBinary(key, data, contentType) {
      await s.set(key, data, { metadata: { contentType } });
    },
    async delete(key) {
      await s.delete(key);
    },
  };
}

export default async (req: Request) => handle(req, { store: blobsStore(), env: (k) => Netlify.env.get(k) });

export const config: Config = {
  path: '/api/*',
  excludedPath: ['/api/login'],
};
