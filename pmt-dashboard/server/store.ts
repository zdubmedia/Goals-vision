// Storage the API handler talks to. Production uses Netlify Blobs; tests and
// local development use memory / a folder on disk.

export interface StoredJSON<T> {
  value: T;
  etag: string;
}

export interface Store {
  getJSON<T>(key: string): Promise<StoredJSON<T> | null>;
  /** Returns false when `onlyIfMatch` / `onlyIfNew` doesn't hold (someone else wrote first). */
  setJSON(key: string, value: unknown, opts?: { onlyIfMatch?: string; onlyIfNew?: boolean }): Promise<boolean>;
  getBinary(key: string): Promise<{ data: ArrayBuffer; contentType: string } | null>;
  setBinary(key: string, data: ArrayBuffer, contentType: string): Promise<void>;
  delete(key: string): Promise<void>;
}

let counter = 0;
export const nextEtag = () => `"${Date.now().toString(36)}-${(counter++).toString(36)}"`;

export function memoryStore(): Store {
  const json = new Map<string, StoredJSON<unknown>>();
  const bin = new Map<string, { data: ArrayBuffer; contentType: string }>();
  return {
    async getJSON<T>(key: string) {
      const v = json.get(key);
      return v ? { value: structuredClone(v.value) as T, etag: v.etag } : null;
    },
    async setJSON(key, value, opts = {}) {
      const cur = json.get(key);
      if (opts.onlyIfNew && cur) return false;
      if (opts.onlyIfMatch && cur?.etag !== opts.onlyIfMatch) return false;
      json.set(key, { value: structuredClone(value), etag: nextEtag() });
      return true;
    },
    async getBinary(key) {
      return bin.get(key) ?? null;
    },
    async setBinary(key, data, contentType) {
      bin.set(key, { data, contentType });
    },
    async delete(key) {
      json.delete(key);
      bin.delete(key);
    },
  };
}
