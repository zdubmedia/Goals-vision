import { useMemo, useState, type ReactNode } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fileUrl } from '../../api';
import { fmtDate, fmtRange } from '../../lib/dates';
import { PLATFORM_LABEL, summarizeFollowers } from '../../lib/followers';
import { compact, int, money, pct } from '../../lib/format';
import type { TermKey } from '../../lib/glossary';
import type { FollowerAd, FollowerCampaign, FollowerPage } from '../../lib/types';
import { Carousel } from '../../ui/Carousel';
import { Icon } from '../../ui/Icon';
import { Badge, Card, cx, InfoTip, Modal, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';
import { sanitize } from '../sections/Insights';
import { ResourcesSection } from '../sections/Resources';

export const FOLLOWER_NAV = [
  { id: 'f-results', label: 'Results' },
  { id: 'f-pages', label: 'Instagram & Facebook' },
  { id: 'f-ads', label: 'Ads' },
  { id: 'f-messages', label: 'Messages' },
  { id: 'f-where', label: 'Where' },
  { id: 'f-why', label: 'Why followers matter' },
  { id: 'f-next', label: 'Next steps' },
];

export function FollowerView(props: SectionProps & { f: FollowerCampaign }) {
  const { f, state, colors, access, mode } = props;
  const s = summarizeFollowers(f, state.settings);
  const short = state.settings.clientShortName;
  const period = fmtRange({ start: f.start, end: f.asOf }, false);
  const pages = [...f.pages].sort((a, b) => (a.platform === 'instagram' ? -1 : b.platform === 'instagram' ? 1 : 0));
  const hasMessages = s.messagers !== null || f.questions.length > 0;

  return (
    <>
      {mode === 'admin' && !f.enabled && (
        <Card className="no-print !border-warn/70">
          <p className="flex items-center gap-2 text-sm">
            <Badge tone="neutral" icon="eyeOff">
              Hidden from {short}
            </Badge>
            {short} can’t see the follower dashboard yet. Switch it on in <strong>Follower ads → Show to {short}</strong>.
          </p>
        </Card>
      )}

      <Section id="f-results" title="Your follower results" subtitle={`What the follower ads did for ${short}'s Instagram and Facebook, ${period}.`}>
        <Card className="mb-4 overflow-hidden border-0 bg-gradient-to-br from-navydeep to-navy !p-0 text-white">
          <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-[auto,minmax(0,1fr)] sm:items-center sm:p-7">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold text-white/80">
                New followers <InfoTip term="newFollowers" />
              </p>
              <p className="mt-1 text-6xl font-semibold leading-none tracking-tight text-white sm:text-7xl">{int(s.newFollows)}</p>
              <p className="mt-2 text-sm text-white/80">in {s.days} days</p>
            </div>
            <p className="max-w-xl text-lg leading-snug text-white/90 sm:text-xl">
              For <strong className="text-white">{money(s.spend)}</strong> in ads, {short} gained <strong className="text-white">{int(s.newFollows)}</strong> new
              followers on Instagram and Facebook. That's <strong className="text-gold">{money(s.costPerFollower)}</strong> per follower.
            </p>
          </div>
        </Card>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          <Tile term="spend" label="Spent on ads" value={money(s.spend)} note={`${money(s.spend / s.days)} a day`} />
          {s.adReach !== null ? (
            <Tile term="reach" label="People who saw the ads" value={compact(s.adReach)} note={`${compact(s.adViews)} ad views in all`} />
          ) : (
            <Tile term="adViews" label="Ad views" value={compact(s.adViews)} note="Times the ads were seen" />
          )}
          <Tile term="profileVisits" label="Visits to the pages" value={int(s.profileVisits)} note="Taps from an ad to the Instagram profile or Facebook Page" />
          <Tile term="newFollowers" label="New followers" value={int(s.newFollows)} note={`Instagram and Facebook, from the ads and on their own`} />
          <Tile
            term="costPerFollower"
            label="Cost per follower"
            value={money(s.costPerFollower)}
            note={
              s.costPerAdFollower !== null
                ? `${money(s.costPerAdFollower)} per Instagram follow Meta credits straight to the ads (${int(s.adFollows)} of them)`
                : undefined
            }
          />
          <Tile
            term="messagers"
            label="Conversations started"
            value={s.messagers !== null ? int(s.messagers) : '—'}
            note="Messages from people, often the closest to booking"
          />
        </div>
      </Section>

      <Section
        id="f-pages"
        title="Instagram and Facebook"
        subtitle={`Followers on ${fmtDate(f.start)} and on ${fmtDate(f.countedOn ?? f.asOf)}, and new follows from any source.`}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pages.map((p) => (
            <PageCard key={p.platform} p={p} color={p.platform === 'instagram' ? colors.accent : colors.loc[0]} />
          ))}
        </div>
        {(f.daily?.length ?? 0) >= 3 ? <FollowsPerDay f={f} colors={colors} pace={s.pace} /> : <GrowthChart f={f} colors={colors} />}
        {s.growth !== null && (
          <p className="mt-3 text-sm text-ink2">
            Together, {short} went from <strong className="text-ink">{int(s.startTotal)}</strong> to <strong className="text-ink">{int(s.nowTotal)}</strong> followers, up{' '}
            {pct(s.growth, 0)} in {s.days} days.
          </p>
        )}
      </Section>

      <AdsSection f={f} access={access} />

      {hasMessages && (
        <Section id="f-messages" title="People are reaching out" subtitle="Questions in messages and comments show who's getting close to booking.">
          <Card>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[auto,minmax(0,1fr)]">
              {s.messagers !== null && (
                <div>
                  <p className="text-5xl font-semibold leading-none">{int(s.messagers)}</p>
                  <p className="mt-1 text-sm text-ink2">message conversations started</p>
                  <p className="mt-1 text-xs text-muted">
                    {pages
                      .filter((p) => p.messagers !== null)
                      .map((p) => `${PLATFORM_LABEL[p.platform]} ${p.messagers}`)
                      .join(' · ')}
                  </p>
                </div>
              )}
              {f.questions.length > 0 && (
                <div>
                  <p className="text-sm font-semibold">What people are asking</p>
                  <ul className="mt-2 space-y-1.5">
                    {f.questions.map((q) => (
                      <li key={q} className="flex items-start gap-2 text-[15px]">
                        <Icon name="info" className="mt-1 h-4 w-4 shrink-0 text-accentink" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Card>
        </Section>
      )}

      <Section id="f-where" title={`All ${f.locations.length} ranges`} subtitle={f.areaNote}>
        <Card>
          <ul className="flex flex-wrap gap-2">
            {f.locations.map((l) => (
              <li key={l} className="rounded-full bg-surface2 px-3 py-1 text-sm font-semibold">
                {l}
              </li>
            ))}
          </ul>
          {pages.some((p) => p.topCities.length) && (
            <>
              <p className="mt-5 text-sm font-semibold">Where {short}'s followers live</p>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {pages
                  .filter((p) => p.topCities.length)
                  .map((p) => (
                    <div key={p.platform}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">{PLATFORM_LABEL[p.platform]}, top cities</p>
                      <ul className="mt-1.5 space-y-1">
                        {p.topCities.map((c) => (
                          <li key={c.city} className="flex justify-between gap-3 text-sm">
                            <span>{c.city}</span>
                            <span className="tabular text-ink2">{pct(c.share, 1)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
              <p className="mt-3 text-xs text-muted">Share of all followers, from Meta. The top cities sit right in {short}'s markets.</p>
            </>
          )}
        </Card>
      </Section>

      <Section id="f-why" title="Why followers matter" subtitle={`Every follower is a local rider ${short} can keep reaching for free.`}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
          <Card>
            <div className="prose-insights text-[15px]" dangerouslySetInnerHTML={{ __html: sanitize(f.whyHtml) }} />
          </Card>
          <ValueCard s={s} short={short} marginPct={Math.round(state.settings.profitMargin * 1000) / 10} price={state.settings.prices.Basic} />
        </div>
      </Section>

      {f.nextHtml.trim() && (
        <Section id="f-next" title="Next steps" subtitle={`From ${state.settings.agencyName}.`}>
          <Card>
            <div className="prose-insights max-w-3xl text-[15px]" dangerouslySetInnerHTML={{ __html: sanitize(f.nextHtml) }} />
          </Card>
        </Section>
      )}

      {state.settings.sections.resources && <ResourcesSection {...props} hidden={false} />}
    </>
  );
}

function Tile({ label, term, value, note }: { label: string; term: TermKey; value: string; note?: string }) {
  return (
    <Card className="flex flex-col">
      <p className="flex items-center gap-1 text-[13px] font-semibold text-ink2">
        {label} <InfoTip term={term} />
      </p>
      <p className={cx('mt-2 text-[28px] font-semibold leading-none tracking-tight sm:text-[32px]', value === '—' && 'text-muted')}>{value}</p>
      {note && <p className="mt-auto pt-2 text-xs leading-snug text-muted">{note}</p>}
    </Card>
  );
}

function PageCard({ p, color }: { p: FollowerPage; color: string }) {
  const gained = p.nowFollowers - p.startFollowers;
  const stats: [string, number | null][] = [
    ['People reached', p.reach],
    ['Views', p.views],
    [p.platform === 'instagram' ? 'Profile visits' : 'Page visits', p.visits ?? null],
    ['Likes, comments & shares', p.interactions],
    ['Conversations', p.messagers],
  ];
  return (
    <Card>
      <p className="flex items-center gap-2 font-semibold">
        <span aria-hidden className="h-3 w-3 rounded-full" style={{ background: color }} /> {PLATFORM_LABEL[p.platform]}
      </p>
      <div className="mt-3 flex items-end gap-3">
        <p className="tabular text-xl text-ink2">{int(p.startFollowers)}</p>
        <Icon name="chevron" className="mb-1.5 h-5 w-5 -rotate-90 text-muted" />
        <p className="tabular text-4xl font-semibold leading-none">{int(p.nowFollowers)}</p>
        <span className="mb-1 text-sm font-semibold text-goodink">
          {gained >= 0 ? '+' : '−'}
          {int(Math.abs(gained))}
        </span>
      </div>
      <p className="mt-1 text-xs text-muted">
        {int(p.follows)} new follow{p.follows === 1 ? '' : 's'}
        {p.unfollows === null ? '' : p.unfollows > 0 ? `, ${int(p.unfollows)} unfollowed` : ', nobody unfollowed'}
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-3">
        {stats
          .filter(([, v]) => v !== null)
          .map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-muted">{k}</dt>
              <dd className="tabular font-semibold">{compact(v)}</dd>
            </div>
          ))}
      </dl>
    </Card>
  );
}

function FollowsPerDay({ f, colors, pace }: { f: FollowerCampaign; colors: SectionProps['colors']; pace: ReturnType<typeof summarizeFollowers>['pace'] }) {
  const data = (f.daily ?? []).filter((d) => d.date <= f.asOf);
  const last = data[data.length - 1]?.date;
  const fmtPace = (n: number | null) => (n === null ? '—' : n.toFixed(1));
  return (
    <Card className="mt-4">
      <p className="text-sm font-semibold text-ink2">New follows per day</p>
      <div className="mt-2 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={colors.grid} />
            {last && last >= f.start && (
              <ReferenceArea
                x1={data.find((d) => d.date >= f.start)?.date}
                x2={last}
                fill={colors.accentSoft}
                fillOpacity={0.6}
                label={{ value: 'Follower ads running', position: 'insideTopRight', fill: colors.ink2, fontSize: 11 }}
              />
            )}
            <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} stroke={colors.axis} fontSize={11} tickLine={false} minTickGap={20} />
            <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip labelFormatter={(d: string) => fmtDate(d, true)} formatter={(v: number, k: string) => [int(v), k === 'instagram' ? 'Instagram' : 'Facebook']} />
            <Line type="monotone" dataKey="instagram" stroke={colors.accent} strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="facebook" stroke={colors.loc[0]} strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex flex-wrap gap-4 text-xs text-ink2">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4" style={{ background: colors.accent }} /> Instagram
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4" style={{ background: colors.loc[0] }} /> Facebook
        </span>
      </div>
      {pace?.before && (
        <p className="mt-3 text-sm text-ink2">
          Instagram is gaining <strong className="text-ink">{fmtPace(pace.perDay.instagram.during)}</strong> followers a day, up from{' '}
          {fmtPace(pace.perDay.instagram.before)} before the ads. Facebook: <strong className="text-ink">{fmtPace(pace.perDay.facebook.during)}</strong> a day, up from{' '}
          {fmtPace(pace.perDay.facebook.before)}.
          <span className="block text-xs text-muted">
            “Before” is {fmtRange({ start: pace.before.start, end: pace.before.end }, false)}. Counts new follows from any source, not only the ads.
          </span>
        </p>
      )}
    </Card>
  );
}

function GrowthChart({ f, colors }: { f: FollowerCampaign; colors: SectionProps['colors'] }) {
  const data = useMemo(() => [...f.history].sort((a, b) => (a.date < b.date ? -1 : 1)), [f.history]);
  // Two points only make a straight line; the cards above already say it.
  if (data.length < 3) return null;
  return (
    <Card className="mt-4">
      <p className="text-sm font-semibold text-ink2">Followers over time</p>
      <div className="mt-2 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 12, left: -12, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={colors.grid} />
            <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} stroke={colors.axis} fontSize={11} tickLine={false} minTickGap={16} />
            <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} domain={['dataMin - 20', 'dataMax + 20']} />
            <Tooltip labelFormatter={(d: string) => fmtDate(d, true)} formatter={(v: number, k: string) => [int(v), k === 'instagram' ? 'Instagram' : 'Facebook']} />
            <Line type="monotone" dataKey="instagram" stroke={colors.accent} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
            <Line type="monotone" dataKey="facebook" stroke={colors.loc[0]} strokeWidth={2} dot={{ r: 3 }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function AdsSection({ f, access }: { f: FollowerCampaign; access: SectionProps['access'] }) {
  const [open, setOpen] = useState<FollowerAd | null>(null);
  const ads = [...f.ads].sort((a, b) => b.follows - a.follows);
  if (!ads.length) return null;
  const max = Math.max(...ads.map((a) => a.follows), 1);
  const slides = (a: FollowerAd) =>
    (a.imageKeys ?? []).flatMap((k, i) => {
      const src = fileUrl(k, access);
      return src ? [{ src, alt: `${a.name}, image ${i + 1}` }] : [];
    });
  return (
    <Section
      id="f-ads"
      title="Which ads brought followers"
      subtitle="Instagram follows Meta credits to each ad. Facebook follows aren't credited to ads, so they don't show here. Most of the budget goes to the ad that's working best."
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {ads.map((a, i) => {
          const pics = slides(a);
          return (
            <Card key={a.id} className="flex gap-4">
              {pics.length > 0 && (
                <button
                  type="button"
                  onClick={() => setOpen(a)}
                  className="focus-ring relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-surface2"
                  aria-label={`See the ${a.name} ad`}
                >
                  <img src={pics[0].src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  {pics.length > 1 && <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 text-[10px] font-semibold text-white">{pics.length}</span>}
                </button>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold leading-snug">{a.name}</p>
                  {i === 0 && ads.length > 1 && (
                    <Badge tone="good" icon="star">
                      Top ad
                    </Badge>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface2">
                    <span className="block h-full rounded-full bg-accent" style={{ width: `${(a.follows / max) * 100}%` }} />
                  </span>
                  <span className="tabular w-28 text-right text-sm font-semibold">{int(a.follows)} IG follows</span>
                </div>
                <p className="mt-1.5 text-xs text-ink2">
                  {money(a.spend)} spent · {a.follows ? `${money(a.spend / a.follows)} per follow` : 'no follows yet'} · {int(a.profileVisits)} page visits
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.name ?? ''} wide>
        {open && <Carousel slides={slides(open)} fit="contain" className="aspect-square bg-black/90 sm:aspect-[4/3]" label={`Images for ${open.name}`} />}
      </Modal>
    </Section>
  );
}

function ValueCard({ s, short, marginPct, price }: { s: ReturnType<typeof summarizeFollowers>; short: string; marginPct: number; price: number }): ReactNode {
  return (
    <Card className="flex flex-col gap-4">
      <div className="rounded-lg bg-gold/15 p-4">
        <p className="text-sm text-ink2">What it takes to pay for the ads</p>
        <p className="mt-1 text-lg font-semibold leading-snug">
          Each student is about <span className="text-accentink">{money(s.profitPerStudent)}</span> of profit for {short} ({marginPct}% of {money(price, 0)}).{' '}
          {s.breakEvenStudents !== null && (
            <>
              The {money(s.spend)} spent so far is covered by{' '}
              <span className="text-accentink">
                {s.breakEvenStudents} student{s.breakEvenStudents === 1 ? '' : 's'}
              </span>
              {s.breakEvenShare !== null && <>, about 1 in {Math.max(1, Math.round(1 / s.breakEvenShare))} of the new followers booking</>}.
            </>
          )}
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold">If some of the {int(s.newFollows)} new followers book a class</p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted">
                <th className="py-1 pr-2 font-semibold">Followers who book</th>
                <th className="py-1 pr-2 text-right font-semibold">Students</th>
                <th className="py-1 pr-2 text-right font-semibold">Profit, one class</th>
                <th className="py-1 text-right font-semibold">If they keep training</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {s.scenarios.map((r) => (
                <tr key={r.rate}>
                  <td className="py-1.5 pr-2">
                    {pct(r.rate, r.rate < 0.01 ? 1 : 0)} <span className="text-muted">(1 in {Math.round(1 / r.rate)})</span>
                  </td>
                  <td className="tabular py-1.5 pr-2 text-right">{r.students < 1 ? '<1' : Math.round(r.students)}</td>
                  <td className="tabular py-1.5 pr-2 text-right">{money(r.profit, 0)}</td>
                  <td className="tabular py-1.5 text-right font-semibold">{money(r.ladderProfit, 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted">
          “Keep training” means Basic, then Intermediate and ARC Level 1. There’s no reliable published number for how many followers become students, so these are
          what-ifs, not promises. Sign-up tracking will show {short}'s real rate.
        </p>
      </div>
    </Card>
  );
}
