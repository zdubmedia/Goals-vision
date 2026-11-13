// Storage for feedback batches (future ad ideas, social posts) and PMT's answers.
// Kept apart from the dashboard data so the report never carries them.

import { cleanResponse, metaOf, type ReviewKind, type ReviewMeta, type ReviewResponse, type ReviewRound } from '../src/lib/reviews';
import { randomToken, safeEqual } from './auth';
import type { Store } from './store';

const INDEX = 'reviews/index';
const roundKey = (id: string) => `reviews/round/${id}`;

export async function listRounds(store: Store): Promise<ReviewMeta[]> {
  return (await store.getJSON<ReviewMeta[]>(INDEX))?.value ?? [];
}

/** Writes the index with a retry, since a submit and an admin edit can land together. */
async function updateIndex(store: Store, change: (list: ReviewMeta[]) => ReviewMeta[]): Promise<void> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const cur = await store.getJSON<ReviewMeta[]>(INDEX);
    const next = change(cur?.value ?? []);
    const ok = cur ? await store.setJSON(INDEX, next, { onlyIfMatch: cur.etag }) : await store.setJSON(INDEX, next, { onlyIfNew: true });
    if (ok) return;
  }
  throw new Error('Could not update the feedback list. Please try again.');
}

const upsertMeta = (r: ReviewRound) => (list: ReviewMeta[]) => [metaOf(r), ...list.filter((m) => m.id !== r.id)];

export async function getRound(store: Store, id: string): Promise<{ round: ReviewRound; etag: string } | null> {
  const r = await store.getJSON<ReviewRound>(roundKey(id));
  return r ? { round: r.value, etag: r.etag } : null;
}

export async function createRound(store: Store, kind: ReviewKind, title: string): Promise<ReviewRound> {
  const now = new Date().toISOString();
  const round: ReviewRound = {
    id: `${now.slice(0, 10)}-${randomToken(4)}`,
    kind,
    title: title.slice(0, 120) || (kind === 'ads' ? 'New ad ideas' : 'Social posts to approve'),
    intro: '',
    token: randomToken(),
    createdAt: now,
    updatedAt: now,
    items: [],
    responses: [],
  };
  await store.setJSON(roundKey(round.id), round);
  await updateIndex(store, upsertMeta(round));
  return round;
}

/** Saves the admin's edits. Answers and the link stay as stored on the server. */
export async function saveRound(store: Store, id: string, edits: Pick<ReviewRound, 'title' | 'intro' | 'items'>): Promise<ReviewRound | null> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const cur = await getRound(store, id);
    if (!cur) return null;
    const next: ReviewRound = {
      ...cur.round,
      title: String(edits.title ?? '').slice(0, 120),
      intro: String(edits.intro ?? '').slice(0, 2000),
      items: Array.isArray(edits.items) ? edits.items.slice(0, 60) : cur.round.items,
      updatedAt: new Date().toISOString(),
    };
    if (await store.setJSON(roundKey(id), next, { onlyIfMatch: cur.etag })) {
      await updateIndex(store, upsertMeta(next));
      return next;
    }
  }
  throw new Error('Could not save. Please try again.');
}

export async function newRoundLink(store: Store, id: string): Promise<ReviewRound | null> {
  const cur = await getRound(store, id);
  if (!cur) return null;
  const next = { ...cur.round, token: randomToken(), updatedAt: new Date().toISOString() };
  await store.setJSON(roundKey(id), next);
  await updateIndex(store, upsertMeta(next));
  return next;
}

export async function deleteRound(store: Store, id: string): Promise<void> {
  await store.delete(roundKey(id));
  await updateIndex(store, (list) => list.filter((m) => m.id !== id));
}

export async function roundByToken(store: Store, token: string | null): Promise<ReviewRound | null> {
  if (!token) return null;
  for (const m of await listRounds(store)) {
    if (await safeEqual(m.token, token)) return (await getRound(store, m.id))?.round ?? null;
  }
  return null;
}

export async function submitResponse(store: Store, token: string, body: unknown): Promise<{ round: ReviewRound; response: ReviewResponse } | null> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const found = await roundByToken(store, token);
    if (!found) return null;
    const cur = await getRound(store, found.id);
    if (!cur) return null;
    const clean = cleanResponse(cur.round, body);
    if (!clean) throw new Error('The answers could not be read.');
    const response: ReviewResponse = { id: randomToken(6), submittedAt: new Date().toISOString(), ...clean };
    const next = { ...cur.round, responses: [...cur.round.responses, response].slice(-50) };
    if (await store.setJSON(roundKey(found.id), next, { onlyIfMatch: cur.etag })) {
      await updateIndex(store, upsertMeta(next));
      return { round: next, response };
    }
  }
  throw new Error('Could not save your answers. Please try again.');
}

/** True when a file belongs to this batch (so PMT's link may load it). */
export function roundHasFile(round: ReviewRound, key: string): boolean {
  return round.items.some((i) => i.media.some((m) => m.key === key || m.posterKey === key));
}
