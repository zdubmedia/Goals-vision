import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { nextEtag, type Store } from './store';

/** Local development store that survives dev-server restarts. */
export function folderStore(root: string): Store {
  const path = (key: string) => join(root, ...key.split('/').map(encodeURIComponent));
  const meta = (key: string) => `${path(key)}.meta.json`;
  const read = async (p: string) => {
    try {
      return await readFile(p);
    } catch {
      return null;
    }
  };
  const write = async (p: string, data: string | Uint8Array) => {
    await mkdir(dirname(p), { recursive: true });
    await writeFile(p, data);
  };
  return {
    async getJSON<T>(key: string) {
      const raw = await read(path(key));
      if (!raw) return null;
      const m = await read(meta(key));
      return { value: JSON.parse(raw.toString('utf8')) as T, etag: m ? JSON.parse(m.toString()).etag : '"0"' };
    },
    async setJSON(key, value, opts = {}) {
      const cur = await this.getJSON(key);
      if (opts.onlyIfNew && cur) return false;
      if (opts.onlyIfMatch && cur?.etag !== opts.onlyIfMatch) return false;
      await write(path(key), JSON.stringify(value));
      await write(meta(key), JSON.stringify({ etag: nextEtag() }));
      return true;
    },
    async getBinary(key) {
      const raw = await read(path(key));
      if (!raw) return null;
      const m = await read(meta(key));
      const data = raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength) as ArrayBuffer;
      return { data, contentType: m ? JSON.parse(m.toString()).contentType : 'application/octet-stream' };
    },
    async setBinary(key, data, contentType) {
      await write(path(key), new Uint8Array(data));
      await write(meta(key), JSON.stringify({ contentType }));
    },
    async delete(key) {
      await rm(path(key), { force: true });
      await rm(meta(key), { force: true });
    },
  };
}
