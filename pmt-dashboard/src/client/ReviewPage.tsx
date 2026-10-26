import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api, fileUrl, type FileAccess } from '../api';
import { Loading } from '../App';
import { emailFeedback } from '../lib/notify';
import { DECISION_LABEL, summarize, type Decision, type ItemAnswer, type PublicRound, type ReviewItem } from '../lib/reviews';
import { Carousel } from '../ui/Carousel';
import { Icon } from '../ui/Icon';
import { useThemePref } from '../ui/theme';
import { Button, Card, cx, inputClass } from '../ui/ui';

export function ReviewPage() {
  const { token = '' } = useParams();
  useThemePref();
  const [round, setRound] = useState<PublicRound | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, ItemAnswer>>({});
  const [overall, setOverall] = useState('');
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const access: FileAccess = { kind: 'review', r: token };

  useEffect(() => {
    api.publicReview(token).then(
      (r) => {
        setRound(r);
        if (r.lastResponse) {
          setAnswers(r.lastResponse.answers);
          setOverall(r.lastResponse.overall);
          setName(r.lastResponse.name);
        }
        document.title = `${r.title} · feedback`;
      },
      (e) => setError(e instanceof Error ? e.message : 'Something went wrong.'),
    );
  }, [token]);

  const progress = useMemo(() => {
    if (!round) return '';
    if (round.kind === 'ads') {
      const n = round.items.filter((i) => answers[i.id]?.liked).length;
      return `${n} liked`;
    }
    const n = round.items.filter((i) => answers[i.id]?.decision).length;
    return `${n} of ${round.items.length} answered`;
  }, [round, answers]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-center">
        <div className="max-w-sm">
          <Icon name="link" className="mx-auto h-8 w-8 text-muted" />
          <p className="mt-3 font-semibold">{error}</p>
        </div>
      </div>
    );
  }
  if (!round) return <Loading label="Loading…" />;

  const isAds = round.kind === 'ads';
  const setAnswer = (id: string, patch: ItemAnswer) => setAnswers((a) => ({ ...a, [id]: { ...a[id], ...patch } }));

  const submit = async () => {
    setSending(true);
    try {
      const res = await api.submitReview(token, { name: name.trim(), overall: overall.trim(), answers });
      const sum = summarize(round, res.response);
      await emailFeedback({
        subject: `${round.clientName} feedback: ${round.title} (${sum.headline})`,
        batch: round.title,
        summary: [sum.headline, '', ...sum.lines].join('\n'),
        feedback: res.response.overall,
        name: res.response.name,
        link: `${window.location.origin}/admin/feedback`,
      });
      setSent(sum.headline);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      window.alert(e instanceof Error ? e.message : 'Sending failed. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen pb-28">
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 pb-6 pt-5 sm:px-6">
          <img src="/brand/pmt-logo.webp" alt="Pacific Motorcycle Training" className="h-12 w-auto sm:h-14" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{isAds ? 'New ad ideas' : 'Social posts to approve'}</p>
          <h1 className="mt-1 font-display text-4xl leading-none tracking-wide sm:text-5xl">{round.title}</h1>
          {round.intro && <p className="mt-3 whitespace-pre-line text-[15px] text-white/90">{round.intro}</p>}
          <p className="mt-3 text-sm text-white/75">
            {isAds
              ? 'Tap ♥ on every ad you like (pick as many as you want), add a comment if you have one, then press Submit at the bottom.'
              : 'For each post, choose Yes, Needs changes or No. If it needs changes, say what. Then press Submit at the bottom.'}
          </p>
        </div>
      </header>

      {sent && (
        <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
          <Card className="!border-good/50 !bg-good/10">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <Icon name="check" className="h-5 w-5 text-goodink" /> Thank you, your feedback was sent!
            </p>
            <p className="mt-1 text-sm text-ink2">{sent}. You can change your answers below and press Submit again any time.</p>
          </Card>
        </div>
      )}

      <main className="mx-auto max-w-3xl space-y-5 px-4 py-6 sm:px-6">
        {round.items.map((item, n) => (
          <ItemCard key={item.id} item={item} n={n} isAds={isAds} access={access} answer={answers[item.id] ?? {}} onChange={(p) => setAnswer(item.id, p)} />
        ))}

        <Card>
          <label htmlFor="overall" className="text-base font-semibold">
            Anything else?
          </label>
          <p className="text-sm text-ink2">Additional feedback, ideas or questions.</p>
          <textarea id="overall" className={`${inputClass} mt-2`} rows={4} value={overall} onChange={(e) => setOverall(e.target.value)} />
          <label htmlFor="name" className="mt-3 block text-sm font-semibold text-ink2">
            Your name (optional)
          </label>
          <input id="name" className={`${inputClass} mt-1 sm:w-64`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </Card>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <span className="text-sm text-ink2">{progress}</span>
          <Button variant="primary" className="px-6 py-3 text-base" onClick={() => void submit()} disabled={sending}>
            {sending ? 'Sending…' : sent ? 'Submit again' : 'Submit'}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ItemCard({
  item,
  n,
  isAds,
  access,
  answer,
  onChange,
}: {
  item: ReviewItem;
  n: number;
  isAds: boolean;
  access: FileAccess;
  answer: ItemAnswer;
  onChange: (p: ItemAnswer) => void;
}) {
  const slides = item.media.flatMap((m, i) => {
    const src = fileUrl(m.key, access);
    if (!src) return [];
    return [{ src, alt: `${item.title || `Option ${n + 1}`}, ${m.type} ${i + 1}`, video: m.type === 'video', poster: fileUrl(m.posterKey, access) ?? undefined }];
  });
  const decisions: { d: Decision; icon: string; tone: string }[] = [
    { d: 'yes', icon: '✅', tone: 'border-good bg-good/10 text-goodink' },
    { d: 'changes', icon: '✏️', tone: 'border-warn bg-warn/15 text-ink' },
    { d: 'no', icon: '❌', tone: 'border-bad bg-bad/10 text-badink' },
  ];
  return (
    <Card pad={false} className={cx('overflow-hidden', isAds && answer.liked && 'ring-2 ring-accent')}>
      {slides.length > 0 && <Carousel slides={slides} fit="contain" className="aspect-square bg-black/90 sm:aspect-[4/3]" label={`Media for ${item.title || `option ${n + 1}`}`} />}
      <div className="p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {item.title || `${isAds ? 'Option' : 'Post'} ${n + 1}`}
          {item.note ? ` · ${item.note}` : ''}
        </p>
        {item.headline && <p className="mt-1 text-lg font-semibold leading-snug">{item.headline}</p>}
        {item.text && <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-ink2">{item.text}</p>}

        {isAds ? (
          <button
            type="button"
            aria-pressed={!!answer.liked}
            onClick={() => onChange({ liked: !answer.liked })}
            className={cx(
              'focus-ring mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-base font-semibold transition',
              answer.liked ? 'border-accent bg-accent text-white' : 'border-line text-ink hover:border-accent',
            )}
          >
            <span aria-hidden>{answer.liked ? '♥' : '♡'}</span> {answer.liked ? 'I like this one' : 'Tap if you like this one'}
          </button>
        ) : (
          <div role="radiogroup" aria-label="Your decision" className="mt-4 grid grid-cols-3 gap-2">
            {decisions.map(({ d, icon, tone }) => (
              <button
                key={d}
                type="button"
                role="radio"
                aria-checked={answer.decision === d}
                onClick={() => onChange({ decision: d })}
                className={cx(
                  'focus-ring flex flex-col items-center gap-0.5 rounded-lg border-2 px-2 py-2.5 text-sm font-semibold transition sm:flex-row sm:justify-center sm:gap-1.5',
                  answer.decision === d ? tone : 'border-line text-ink2 hover:border-ink2',
                )}
              >
                <span aria-hidden>{icon}</span> {DECISION_LABEL[d]}
              </button>
            ))}
          </div>
        )}

        {isAds || answer.decision || answer.comment ? (
          <div className="mt-3">
            <label className="text-sm font-semibold text-ink2" htmlFor={`c-${item.id}`}>
              {!isAds && answer.decision === 'changes' ? 'What should change?' : 'Comment (optional)'}
            </label>
            <textarea
              id={`c-${item.id}`}
              className={`${inputClass} mt-1`}
              rows={answer.decision === 'changes' ? 3 : 2}
              value={answer.comment ?? ''}
              onChange={(e) => onChange({ comment: e.target.value })}
              placeholder={!isAds && answer.decision === 'changes' ? 'e.g. Use the Eureka photo, and change the date to Nov 8' : ''}
            />
          </div>
        ) : null}
      </div>
    </Card>
  );
}
