import { useEffect, useId, useState } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceDot, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fmtRange } from '../../lib/dates';
import { int, money } from '../../lib/format';
import { Badge, Card, cx, InfoTip, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

const QUICK_SHARES = [10, 15, 20, 25, 50];

export function RoiSection({ m, state, colors, hidden }: SectionProps & { hidden: boolean }) {
  const spend = m.totals?.metrics.spend ?? null;
  const startShare = Math.round(state.settings.adCreditShare * 100);
  const [share, setShare] = useState(startShare);
  useEffect(() => setShare(startShare), [startShare]);
  const sliderId = useId();

  const sold = m.bookings.soldInPeriod;
  const marginPct = Math.round(m.profitMargin * 1000) / 10;
  const price = m.avgPrice;
  const perStudent = m.profitPerStudent;
  const title = 'Did the ads pay for themselves?';

  if (!spend) {
    return (
      <Section id="roi" title={title} hiddenForClient={hidden}>
        <Note>No ad spend in these dates.</Note>
      </Section>
    );
  }

  const be = m.breakEvenStudents ?? 0;
  const tracked = m.tracked;
  // Tracked bookings are exact; otherwise a share of every seat sold is credited to the ads.
  const students = tracked ? tracked.count : Math.round((sold * share) / 100);
  const fees = tracked ? tracked.revenue ?? tracked.count * price : students * price;
  const profit = fees * m.profitMargin;
  const net = profit - spend;
  const perDollar = profit / spend;

  const BreakEven = (
    <div className="rounded-lg bg-gold/15 p-4">
      <p className="flex items-center gap-1 text-sm text-ink2">
        Break-even <InfoTip term="breakEven" />
      </p>
      <p className="mt-1 text-lg font-semibold leading-snug">
        Each student is about <span className="text-accentink">{money(perStudent)}</span> of profit for {state.settings.clientShortName} ({marginPct}% of{' '}
        {money(price, 0)}). To pay back {money(spend)} of ads, the ads need to bring in{' '}
        <span className="text-accentink">
          {be} student{be === 1 ? '' : 's'}
        </span>
        {!tracked && m.breakEvenShare !== null && (
          <>
            , which is {Math.round(m.breakEvenShare * 100)}% of the {int(sold)} seats sold
          </>
        )}
        .
      </p>
    </div>
  );

  return (
    <Section
      id="roi"
      title={title}
      subtitle={`${state.settings.clientShortName} keeps about ${marginPct}% of each class fee as profit. This checks whether that profit covers what the ads cost.`}
      hiddenForClient={hidden}
    >
      {!tracked && (
        <Note tone="warn" className="mb-4">
          <strong className="font-semibold">We don’t know yet where these sign-ups came from.</strong> {int(sold)} seats sold {fmtRange(m.bookingRange, false)}, but people
          also book through Google, word of mouth and returning riders. Until the Meta Pixel tracks sign-ups, use the slider to choose how many came from the
          ads. It starts at a careful {startShare}%.
        </Note>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr),minmax(0,1.2fr)]">
        <Card>
          {BreakEven}
          {tracked ? (
            <p className="mt-5 text-sm text-ink2">
              <Badge tone="good" icon="check">
                Tracked
              </Badge>{' '}
              {int(tracked.count)} sign-up{tracked.count === 1 ? '' : 's'} counted by the Meta Pixel in these dates.
            </p>
          ) : sold === 0 ? (
            <Note className="mt-5">No seats were sold in these dates, so there’s nothing to credit to the ads yet.</Note>
          ) : (
            <>
              <label htmlFor={sliderId} className="mt-5 flex items-center justify-between gap-2 text-sm font-semibold">
                <span className="flex items-center gap-1">
                  Sign-ups that came from the ads <InfoTip term="adShare" />
                </span>
                <span className="tabular text-2xl">{share}%</span>
              </label>
              <input
                id={sliderId}
                type="range"
                min={0}
                max={100}
                step={5}
                value={share}
                onChange={(e) => setShare(Number(e.target.value))}
                className="no-print mt-2 w-full accent-[rgb(var(--accent))]"
                aria-valuetext={`${share}% of sign-ups, ${students} students`}
              />
              <div className="no-print mt-2 flex flex-wrap gap-1.5" role="group" aria-label="Quick picks">
                {QUICK_SHARES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    aria-pressed={share === q}
                    onClick={() => setShare(q)}
                    className={cx(
                      'focus-ring rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                      share === q ? 'border-ink bg-ink text-page' : 'border-line text-ink2 hover:text-ink',
                    )}
                  >
                    {q}%
                  </button>
                ))}
              </div>
            </>
          )}

          {(tracked || sold > 0) && (
            <>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                <Out label="Students from the ads" value={int(students)} note={tracked ? undefined : `${share}% of ${int(sold)} seats`} />
                <Out label="Class fees from them" value={money(fees, 0)} />
                <Out label={`${state.settings.clientShortName} profit from them`} value={money(profit, 0)} note={`${marginPct}% of the fees`} />
                <Out label="Ad spend" value={money(spend)} />
              </dl>
              <div className="mt-4 rounded-lg bg-surface2 p-3">
                <p className="text-sm text-ink2">Profit after paying for the ads</p>
                <p className={cx('tabular text-2xl font-semibold', net >= 0 ? 'text-goodink' : 'text-badink')}>
                  {net >= 0 ? '+' : '−'}
                  {money(Math.abs(net), 0)}
                </p>
                <p className="mt-1 text-sm text-ink2">
                  {money(perDollar)} of profit for every $1 of ads.{' '}
                  {net >= 0 ? (
                    <Badge tone="good" icon="check">
                      Ads paid for themselves
                    </Badge>
                  ) : (
                    <Badge tone="warn">
                      {be - students} more student{be - students === 1 ? '' : 's'} from the ads to break even
                    </Badge>
                  )}
                </p>
              </div>
            </>
          )}
        </Card>
        <ProfitChart m={m} colors={colors} spend={spend} share={share} students={students} profit={profit} />
      </div>
    </Section>
  );
}

function ProfitChart({
  m,
  colors,
  spend,
  share,
  students,
  profit,
}: {
  m: SectionProps['m'];
  colors: SectionProps['colors'];
  spend: number;
  share: number;
  students: number;
  profit: number;
}) {
  const sold = m.bookings.soldInPeriod;
  const byShare = !m.tracked && sold > 0;
  const be = m.breakEvenStudents ?? 0;
  // Estimates: x is the share of sign-ups from the ads. Tracked: x is students.
  const maxStudents = Math.max(10, Math.ceil((Math.max(students, be) * 1.5) / 5) * 5);
  const data = byShare
    ? Array.from({ length: 21 }, (_, i) => ({ x: i * 5, profit: ((sold * i * 5) / 100) * m.profitPerStudent }))
    : Array.from({ length: maxStudents + 1 }, (_, n) => ({ x: n, profit: n * m.profitPerStudent }));
  const top = Math.max(spend * 1.25, data[data.length - 1].profit);
  const step = niceStep(top / 4);
  const yTicks = Array.from({ length: Math.ceil(top / step) + 1 }, (_, i) => i * step);
  const beX = byShare ? (m.breakEvenShare !== null ? m.breakEvenShare * 100 : null) : be;
  const fmtX = (x: number) => (byShare ? `${x}%` : String(x));

  return (
    <Card>
      <p className="text-sm font-semibold text-ink2">PMT profit from the ads vs. what the ads cost</p>
      <div className="mt-2 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 16, left: 4, bottom: 8 }}>
            <CartesianGrid vertical={false} stroke={colors.grid} />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, data[data.length - 1].x]}
              ticks={byShare ? [0, 25, 50, 75, 100] : undefined}
              tickFormatter={fmtX}
              stroke={colors.axis}
              fontSize={11}
              tickLine={false}
              label={{ value: byShare ? 'Sign-ups from the ads' : 'Students', position: 'insideBottomRight', offset: -4, fill: colors.axis, fontSize: 11 }}
            />
            <YAxis
              stroke={colors.axis}
              fontSize={11}
              tickLine={false}
              axisLine={false}
              ticks={yTicks}
              domain={[0, yTicks[yTicks.length - 1]]}
              tickFormatter={(v: number) => (v >= 1000 ? `$${(v / 1000).toFixed(v % 1000 ? 1 : 0)}k` : `$${v}`)}
              width={48}
            />
            <Tooltip
              formatter={(v: number) => [money(v, 0), 'PMT profit']}
              labelFormatter={(x: number) => (byShare ? `${x}% from the ads (${Math.round((sold * x) / 100)} students)` : `${int(x)} students`)}
            />
            <ReferenceLine y={spend} stroke={colors.ink2} strokeWidth={1.5} strokeDasharray="5 4" />
            <Line type="linear" dataKey="profit" stroke={colors.accent} strokeWidth={2} dot={false} isAnimationActive={false} />
            {beX !== null && beX <= data[data.length - 1].x && (
              <ReferenceDot
                x={beX}
                y={spend}
                r={4}
                fill={colors.ink2}
                stroke={colors.surface}
                strokeWidth={2}
                label={{ value: `break-even (${byShare ? `${Math.round(beX)}%` : beX})`, position: 'top', fill: colors.ink2, fontSize: 10, offset: 8 }}
              />
            )}
            <ReferenceDot x={byShare ? share : students} y={profit} r={6} fill={colors.accent} stroke={colors.surface} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex flex-wrap gap-4 text-xs text-ink2">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4" style={{ background: colors.accent }} /> PMT profit
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-0 w-4 border-t-[1.5px] border-dashed" style={{ borderColor: colors.ink2 }} /> Ad spend ({money(spend, 0)})
        </span>
      </div>
      <p className="mt-2 text-xs text-muted">
        Where the orange line crosses the dashed line, the ads have paid for themselves. Profit is {Math.round(m.profitMargin * 1000) / 10}% of class fees.
      </p>
    </Card>
  );
}

function Out({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div>
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="tabular text-xl font-semibold">{value}</dd>
      {note && <dd className="text-xs text-muted">{note}</dd>}
    </div>
  );
}

function niceStep(raw: number): number {
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * pow;
}
