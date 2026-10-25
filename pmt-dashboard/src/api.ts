import type { AppState, ArchiveMeta, VisionResult } from './lib/types';

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public needsPassword = false,
  ) {
    super(message);
  }
}

const TOKEN_KEY = 'pmt-admin-token';

export function adminToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setAdminToken(t: string | null) {
  try {
    if (t) localStorage.setItem(TOKEN_KEY, t);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

async function call<T>(path: string, init: RequestInit = {}, admin = true): Promise<T> {
  const headers = new Headers(init.headers);
  const token = admin ? adminToken() : null;
  if (token) headers.set('authorization', `Bearer ${token}`);
  if (init.body && typeof init.body === 'string') headers.set('content-type', 'application/json');
  let res: Response;
  try {
    res = await fetch(path, { ...init, headers });
  } catch {
    throw new ApiError(0, 'Could not reach the server. Check your internet connection and try again.');
  }
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401 && admin && !body.needsPassword) setAdminToken(null);
    throw new ApiError(res.status, body.error ?? `Request failed (${res.status}).`, !!body.needsPassword);
  }
  return body as T;
}

export type AdminState = AppState & { hasClientPassword?: boolean };

export const api = {
  health: () => call<{ ok: boolean; adminConfigured: boolean; vision: boolean }>('/api/health', {}, false),
  login: async (password: string) => {
    const r = await call<{ token: string }>('/api/login', { method: 'POST', body: JSON.stringify({ password }) }, false);
    setAdminToken(r.token);
  },
  getState: () => call<AdminState>('/api/state'),
  saveState: (state: AppState, baseVersion: number) =>
    call<{ version: number; updatedAt: string }>('/api/state', { method: 'PUT', body: JSON.stringify({ state, baseVersion }) }),
  share: (body: { regenerate?: boolean; password?: string | null }) =>
    call<{ token: string; hasClientPassword: boolean; version: number }>('/api/share', { method: 'POST', body: JSON.stringify(body) }),
  uploadFile: async (file: Blob, contentType?: string) => {
    const type = contentType ?? (file.type || 'application/octet-stream');
    return call<{ key: string }>('/api/files', { method: 'POST', body: file, headers: { 'content-type': type } });
  },
  deleteFile: (key: string) => call<{ ok: boolean }>(`/api/${key}`, { method: 'DELETE' }),
  vision: (imageKey: string) => call<VisionResult>('/api/vision', { method: 'POST', body: JSON.stringify({ imageKey }) }),
  saveArchive: (label: string, range: ArchiveMeta['range']) =>
    call<{ meta: ArchiveMeta; version: number }>('/api/archive', { method: 'POST', body: JSON.stringify({ label, range }) }),
  deleteArchive: (id: string) => call<{ version: number }>(`/api/archive/${id}`, { method: 'DELETE' }),
  getArchiveAdmin: (id: string) => call<AppState>(`/api/archive/${id}`),
  report: (t: string, k: string | null) => call<AppState>(`/api/report?t=${encodeURIComponent(t)}${k ? `&k=${encodeURIComponent(k)}` : ''}`, {}, false),
  unlock: (t: string, password: string) => call<{ k: string }>('/api/report/unlock', { method: 'POST', body: JSON.stringify({ t, password }) }, false),
  archive: (id: string, t: string, k: string | null) =>
    call<AppState>(`/api/archive/${id}?t=${encodeURIComponent(t)}${k ? `&k=${encodeURIComponent(k)}` : ''}`, {}, false),
};

/** How images are loaded: with the admin token, or the client's share link. */
export type FileAccess = { kind: 'admin' } | { kind: 'client'; t: string; k: string | null };

export function fileUrl(key: string | undefined | null, access: FileAccess): string | null {
  if (!key) return null;
  if (key.startsWith('/')) return key; // bundled asset
  const id = key.replace(/^files\//, '');
  if (access.kind === 'admin') return `/api/files/${id}?a=${encodeURIComponent(adminToken() ?? '')}`;
  return `/api/files/${id}?t=${encodeURIComponent(access.t)}${access.k ? `&k=${encodeURIComponent(access.k)}` : ''}`;
}
