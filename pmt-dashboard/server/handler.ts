// The whole API. Runs inside a Netlify Function in production and inside the
// Vite dev server locally; both hand it a web Request and a Store.

import { buildSeedState } from '../src/lib/seed';
import type { PublicRound, ReviewKind, ReviewRound } from '../src/lib/reviews';
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
import { createRound, deleteRound, getRound, listRounds, newRoundLink, roundByToken, roundHasFile, saveRound, submitResponse } from './reviews';
import type { Store } from './store';
import { readSeatsFromScreenshot, type VisionMediaType } from './vision';

export interface Deps {
  store: Store;
  env: (key: string) => string | undefined;
}

const STATE_KEY = 'state';
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];
/** Videos arrive in pieces this size (under the 4.5 MB a function request can carry). */
export const CHUNK_BYTES = 4_000_000;
const MAX_VIDEO_BYTES = 300 * 1024 * 1024;
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
  const [resource, id, sub] = parts;
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
      let viaReview = false;
      if (!isAdmin) {
        const r = url.searchParams.get('r');
        if (r) {
          const round = await roundByToken(store, r);
          if (!round || !roundHasFile(round, key)) throw new HttpError(404, 'Not found.');
          viaReview = true;
        } else {
          const { state } = await loadState(store);
          if (!(await clientAllowed(state))) throw new HttpError(404, 'Not found.');
        }
      }
      const file = await store.getBinary(key);
      if (!file) {
        const meta = await store.getJSON<ChunkedMeta>(`${key}.meta`);
        if (!meta?.value.complete) throw new HttpError(404, 'That file was deleted.');
        return serveChunked(store, key, meta.value, req.headers.get('range'));
      }
      if (!isAdmin && !IMAGE_TYPES.includes(file.contentType) && !(viaReview && VIDEO_TYPES.includes(file.contentType))) throw new HttpError(404, 'Not found.');
      return new Response(file.data, {
        headers: {
          'content-type': file.contentType,
          'cache-control': 'private, max-age=86400',
          'x-content-type-options': 'nosniff',
          ...(IMAGE_TYPES.includes(file.contentType) || VIDEO_TYPES.includes(file.contentType) ? {} : { 'content-disposition': 'attachment' }),
        },
      });
    }
    if (id && method === 'DELETE') {
      requireAdmin();
      const key = `files/${id}`;
      const meta = await store.getJSON<ChunkedMeta>(`${key}.meta`);
      if (meta) {
        for (let n = 0; n < meta.value.parts; n++) await store.delete(`${key}/part-${n}`);
        await store.delete(`${key}.meta`);
      }
      await store.delete(key);
      return json({ ok: true });
    }
  }

  // Large videos: start → send each piece → finish.
  if (resource === 'uploads') {
    requireAdmin();
    if (method === 'POST' && !id) {
      const { contentType, size } = await readJson<{ contentType?: string; size?: number }>(req);
      if (!contentType || !VIDEO_TYPES.includes(contentType)) throw new HttpError(415, 'Videos must be MP4, MOV or WebM.');
      if (typeof size !== 'number' || size <= 0) throw new HttpError(400, 'Missing file size.');
      if (size > MAX_VIDEO_BYTES) throw new HttpError(413, 'That video is over 300 MB. Export a smaller version (1080p is plenty).');
      const fileId = randomToken(18);
      const meta: ChunkedMeta = { contentType, size, chunkSize: CHUNK_BYTES, parts: Math.ceil(size / CHUNK_BYTES), complete: false };
      await store.setJSON(`files/${fileId}.meta`, meta);
      return json({ id: fileId, chunkSize: CHUNK_BYTES, parts: meta.parts });
    }
    const meta = id ? await store.getJSON<ChunkedMeta>(`files/${id}.meta`) : null;
    if (!meta) throw new HttpError(404, 'That upload was not started.');
    if (method === 'PUT' && sub !== undefined) {
      const n = Number(sub);
      if (!Number.isInteger(n) || n < 0 || n >= meta.value.parts) throw new HttpError(400, 'Bad piece number.');
      const data = await req.arrayBuffer();
      const expected = n === meta.value.parts - 1 ? meta.value.size - n * meta.value.chunkSize : meta.value.chunkSize;
      if (data.byteLength !== expected) throw new HttpError(400, 'A piece of the video arrived damaged. Please try again.');
      await store.setBinary(`files/${id}/part-${n}`, data, 'application/octet-stream');
      return json({ ok: true });
    }
    if (method === 'POST' && sub === 'done') {
      for (let n = 0; n < meta.value.parts; n++) {
        if (!(await store.getBinary(`files/${id}/part-${n}`))) throw new HttpError(400, 'Part of the video is missing. Please upload it again.');
      }
      await store.setJSON(`files/${id}.meta`, { ...meta.value, complete: true });
      return json({ key: `files/${id}` });
    }
  }

  // Feedback batches (admin).
  if (resource === 'reviews') {
    requireAdmin();
    if (method === 'GET' && !id) return json(await listRounds(store));
    if (method === 'POST' && !id) {
      const { kind, title } = await readJson<{ kind?: ReviewKind; title?: string }>(req);
      if (kind !== 'ads' && kind !== 'posts') throw new HttpError(400, 'Choose ad ideas or social posts.');
      return json(await createRound(store, kind, String(title ?? '')));
    }
    if (id && method === 'GET' && !sub) {
      const r = await getRound(store, id);
      if (!r) throw new HttpError(404, 'That feedback batch was deleted.');
      return json(r.round);
    }
    if (id && method === 'PUT') {
      const body = await readJson<Pick<ReviewRound, 'title' | 'intro' | 'items'>>(req);
      const r = await saveRound(store, id, body);
      if (!r) throw new HttpError(404, 'That feedback batch was deleted.');
      return json(r);
    }
    if (id && method === 'POST' && sub === 'link') {
      const r = await newRoundLink(store, id);
      if (!r) throw new HttpError(404, 'That feedback batch was deleted.');
      return json(r);
    }
    if (id && method === 'DELETE') {
      await deleteRound(store, id);
      return json({ ok: true });
    }
  }

  // Feedback page (PMT's link).
  if (resource === 'review' && id) {
    if (method === 'GET') {
      const round = await roundByToken(store, id);
      if (!round) throw new HttpError(404, 'This feedback link is no longer active. Ask your agency for the new one.');
      const { state } = await loadState(store);
      const out: PublicRound = {
        kind: round.kind,
        title: round.title,
        intro: round.intro,
        items: round.items,
        lastResponse: round.responses[round.responses.length - 1] ?? null,
        clientName: state.settings.clientShortName,
      };
      return json(out);
    }
    if (method === 'POST') {
      const result = await submitResponse(store, id, await readJson<unknown>(req));
      if (!result) throw new HttpError(404, 'This feedback link is no longer active. Ask your agency for the new one.');
      return json({ ok: true, response: result.response });
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

interface ChunkedMeta {
  contentType: string;
  size: number;
  chunkSize: number;
  parts: number;
  complete: boolean;
}

/** Serves a stored video one piece at a time, answering the range requests video players make. */
async function serveChunked(store: Store, key: string, meta: ChunkedMeta, range: string | null): Promise<Response> {
  const m = range ? /bytes=(\d*)-(\d*)/.exec(range) : null;
  let start = 0;
  let end = meta.size - 1;
  if (m) {
    if (m[1] === '' && m[2] !== '') start = Math.max(0, meta.size - Number(m[2]));
    else {
      start = Number(m[1] || 0);
      if (m[2] !== '') end = Math.min(meta.size - 1, Number(m[2]));
    }
  }
  if (start >= meta.size || start > end) {
    return new Response(null, { status: 416, headers: { 'content-range': `bytes */${meta.size}` } });
  }
  const part = Math.floor(start / meta.chunkSize);
  const partStart = part * meta.chunkSize;
  end = Math.min(end, partStart + meta.chunkSize - 1);
  const piece = await store.getBinary(`${key}/part-${part}`);
  if (!piece) throw new HttpError(404, 'Part of that video is missing.');
  const body = piece.data.slice(start - partStart, end - partStart + 1);
  return new Response(body, {
    status: 206,
    headers: {
      'content-type': meta.contentType,
      'content-range': `bytes ${start}-${end}/${meta.size}`,
      'content-length': String(end - start + 1),
      'accept-ranges': 'bytes',
      'cache-control': 'private, max-age=86400',
      'x-content-type-options': 'nosniff',
    },
  });
}
