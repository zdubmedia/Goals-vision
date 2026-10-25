// The whole API. Runs inside a Netlify Function in production and inside the
// Vite dev server locally; both hand it a web Request and a Store.

import { buildSeedState } from '../src/lib/seed';
import type { AppState, ArchiveMeta } from '../src/lib/types';
import {
  checkPassword,
  clientAccessKey,
  hashPassword,
  issueAdminToken,
  randomToken,
  safeEqual,
  sessionSecret,
  verifyAdminToken,
} from './auth';
import type { Store } from './store';
import { readSeatsFromScreenshot, type VisionMediaType } from './vision';

export interface Deps {
  store: Store;
  env: (key: string) => string | undefined;
}

const STATE_KEY = 'state';
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const FILE_TYPES = [...IMAGE_TYPES, 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/octet-stream'];

class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public extra: Record<string, unknown> = {},
  ) {
    super(message);
  }
}

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers },
  });

async function loadState(store: Store): Promise<{ state: AppState; etag: string }> {
  let cur = await store.getJSON<AppState>(STATE_KEY);
  if (!cur) {
    await store.setJSON(STATE_KEY, buildSeedState(randomToken(), new Date().toISOString()), { onlyIfNew: true });
    cur = await store.getJSON<AppState>(STATE_KEY);
  }
  if (!cur) throw new HttpError(500, 'Could not create the starting data.');
  return { state: cur.value, etag: cur.etag };
}

/** What a client may see: no share settings, admin notes or raw-file links. */
export function clientState(s: AppState): AppState {
  const { share: _share, adminNotes: _notes, ...rest } = s;
  return {
    ...rest,
    uploads: s.uploads.map(({ rawKey: _r, warnings: _w, ...u }) => ({ ...u, warnings: [] })),
    organicUploads: s.organicUploads.map(({ rawKey: _r, ...u }) => u),
  };
}

/** Admin view: the share token is visible; the password hash is not. */
function adminState(s: AppState): AppState & { hasClientPassword: boolean } {
  return { ...s, share: s.share ? { token: s.share.token, passwordHash: null } : undefined, hasClientPassword: !!s.share?.passwordHash };
}

async function readJson<T>(req: Request): Promise<T> {
  try {
    return (await req.json()) as T;
  } catch {
    throw new HttpError(400, 'The request body was not valid JSON.');
  }
}

export async function handle(req: Request, deps: Deps): Promise<Response> {
  try {
    return await route(req, deps);
  } catch (e) {
    if (e instanceof HttpError) return json({ error: e.message, ...e.extra }, e.status);
    console.error(e);
    return json({ error: 'Something went wrong on the server. Please try again.' }, 500);
  }
}

async function route(req: Request, { store, env }: Deps): Promise<Response> {
  const url = new URL(req.url);
  const parts = url.pathname.replace(/^\/api\/?/, '').split('/').filter(Boolean);
  const [resource, id] = parts;
  const method = req.method.toUpperCase();
  const secret = await sessionSecret(env);

  const bearer = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ?? url.searchParams.get('a');
  const isAdmin = secret ? await verifyAdminToken(secret, bearer) : false;
  const requireAdmin = () => {
    if (!secret) throw new HttpError(503, 'The admin password has not been set up yet (ADMIN_PASSWORD).');
    if (!isAdmin) throw new HttpError(401, 'Please log in again.');
  };

  /** Client access via the share link (plus the password key when one is set). */
  const clientAllowed = async (state: AppState): Promise<boolean> => {
    const t = url.searchParams.get('t');
    if (!t || !state.share || !(await safeEqual(t, state.share.token))) return false;
    if (!state.share.passwordHash) return true;
    const k = url.searchParams.get('k');
    if (!k || !secret) throw new HttpError(401, 'This report is password protected.', { needsPassword: true });
    if (!(await safeEqual(k, await clientAccessKey(secret, state.share.token, state.share.passwordHash)))) {
      throw new HttpError(401, 'This report is password protected.', { needsPassword: true });
    }
    return true;
  };

  if (resource === 'health' && method === 'GET') {
    return json({ ok: true, adminConfigured: !!secret, vision: !!env('ANTHROPIC_API_KEY') });
  }

  if (resource === 'login' && method === 'POST') {
    const pw = env('ADMIN_PASSWORD');
    if (!pw || !secret) throw new HttpError(503, 'The admin password has not been set up yet (ADMIN_PASSWORD).');
    const { password } = await readJson<{ password?: string }>(req);
    if (typeof password !== 'string' || !(await safeEqual(password, pw))) {
      await new Promise((r) => setTimeout(r, 400));
      throw new HttpError(401, 'That password is not right.');
    }
    return json({ token: await issueAdminToken(secret) });
  }

  if (resource === 'state') {
    requireAdmin();
    if (method === 'GET') {
      const { state } = await loadState(store);
      return json(adminState(state));
    }
    if (method === 'PUT') {
      const body = await readJson<{ state: AppState; baseVersion: number }>(req);
      if (!body.state || typeof body.baseVersion !== 'number') throw new HttpError(400, 'Missing state or baseVersion.');
      const { state: cur, etag } = await loadState(store);
      if (cur.version !== body.baseVersion) {
        throw new HttpError(409, 'The dashboard was changed somewhere else (another tab?). Reload to get the latest, then redo your change.');
      }
      const now = new Date().toISOString();
      const { hasClientPassword: _h, ...incoming } = body.state as AppState & { hasClientPassword?: boolean };
      const next: AppState = { ...incoming, share: cur.share, version: cur.version + 1, updatedAt: now };
      if (!(await store.setJSON(STATE_KEY, next, { onlyIfMatch: etag }))) {
        throw new HttpError(409, 'The dashboard was changed at the same moment somewhere else. Reload and try again.');
      }
      return json({ version: next.version, updatedAt: now });
    }
  }

  if (resource === 'share' && method === 'POST') {
    requireAdmin();
    const body = await readJson<{ regenerate?: boolean; password?: string | null }>(req);
    const { state, etag } = await loadState(store);
    const share = { ...(state.share ?? { token: randomToken() }) };
    if (body.regenerate) share.token = randomToken();
    if (body.password === null || body.password === '') share.passwordHash = null;
    else if (typeof body.password === 'string') {
      if (body.password.length < 4) throw new HttpError(400, 'Use at least 4 characters for the report password.');
      share.passwordHash = await hashPassword(body.password);
    }
    const next = { ...state, share, version: state.version + 1, updatedAt: new Date().toISOString() };
    if (!(await store.setJSON(STATE_KEY, next, { onlyIfMatch: etag }))) throw new HttpError(409, 'Please try again.');
    return json({ token: share.token, hasClientPassword: !!share.passwordHash, version: next.version });
  }

  if (resource === 'report') {
    const { state } = await loadState(store);
    if (method === 'POST' && id === 'unlock') {
      const { t, password } = await readJson<{ t?: string; password?: string }>(req);
      if (!t || !state.share || !(await safeEqual(t, state.share.token))) throw new HttpError(404, 'This report link is no longer active.');
      if (!state.share.passwordHash || !secret) return json({ k: '' });
      if (typeof password !== 'string' || !(await checkPassword(password, state.share.passwordHash))) {
        await new Promise((r) => setTimeout(r, 400));
        throw new HttpError(401, 'That password is not right.', { needsPassword: true });
      }
      return json({ k: await clientAccessKey(secret, state.share.token, state.share.passwordHash) });
    }
    if (method === 'GET') {
      if (!(await clientAllowed(state))) throw new HttpError(404, 'This report link is no longer active. Ask your agency for the new link.');
      return json(clientState(state));
    }
  }

  if (resource === 'archive') {
    if (method === 'POST' && !id) {
      requireAdmin();
      const body = await readJson<{ label?: string; range?: ArchiveMeta['range'] }>(req);
      const { state, etag } = await loadState(store);
      const meta: ArchiveMeta = {
        id: `${new Date().toISOString().slice(0, 10)}-${randomToken(4)}`,
        label: (body.label || 'Weekly report').slice(0, 120),
        createdAt: new Date().toISOString(),
        range: body.range ?? { start: state.settings.campaignStart, end: state.settings.campaignStart },
      };
      await store.setJSON(`archive/${meta.id}`, clientState(state));
      const next = { ...state, archive: [meta, ...state.archive], version: state.version + 1, updatedAt: meta.createdAt };
      if (!(await store.setJSON(STATE_KEY, next, { onlyIfMatch: etag }))) throw new HttpError(409, 'Please try again.');
      return json({ meta, version: next.version });
    }
    if (method === 'GET' && id) {
      const { state } = await loadState(store);
      if (!isAdmin && !(await clientAllowed(state))) throw new HttpError(404, 'Not found.');
      const snap = await store.getJSON<AppState>(`archive/${id}`);
      if (!snap) throw new HttpError(404, 'That saved report was deleted.');
      return json(snap.value);
    }
    if (method === 'DELETE' && id) {
      requireAdmin();
      const { state, etag } = await loadState(store);
      await store.delete(`archive/${id}`);
      const next = { ...state, archive: state.archive.filter((a) => a.id !== id), version: state.version + 1, updatedAt: new Date().toISOString() };
      if (!(await store.setJSON(STATE_KEY, next, { onlyIfMatch: etag }))) throw new HttpError(409, 'Please try again.');
      return json({ version: next.version });
    }
  }

  if (resource === 'files') {
    if (method === 'POST' && !id) {
      requireAdmin();
      const type = (req.headers.get('content-type') ?? 'application/octet-stream').split(';')[0].trim();
      if (!FILE_TYPES.includes(type)) throw new HttpError(415, `Files of type ${type} can't be stored.`);
      const data = await req.arrayBuffer();
      if (!data.byteLength) throw new HttpError(400, 'The file was empty.');
      if (data.byteLength > MAX_FILE_BYTES) throw new HttpError(413, 'That file is over 4 MB. Try a smaller screenshot or export.');
      const key = `files/${randomToken(18)}`;
      await store.setBinary(key, data, type);
      return json({ key });
    }
    if (id && method === 'GET') {
      const key = `files/${id}`;
      if (!isAdmin) {
        const { state } = await loadState(store);
        if (!(await clientAllowed(state))) throw new HttpError(404, 'Not found.');
      }
      const file = await store.getBinary(key);
      if (!file) throw new HttpError(404, 'That file was deleted.');
      if (!isAdmin && !IMAGE_TYPES.includes(file.contentType)) throw new HttpError(404, 'Not found.');
      return new Response(file.data, {
        headers: {
          'content-type': file.contentType,
          'cache-control': 'private, max-age=86400',
          'x-content-type-options': 'nosniff',
          ...(IMAGE_TYPES.includes(file.contentType) ? {} : { 'content-disposition': 'attachment' }),
        },
      });
    }
    if (id && method === 'DELETE') {
      requireAdmin();
      await store.delete(`files/${id}`);
      return json({ ok: true });
    }
  }

  if (resource === 'vision' && method === 'POST') {
    requireAdmin();
    const apiKey = env('ANTHROPIC_API_KEY');
    if (!apiKey) throw new HttpError(501, 'Screenshot reading is off. Add an ANTHROPIC_API_KEY in Netlify to turn it on.');
    const { imageKey } = await readJson<{ imageKey?: string }>(req);
    if (!imageKey?.startsWith('files/')) throw new HttpError(400, 'Missing image.');
    const file = await store.getBinary(imageKey);
    if (!file || !IMAGE_TYPES.includes(file.contentType)) throw new HttpError(404, 'That screenshot was not found.');
    try {
      return json(await readSeatsFromScreenshot(apiKey, file.data, file.contentType as VisionMediaType));
    } catch (e) {
      console.error(e);
      throw new HttpError(502, 'Claude could not read that screenshot. Type the numbers in instead.');
    }
  }

  throw new HttpError(404, 'Not found.');
}
