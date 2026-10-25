import { useEffect, useId, useState } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceDot, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { int, money } from '../../lib/format';
import { Badge, Card, InfoTip, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function RoiSection({ m, colors, hidden }: SectionProps & { hidden: boolean }) {
  const spend = m.totals?.metrics.spend ?? null;
  const price = Math.round(m.avgPrice);
  const start = Math.round(m.bookingsForRoi);
  const [students, setStudents] = useState(start);
  useEffect(() => setStudents(start), [start]);
  const sliderId = useId();

  if (!spend) {
    return (
      <Section id="roi" title="Return on ad spend" hiddenForClient={hidden}>
        <Note>No ad spend in these dates.</Note>
      </Section>
    );
  }

  const max = Math.max(20, Math.ceil((Math.max(start, m.breakEvenStudents ?? 0) * 1.5) / 5) * 5);
  const revenue = students * price;
  const roas = revenue / spend;
  const be = m.breakEvenStudents ?? Math.ceil(spend / price);
  const data = Array.from({ length: max + 1 }, (_, n) => ({ n, revenue: n * price }));
  const step = niceStep((max * price) / 4);
  const yTicks = Array.from({ length: Math.ceil((max * price) / step) + 1 }, (_, i) => i * step);

  return (
    <Section
      id="roi"
      title="Did the ads pay for themselves?"
      subtitle="Move the slider to see what different numbers of students from the ads would be worth."
      hiddenForClient={hidden}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr),minmax(0,1.2fr)]">
        <Card>
          <div className="rounded-lg bg-gold/15 p-4">
            <p className="text-sm text-ink2">Break-even</p>
            <p className="mt-1 text-xl font-semibold leading-snug">
              At {money(price, 0)} a student, {money(spend)} of ads is paid back by{' '}
              <span className="text-accentink">
                {be} student{be === 1 ? '' : 's'}
              </span>
              .
            </p>
          </div>
          <label htmlFor={sliderId} className="mt-5 flex items-center justify-between text-sm font-semibold">
            <span className="flex items-center gap-1">
              Students who came from the ads <InfoTip term="breakEven" />
            </span>
            <span className="tabular text-2xl">{students}</span>
          </label>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={max}
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="no-print mt-2 w-full accent-[rgb(var(--accent))]"
            aria-valuetext={`${students} students`}
          />
          <p className="mt-1 text-xs text-muted">
            Starts at {start}: {m.tracked ? 'bookings tracked from the ads' : 'the estimated seats sold this period (from all sources)'}.
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-4">
            <Out label="Class revenue" value={money(revenue, 0)} />
            <Out label="Ad spend" value={money(spend)} />
            <Out label="Return on ad spend" value={`${roas >= 10 ? Math.round(roas) : roas.toFixed(1)}×`} term />
            <Out label="Ad cost per student" value={students ? money(spend / students) : '—'} />
          </dl>
          <div className="mt-4">
            {revenue >= spend ? (
              <Badge tone="good" icon="check">
                Ads paid for themselves {roas >= 2 ? `${Math.floor(roas)} times over` : ''}
              </Badge>
            ) : (
              <Badge tone="warn">{be - students} more student{be - students === 1 ? '' : 's'} to break even</Badge>
            )}
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-ink2">Class revenue vs. ad spend</p>
          <div className="mt-2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 12, right: 16, left: 4, bottom: 8 }}>
                <CartesianGrid vertical={false} stroke={colors.grid} />
                <XAxis
                  dataKey="n"
                  type="number"
                  domain={[0, max]}
                  stroke={colors.axis}
                  fontSize={11}
                  tickLine={false}
                  label={{ value: 'Students', position: 'insideBottomRight', offset: -4, fill: colors.axis, fontSize: 11 }}
                />
                <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} ticks={yTicks} domain={[0, yTicks[yTicks.length - 1]]} tickFormatter={(v) => (v ? `$${Math.round(v / 1000)}k` : '$0')} width={44} />
                <Tooltip formatter={(v: number) => [money(v, 0), 'Revenue']} labelFormatter={(n: number) => `${int(n)} students`} />
                <ReferenceLine y={spend} stroke={colors.ink2} strokeWidth={1.5} />
                <Line type="linear" dataKey="revenue" stroke={colors.accent} strokeWidth={2} dot={false} isAnimationActive={false} />
                <ReferenceDot x={students} y={revenue} r={6} fill={colors.accent} stroke={colors.surface} strokeWidth={2} />
                <ReferenceDot x={be} y={be * price} r={4} fill={colors.ink2} stroke={colors.surface} strokeWidth={2} label={{ value: `break-even (${be})`, position: 'right', fill: colors.ink2, fontSize: 10, offset: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 flex flex-wrap gap-4 text-xs text-ink2">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-0.5 w-4" style={{ background: colors.accent }} /> Class revenue
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-0.5 w-4" style={{ background: colors.ink2 }} /> Ad spend ({money(spend, 0)})
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Revenue uses the class price ({money(price, 0)}). It doesn't subtract PMT's costs of running a class, and bookings aren't yet tracked back to the ads one by one.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function Out({ label, value, term }: { label: string; value: string; term?: boolean }) {
  return (
    <div>
      <dt className="flex items-center gap-1 text-xs text-muted">
        {label} {term && <InfoTip term="roas" />}
      </dt>
      <dd className="tabular text-xl font-semibold">{value}</dd>
    </div>
  );
}

function niceStep(raw: number): number {
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * pow;
}
