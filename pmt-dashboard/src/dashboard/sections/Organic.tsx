import { Bar, BarChart, Cell, Line, LineChart, CartesianGrid, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { daysBetween, fmtDate, fmtRange } from '../../lib/dates';
import { compact, deltaPct, int } from '../../lib/format';
import type { OrganicCard } from '../../lib/model';
import { followerSeries, ORGANIC_METRICS } from '../../lib/organic';
import type { ChartColors } from '../../ui/theme';
import { Badge, Card, InfoTip, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

const EXTRA_LABELS: Record<string, string> = {
  phone_calls: 'Phone calls to PMT',
  dms: 'DMs / messages to PMT',
  gbp_calls: 'Google Business calls',
  gbp_website_clicks: 'Google Business website clicks',
};

export function OrganicSection({ m, state, colors, hidden }: SectionProps & { hidden: boolean }) {
  const ig = m.organic.filter((o) => o.platform === 'instagram');
  const fb = m.organic.filter((o) => o.platform === 'facebook');
  const fbFollowers = state.organic.filter((e) => e.platform === 'facebook' && e.metric === 'followers_total').sort((a, b) => (a.end < b.end ? 1 : -1))[0];
  const igSeries = followerSeries(state.organic, 'instagram');
  const fbSeries = followerSeries(state.organic, 'facebook');
  const series = igSeries.length >= 3 ? { name: 'Instagram', data: igSeries } : fbSeries.length >= 3 ? { name: 'Facebook', data: fbSeries } : null;
  const highlight = ig.find((o) => o.metric === 'link_taps') ?? ig.find((o) => o.metric === 'profile_visits') ?? m.organic[0];
  const extras = Object.entries(m.extras);
  const igv = m.totals?.metrics.igProfileVisits ?? null;
  const eng = m.totals?.metrics.postEngagements ?? null;
  const fromAds = igv !== null || eng !== null;

  return (
    <Section
      id="social"
      title="The halo effect"
      subtitle="Ads also send people to PMT's Instagram and Facebook. These numbers compare the most recent period with the same length of time before it."
      hiddenForClient={hidden}
    >
      {!m.organic.length && !extras.length && !fromAds ? (
        <Note>No Instagram or Facebook page numbers have been added yet.</Note>
      ) : (
        <div className="space-y-4">
          {fromAds && (
            <Card>
              <p className="text-sm font-semibold text-ink2">Straight from the ads ({fmtRange(m.totals!.range, false)})</p>
              <dl className="mt-3 grid grid-cols-2 gap-4">
                {igv !== null && (
                  <div>
                    <dd className="text-[32px] font-semibold leading-none">{int(igv)}</dd>
                    <dt className="mt-1 flex items-center gap-1 text-sm text-ink2">
                      Instagram profile visits <InfoTip term="igProfileVisits" />
                    </dt>
                  </div>
                )}
                {eng !== null && (
                  <div>
                    <dd className="text-[32px] font-semibold leading-none">{compact(eng)}</dd>
                    <dt className="mt-1 flex items-center gap-1 text-sm text-ink2">
                      Likes, comments, shares &amp; clicks <InfoTip term="postEngagements" />
                    </dt>
                  </div>
                )}
              </dl>
            </Card>
          )}
          {m.adSets && m.organic.length > 0 && <Note>Instagram and Facebook page numbers are for the whole business, not one location.</Note>}
          {highlight && highlight.comparison.baseline && highlight.comparison.lift !== null && (
            <Card className="!border-gold/60 !bg-gold/15">
              <p className="text-sm text-ink2">Biggest change</p>
              <p className="mt-1 text-xl font-semibold leading-snug sm:text-2xl">
                {ORGANIC_METRICS[highlight.metric].label} on {highlight.platform === 'instagram' ? 'Instagram' : 'Facebook'}: {int(highlight.comparison.current.value)}, up from{' '}
                {int(highlight.comparison.baseline.value)} ({deltaPct(highlight.comparison.lift)}).
              </p>
              {highlight.metric === 'link_taps' && (
                <p className="mt-1 text-sm text-ink2">Each tap is someone heading from Instagram to the class registration site on their own.</p>
              )}
            </Card>
          )}
          {series && (
            <Card>
              <p className="text-sm font-semibold text-ink2">{series.name} followers (shaded: ads running)</p>
              <FollowerChart data={series.data} start={state.settings.campaignStart} colors={colors} />
            </Card>
          )}
          {ig.length > 0 && <Platform title="Instagram" cards={ig} colors={colors} campaignStart={state.settings.campaignStart} />}
          {fb.length > 0 && (
            <Platform
              title="Facebook Page"
              cards={fb}
              colors={colors}
              campaignStart={state.settings.campaignStart}
              extra={fbFollowers ? `${int(fbFollowers.value)} page followers on ${fmtDate(fbFollowers.end)}` : undefined}
            />
          )}
          {extras.length > 0 && (
            <Card>
              <p className="text-sm font-semibold text-ink2">Other ways people reached out ({fmtRange(m.range, false)})</p>
              <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {extras.map(([k, v]) => (
                  <div key={k}>
                    <dd className="text-2xl font-semibold">{int(v)}</dd>
                    <dt className="text-sm text-ink2">{EXTRA_LABELS[k] ?? k}</dt>
                  </div>
                ))}
              </dl>
            </Card>
          )}
        </div>
      )}
    </Section>
  );
}

function Platform({ title, cards, colors, campaignStart, extra }: { title: string; cards: OrganicCard[]; colors: ChartColors; campaignStart: string; extra?: string }) {
  const c0 = cards[0].comparison;
  const len = daysBetween(c0.current.start, c0.current.end);
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-muted">
          {fmtRange(c0.current)} vs the {len} days before{c0.campaignDays > 0 && c0.campaignDays < len ? ` · ads ran ${c0.campaignDays} of these ${len} days` : ''}
          {extra ? ` · ${extra}` : ''}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((o) => (
          <MetricCard key={`${o.platform}-${o.metric}`} o={o} colors={colors} campaignStart={campaignStart} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({ o, colors, campaignStart }: { o: OrganicCard; colors: ChartColors; campaignStart: string }) {
  const meta = ORGANIC_METRICS[o.metric];
  const c = o.comparison;
  const data = c.chain.map((p, i) => ({
    label: fmtRange(p, false),
    short: p.start.slice(5, 7) === p.end.slice(5, 7) ? fmtDate(p.start).split(' ')[0] : `${fmtDate(p.start).split(' ')[0]}–${fmtDate(p.end).split(' ')[0]}`,
    value: p.value,
    current: i === c.chain.length - 1,
    hasAds: p.end >= campaignStart,
  }));
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <p className="flex items-center gap-1 text-[13px] font-semibold text-ink2">
          {meta.label} <InfoTip label={`What is ${meta.label}?`}>{meta.help}</InfoTip>
        </p>
        {c.lift !== null && <Badge tone={c.lift >= 0 ? 'good' : 'bad'}>{deltaPct(c.lift)}</Badge>}
      </div>
      <p className="mt-2 text-[28px] font-semibold leading-none">{compact(c.current.value)}</p>
      <p className="mt-1 text-xs text-muted">{c.baseline ? `vs ${compact(c.baseline.value)} the ${daysBetween(c.baseline.start, c.baseline.end)} days before` : 'No earlier period to compare yet'}</p>
      {data.length > 1 && (
        <div className="mt-3 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barCategoryGap="18%">
              <Tooltip
                cursor={{ fill: colors.accentSoft }}
                content={({ active, payload }) =>
                  active && payload?.length ? (
                    <div className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs shadow-lg">
                      <p className="text-ink2">{payload[0].payload.label}</p>
                      <p className="font-semibold text-ink">{int(payload[0].payload.value)}</p>
                    </div>
                  ) : null
                }
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={24} isAnimationActive={false}>
                {data.map((d) => (
                  <Cell key={d.label} fill={d.current ? colors.accent : colors.mutedMark} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {data.length > 1 && (
        <div className="mt-1 flex text-center text-[10px] text-muted" aria-hidden>
          {data.map((d) => (
            <span key={d.label} className={d.current ? 'flex-1 font-semibold text-ink2' : 'flex-1'}>
              {d.short}
            </span>
          ))}
        </div>
      )}
      {c.current.includesAds && <p className="mt-2 text-xs text-muted">Facebook includes views of the ads in this number.</p>}
    </Card>
  );
}

function FollowerChart({ data, start, colors }: { data: { date: string; value: number }[]; start: string; colors: ChartColors }) {
  return (
    <div className="mt-2 h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke={colors.grid} />
          <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} stroke={colors.axis} fontSize={11} tickLine={false} minTickGap={20} />
          <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} domain={['auto', 'auto']} width={48} />
          <ReferenceArea x1={start} x2={data[data.length - 1].date} fill={colors.accentSoft} />
          <Tooltip formatter={(v: number) => [int(v), 'Followers']} labelFormatter={(d: string) => fmtDate(d, true)} />
          <Line type="monotone" dataKey="value" stroke={colors.accent} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
