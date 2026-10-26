// Feedback pages: a batch of future ad ideas or social posts that PMT reviews
// from its own link, and the answers PMT sends back.

export type ReviewKind = 'ads' | 'posts';

export interface ReviewMedia {
  key: string;
  type: 'image' | 'video';
  /** Still image shown before a video plays. */
  posterKey?: string;
}

export interface ReviewItem {
  id: string;
  /** Short label, e.g. "Woodland – option A" or "Fri Nov 7 post". */
  title: string;
  /** Ad headline (ads only). */
  headline: string;
  /** Primary text for an ad, caption for a post. */
  text: string;
  media: ReviewMedia[];
  /** Where it would run, e.g. "Instagram + Facebook" or "Eureka". */
  note: string;
}

export type Decision = 'yes' | 'changes' | 'no';

export interface ItemAnswer {
  liked?: boolean;
  decision?: Decision;
  comment?: string;
}

export interface ReviewResponse {
  id: string;
  submittedAt: string;
  name: string;
  answers: Record<string, ItemAnswer>;
  overall: string;
}

export interface ReviewRound {
  id: string;
  kind: ReviewKind;
  title: string;
  intro: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  items: ReviewItem[];
  responses: ReviewResponse[];
}

/** Listed in the admin without loading every batch. */
export interface ReviewMeta {
  id: string;
  kind: ReviewKind;
  title: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  itemCount: number;
  responseCount: number;
  lastResponseAt: string | null;
}

/** What PMT's page receives: the batch plus their own latest answers, no history. */
export interface PublicRound {
  kind: ReviewKind;
  title: string;
  intro: string;
  items: ReviewItem[];
  lastResponse: ReviewResponse | null;
  clientName: string;
}

export const KIND_LABEL: Record<ReviewKind, string> = {
  ads: 'Ad ideas',
  posts: 'Social posts',
};

export const DECISION_LABEL: Record<Decision, string> = {
  yes: 'Yes, post it',
  changes: 'Needs changes',
  no: 'No',
};

export function metaOf(r: ReviewRound): ReviewMeta {
  const last = r.responses[r.responses.length - 1];
  return {
    id: r.id,
    kind: r.kind,
    title: r.title,
    token: r.token,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
    itemCount: r.items.length,
    responseCount: r.responses.length,
    lastResponseAt: last?.submittedAt ?? null,
  };
}

const LIMITS = { name: 100, comment: 2000, overall: 5000 };

/** Keeps only answers for items in this batch, trimmed to sensible lengths. */
export function cleanResponse(
  round: Pick<ReviewRound, 'kind' | 'items'>,
  input: unknown,
): Omit<ReviewResponse, 'id' | 'submittedAt'> | null {
  if (!input || typeof input !== 'object') return null;
  const body = input as { name?: unknown; overall?: unknown; answers?: unknown };
  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const answers: Record<string, ItemAnswer> = {};
  const raw = body.answers && typeof body.answers === 'object' ? (body.answers as Record<string, unknown>) : {};
  for (const item of round.items) {
    const a = raw[item.id];
    if (!a || typeof a !== 'object') continue;
    const { liked, decision, comment } = a as Record<string, unknown>;
    const out: ItemAnswer = {};
    if (round.kind === 'ads' && liked === true) out.liked = true;
    if (round.kind === 'posts' && (decision === 'yes' || decision === 'changes' || decision === 'no')) out.decision = decision;
    const c = str(comment, LIMITS.comment);
    if (c) out.comment = c;
    if (Object.keys(out).length) answers[item.id] = out;
  }
  return { name: str(body.name, LIMITS.name), overall: str(body.overall, LIMITS.overall), answers };
}

/** Plain-text summary for the email and the admin view. */
export function summarize(round: Pick<ReviewRound, 'kind' | 'items' | 'title'>, r: Omit<ReviewResponse, 'id'>): { headline: string; lines: string[] } {
  const label = (i: ReviewItem, n: number) => i.title || `#${n + 1}`;
  const lines: string[] = [];
  let headline: string;
  if (round.kind === 'ads') {
    const liked = round.items.filter((i) => r.answers[i.id]?.liked);
    headline = `Liked ${liked.length} of ${round.items.length}${liked.length ? `: ${liked.map((i) => label(i, round.items.indexOf(i))).join(', ')}` : ''}`;
    round.items.forEach((i, n) => {
      const a = r.answers[i.id];
      lines.push(`${a?.liked ? '♥' : '·'} ${label(i, n)}${a?.comment ? ` — "${a.comment}"` : ''}`);
    });
  } else {
    const count = (d: Decision) => round.items.filter((i) => r.answers[i.id]?.decision === d).length;
    const undecided = round.items.length - count('yes') - count('changes') - count('no');
    headline = `${count('yes')} approved, ${count('changes')} need changes, ${count('no')} no${undecided ? `, ${undecided} not answered` : ''}`;
    round.items.forEach((i, n) => {
      const a = r.answers[i.id];
      const d = a?.decision ? DECISION_LABEL[a.decision] : 'Not answered';
      lines.push(`${label(i, n)}: ${d}${a?.comment ? ` — "${a.comment}"` : ''}`);
    });
  }
  if (r.overall) lines.push('', `Additional feedback: ${r.overall}`);
  return { headline, lines };
}
