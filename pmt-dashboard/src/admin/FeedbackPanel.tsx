import { useCallback, useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { api, fileUrl } from '../api';
import { fmtDateTime } from '../lib/format';
import { DECISION_LABEL, KIND_LABEL, summarize, type ReviewItem, type ReviewKind, type ReviewMedia, type ReviewMeta, type ReviewRound } from '../lib/reviews';
import { Icon } from '../ui/Icon';
import { Badge, Button, Card, cx, Field, inputClass, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { compressImage, newId, videoPoster } from './files';

export function FeedbackPanel() {
  return (
    <Routes>
      <Route index element={<RoundList />} />
      <Route path=":id" element={<RoundEditor />} />
    </Routes>
  );
}

export const reviewLink = (token: string) => `${window.location.origin}/review/${token}`;

function RoundList() {
  const { toast } = useAdmin();
  const nav = useNavigate();
  const [list, setList] = useState<ReviewMeta[] | null>(null);
  const [kind, setKind] = useState<ReviewKind>('ads');
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.listReviews().then(setList, (e) => toast(e instanceof Error ? e.message : 'Could not load.', 'error'));
  }, [toast]);

  return (
    <>
      <PanelTitle title="Feedback">
        Send PMT a private link with new ad ideas to pick favorites from, or social posts to approve. Their answers show up here, and you get an email when
        they press Submit.
      </PanelTitle>

      <Card>
        <h2 className="text-base font-semibold">Start a new batch</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(['ads', 'posts'] as ReviewKind[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              aria-pressed={kind === k}
              className={cx('focus-ring rounded-lg border-2 p-4 text-left', kind === k ? 'border-accent bg-accent/5' : 'border-line hover:border-ink2')}
            >
              <p className="font-semibold">{KIND_LABEL[k]}</p>
              <p className="mt-1 text-sm text-ink2">
                {k === 'ads' ? 'PMT taps ♥ on the ones they like (as many as they want), adds comments, then submits.' : 'For each post PMT picks: Yes, post it · Needs changes (and says what) · No.'}
              </p>
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end">
          <Field label="Name for this batch" className="flex-1">
            <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={kind === 'ads' ? 'e.g. November ad refresh' : 'e.g. Posts for the week of Nov 3'} />
          </Field>
          <Button
            variant="primary"
            icon="plus"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                const r = await api.createReview(kind, title.trim());
                nav(`/admin/feedback/${r.id}`);
              } catch (e) {
                toast(e instanceof Error ? e.message : 'Could not create.', 'error');
                setBusy(false);
              }
            }}
          >
            Create
          </Button>
        </div>
      </Card>

      <Card>
        <h2 className="mb-2 text-base font-semibold">Your batches</h2>
        {!list ? (
          <p className="text-sm text-muted">Loading…</p>
        ) : !list.length ? (
          <p className="text-sm text-muted">None yet. Start one above.</p>
        ) : (
          <ul className="divide-y divide-line">
            {list.map((m) => (
              <li key={m.id}>
                <Link to={`/admin/feedback/${m.id}`} className="focus-ring -mx-2 flex flex-wrap items-center justify-between gap-2 rounded-md px-2 py-3 hover:bg-surface2">
                  <span>
                    <span className="font-semibold">{m.title}</span>{' '}
                    <Badge tone="neutral">{KIND_LABEL[m.kind]}</Badge>
                    <span className="block text-xs text-muted">
                      {m.itemCount} item{m.itemCount === 1 ? '' : 's'} · created {fmtDateTime(m.createdAt)}
                    </span>
                  </span>
                  {m.lastResponseAt ? (
                    <Badge tone="good" icon="check">
                      Answered {fmtDateTime(m.lastResponseAt)}
                    </Badge>
                  ) : (
                    <Badge tone="neutral">Waiting for PMT</Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}

function RoundEditor() {
  const { id = '' } = useParams();
  const { toast } = useAdmin();
  const nav = useNavigate();
  const [saved, setSaved] = useState<ReviewRound | null>(null);
  const [draft, setDraft] = useState<Pick<ReviewRound, 'title' | 'intro' | 'items'> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await api.getReview(id);
      setSaved(r);
      setDraft({ title: r.title, intro: r.intro, items: r.items });
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Could not load.', 'error');
    }
  }, [id, toast]);
  useEffect(() => {
    void load();
  }, [load]);

  const dirty = !!saved && !!draft && JSON.stringify({ title: saved.title, intro: saved.intro, items: saved.items }) !== JSON.stringify(draft);
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  if (!saved || !draft) return <p className="text-sm text-muted">Loading…</p>;
  const isAds = saved.kind === 'ads';
  const setItem = (itemId: string, patch: Partial<ReviewItem>) => setDraft({ ...draft, items: draft.items.map((i) => (i.id === itemId ? { ...i, ...patch } : i)) });
  const save = async () => {
    setSaving(true);
    try {
      const r = await api.saveReview(id, draft);
      setSaved(r);
      setDraft({ title: r.title, intro: r.intro, items: r.items });
      toast('Saved. PMT sees the changes on their link.');
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Saving failed.', 'error');
    } finally {
      setSaving(false);
    }
  };
  const link = reviewLink(saved.token);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Link to="/admin/feedback" className="focus-ring rounded font-semibold text-ink2 hover:text-ink">
          ← All batches
        </Link>
        <Badge tone="neutral">{KIND_LABEL[saved.kind]}</Badge>
      </div>

      <div className="sticky top-14 z-30 -mx-2 flex flex-wrap items-center justify-end gap-2 rounded-lg px-2 py-2 backdrop-blur">
        {dirty && <span className="text-sm text-ink2">Unsaved changes</span>}
        <Button variant="primary" icon="check" disabled={!dirty || saving} onClick={() => void save()}>
          {saving ? 'Saving…' : 'Save'}
        </Button>
      </div>

      <Card>
        <div className="grid grid-cols-1 gap-3">
          <Field label="Name (PMT sees this as the page title)">
            <input className={inputClass} value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
          </Field>
          <Field label="Note to PMT (optional)" hint="Shown at the top of their page.">
            <textarea
              className={inputClass}
              rows={2}
              value={draft.intro}
              onChange={(e) => setDraft({ ...draft, intro: e.target.value })}
              placeholder={isAds ? 'Here are new ad ideas for when the current ones get tired. Tap ♥ on your favorites.' : 'Here are the posts for next week. Let me know which are good to go.'}
            />
          </Field>
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">PMT's link</h2>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input readOnly className={`${inputClass} font-mono text-xs`} value={link} onFocus={(e) => e.target.select()} aria-label="Feedback link" />
          <div className="flex gap-2">
            <Button
              variant="primary"
              icon="link"
              onClick={async () => {
                if (dirty) toast('Save first so PMT sees your latest changes.', 'error');
                try {
                  await navigator.clipboard.writeText(link);
                  toast('Link copied. Text it to PMT.');
                } catch {
                  toast('Copy didn’t work. Select the link and copy it by hand.', 'error');
                }
              }}
            >
              Copy
            </Button>
            <a href={link} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-line hover:bg-surface2">
              Preview
            </a>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted">This link only shows this batch. It's separate from the results report link.</p>
      </Card>

      <div className="space-y-4">
        {draft.items.map((item, n) => (
          <Card key={item.id}>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="font-semibold">
                {isAds ? 'Ad idea' : 'Post'} {n + 1}
              </h3>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" disabled={n === 0} onClick={() => setDraft({ ...draft, items: swap(draft.items, n, n - 1) })} title="Move up">
                  ↑
                </Button>
                <Button size="sm" variant="ghost" disabled={n === draft.items.length - 1} onClick={() => setDraft({ ...draft, items: swap(draft.items, n, n + 1) })} title="Move down">
                  ↓
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  icon="trash"
                  title="Remove"
                  onClick={() => window.confirm('Remove this item?') && setDraft({ ...draft, items: draft.items.filter((i) => i.id !== item.id) })}
                />
              </div>
            </div>
            <MediaEditor media={item.media} onChange={(media) => setItem(item.id, { media })} />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Label">
                <input className={inputClass} value={item.title} onChange={(e) => setItem(item.id, { title: e.target.value })} placeholder={isAds ? 'e.g. Woodland – option A' : 'e.g. Fri Nov 7 – class reminder'} />
              </Field>
              <Field label={isAds ? 'Where it would run' : 'Where / when'}>
                <input className={inputClass} value={item.note} onChange={(e) => setItem(item.id, { note: e.target.value })} placeholder={isAds ? 'e.g. Eureka' : 'e.g. Instagram + Facebook, Fri morning'} />
              </Field>
              {isAds && (
                <Field label="Headline" className="sm:col-span-2">
                  <input className={inputClass} value={item.headline} onChange={(e) => setItem(item.id, { headline: e.target.value })} />
                </Field>
              )}
              <Field label={isAds ? 'Primary text' : 'Caption'} className="sm:col-span-2">
                <textarea className={inputClass} rows={4} value={item.text} onChange={(e) => setItem(item.id, { text: e.target.value })} />
              </Field>
            </div>
          </Card>
        ))}
        <Button
          icon="plus"
          onClick={() => setDraft({ ...draft, items: [...draft.items, { id: newId('item'), title: '', headline: '', text: '', media: [], note: '' }] })}
        >
          Add {isAds ? 'an ad idea' : 'a post'}
        </Button>
      </div>

      <Responses round={saved} />

      <Card>
        <h2 className="text-base font-semibold">Link & clean-up</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            variant="danger"
            icon="refresh"
            onClick={async () => {
              if (!window.confirm('Make a new link? The old one stops working.')) return;
              const r = await api.newReviewLink(id);
              setSaved({ ...saved, token: r.token });
              toast('New link made.');
            }}
          >
            Make a new link
          </Button>
          <Button
            variant="danger"
            icon="trash"
            onClick={async () => {
              if (!window.confirm('Delete this batch and PMT’s answers? This can’t be undone.')) return;
              await api.deleteReview(id);
              toast('Batch deleted.');
              nav('/admin/feedback');
            }}
          >
            Delete batch
          </Button>
        </div>
      </Card>
    </>
  );
}

function swap<T>(list: T[], a: number, b: number): T[] {
  const next = [...list];
  [next[a], next[b]] = [next[b], next[a]];
  return next;
}

function MediaEditor({ media, onChange }: { media: ReviewMedia[]; onChange: (m: ReviewMedia[]) => void }) {
  const { toast } = useAdmin();
  const [progress, setProgress] = useState<string | null>(null);

  const add = async (files: File[]) => {
    const added: ReviewMedia[] = [];
    try {
      for (const [i, f] of files.entries()) {
        const label = files.length > 1 ? `${i + 1} of ${files.length}` : '';
        if (f.type.startsWith('video/') || /\.(mp4|mov|webm)$/i.test(f.name)) {
          setProgress(`Uploading video ${label} … 0%`);
          const poster = await videoPoster(f);
          const posterKey = poster ? (await api.uploadFile(poster, 'image/jpeg')).key : undefined;
          const { key } = await api.uploadVideo(f, (p) => setProgress(`Uploading video ${label} … ${Math.round(p * 100)}%`));
          added.push({ key, type: 'video', posterKey });
        } else {
          setProgress(`Uploading image ${label}…`);
          const { key } = await api.uploadFile(await compressImage(f, 1600), 'image/jpeg');
          added.push({ key, type: 'image' });
        }
      }
      onChange([...media, ...added]);
      toast(`${added.length} file${added.length === 1 ? '' : 's'} added. Press Save when you're done.`);
    } catch (e) {
      if (added.length) onChange([...media, ...added]);
      toast(e instanceof Error ? e.message : 'Upload failed.', 'error');
    } finally {
      setProgress(null);
    }
  };

  return (
    <div>
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {media.map((m, i) => {
          const thumb = fileUrl(m.type === 'video' ? m.posterKey : m.key, { kind: 'admin' });
          return (
            <li key={m.key} className="w-28 shrink-0">
              <div className="relative aspect-square overflow-hidden rounded-md bg-navy">
                {thumb ? <img src={thumb} alt="" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-xs text-white/70">Video</div>}
                {m.type === 'video' && (
                  <span className="absolute bottom-1 left-1 rounded bg-black/70 px-1.5 text-[10px] font-semibold text-white">▶ Video</span>
                )}
                {i === 0 && <span className="absolute left-1 top-1 rounded bg-black/60 px-1.5 text-[10px] font-semibold text-white">Cover</span>}
              </div>
              <div className="mt-1 flex justify-between text-xs">
                <button type="button" className="focus-ring rounded px-1 text-ink2 disabled:opacity-30" disabled={i === 0} onClick={() => onChange(swap(media, i, i - 1))} aria-label="Move left">
                  ←
                </button>
                <button type="button" className="focus-ring rounded px-1 text-muted hover:text-badink" onClick={() => onChange(media.filter((x) => x.key !== m.key))}>
                  Remove
                </button>
                <button type="button" className="focus-ring rounded px-1 text-ink2 disabled:opacity-30" disabled={i === media.length - 1} onClick={() => onChange(swap(media, i, i + 1))} aria-label="Move right">
                  →
                </button>
              </div>
            </li>
          );
        })}
        <li className="w-28 shrink-0">
          <label
            className={cx(
              'flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-line px-1 text-center text-[11px] font-semibold text-ink2 hover:border-ink2',
              progress && 'pointer-events-none opacity-70',
            )}
          >
            <Icon name="plus" className="h-4 w-4" />
            {progress ?? 'Add images or videos'}
            <input
              type="file"
              accept="image/*,video/mp4,video/quicktime,video/webm"
              multiple
              className="sr-only"
              onChange={(e) => {
                const files = [...(e.target.files ?? [])];
                e.target.value = '';
                if (files.length) void add(files);
              }}
            />
          </label>
        </li>
      </ul>
      <p className="mt-1 text-xs text-muted">Several files = PMT swipes through them. Videos up to 300 MB (big ones take a minute to upload).</p>
    </div>
  );
}

function Responses({ round }: { round: ReviewRound }) {
  const [showAll, setShowAll] = useState(false);
  const list = [...round.responses].reverse();
  if (!list.length) {
    return (
      <Card>
        <h2 className="text-base font-semibold">PMT's answers</h2>
        <p className="mt-1 text-sm text-muted">No answers yet. You'll get an email when PMT submits.</p>
      </Card>
    );
  }
  const shown = showAll ? list : list.slice(0, 1);
  return (
    <Card>
      <h2 className="text-base font-semibold">PMT's answers</h2>
      {list.length > 1 && <p className="text-xs text-muted">They've submitted {list.length} times. The newest is first and is the one that counts.</p>}
      <div className="mt-3 space-y-4">
        {shown.map((r, idx) => {
          const sum = summarize(round, r);
          return (
            <div key={r.id} className={cx('rounded-lg border p-4', idx === 0 ? 'border-accent/40' : 'border-line')}>
              <p className="text-xs text-muted">
                {fmtDateTime(r.submittedAt)}
                {r.name ? ` · ${r.name}` : ''}
                {idx === 0 && list.length > 1 ? ' · latest' : ''}
              </p>
              <p className="mt-1 font-semibold">{sum.headline}</p>
              <ul className="mt-3 space-y-2">
                {round.items.map((item, n) => {
                  const a = r.answers[item.id];
                  const thumb = item.media[0] ? fileUrl(item.media[0].type === 'video' ? item.media[0].posterKey : item.media[0].key, { kind: 'admin' }) : null;
                  return (
                    <li key={item.id} className="flex items-start gap-3 text-sm">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded bg-navy">{thumb && <img src={thumb} alt="" className="h-full w-full object-cover" />}</div>
                      <div className="min-w-0">
                        <p className="font-semibold">
                          {item.title || `#${n + 1}`}{' '}
                          {round.kind === 'ads' ? (
                            a?.liked ? <Badge tone="good">♥ Liked</Badge> : <span className="text-xs font-normal text-muted">not picked</span>
                          ) : a?.decision ? (
                            <Badge tone={a.decision === 'yes' ? 'good' : a.decision === 'changes' ? 'warn' : 'bad'}>{DECISION_LABEL[a.decision]}</Badge>
                          ) : (
                            <span className="text-xs font-normal text-muted">not answered</span>
                          )}
                        </p>
                        {a?.comment && <p className="mt-0.5 whitespace-pre-line text-ink2">“{a.comment}”</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>
              {r.overall && (
                <div className="mt-3">
                  <Note>
                    <span className="font-semibold text-ink">Additional feedback:</span> <span className="whitespace-pre-line">{r.overall}</span>
                  </Note>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {list.length > 1 && (
        <Button className="mt-3" size="sm" variant="ghost" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show only the latest' : `Show all ${list.length} submissions`}
        </Button>
      )}
    </Card>
  );
}
