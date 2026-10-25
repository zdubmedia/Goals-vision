import type { ReactNode } from 'react';
import { change, compact, int, money, pct } from '../../lib/format';
import { fmtRange } from '../../lib/dates';
import type { TermKey } from '../../lib/glossary';
import { Badge, Card, cx, Delta, InfoTip, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function KpiSection({ m, hidden }: SectionProps & { hidden: boolean }) {
  const t = m.totals?.metrics;
  const p = m.prevTotals?.metrics;
  const vs = m.prevRange ? fmtRange(m.prevRange, false) : '';
  const reachNote =
    m.totals?.reachQuality === 'atLeast'
      ? 'At least this many. People who saw ads for more than one class are counted once.'
      : m.totals?.reachQuality === 'otherRange' && m.totals.reachRange
        ? `For ${fmtRange(m.totals.reachRange, false)}`
        : m.totals && m.totals.reachQuality === 'none'
          ? 'Needs a Meta report for exactly these dates'
          : undefined;
  const estimated = m.tracked === null;

  return (
    <Section id="results" title="Your results" subtitle={`What the Facebook and Instagram ads delivered, ${fmtRange(m.range)}.`} hiddenForClient={hidden}>
      {!m.totals ? (
        <Note tone="warn">No ad data covers these dates yet.</Note>
      ) : (
        <>
          <Card className="mb-4 overflow-hidden border-0 bg-gradient-to-br from-navydeep to-navy !p-0 text-white">
            <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-[auto,minmax(0,1fr)] sm:items-center sm:p-7">
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white/80">
                  Website visits <InfoTip term="results" />
                </p>
                <p className="mt-1 text-6xl font-semibold leading-none tracking-tight text-white sm:text-7xl">{int(t?.results)}</p>
                {p && (
                  <p className="mt-2 text-sm text-white/80">
                    <DeltaOnDark value={change(t?.results, p.results)} /> vs {vs}
                  </p>
                )}
              </div>
              <p className="max-w-xl text-lg leading-snug text-white/90 sm:text-xl">
                For <strong className="text-white">{money(t?.spend)}</strong> in ads, the class registration pages got{' '}
                <strong className="text-white">{int(t?.results)}</strong> visits. That's <strong className="text-gold">{money(m.d?.costPerResult)}</strong> per visit
                {m.bookings.soldInPeriod > 0 && (
                  <>
                    , and <strong className="text-white">{int(m.bookings.soldInPeriod)} seats</strong> sold over the same stretch
                  </>
                )}
                .
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <Tile term="spend" label="Total spend" value={money(t?.spend)} delta={<Delta value={change(t?.spend, p?.spend)} upIsGood={false} vs={vs} />} />
            <Tile term="reach" label="People reached" value={t?.reach !== null && t?.reach !== undefined ? compact(t.reach) : '—'} note={reachNote} prefix={m.totals.reachQuality === 'atLeast' ? '≥ ' : ''} />
            <Tile term="impressions" label="Ad views" value={compact(t?.impressions)} note={t?.impressions === null ? 'Needs a Meta report with impressions for these dates' : undefined} delta={<Delta value={change(t?.impressions, p?.impressions)} vs={vs} />} />
            <Tile
              term="costPerResult"
              label="Cost per website visit"
              value={money(m.d?.costPerResult)}
              delta={<Delta value={change(m.d?.costPerResult, m.prevD?.costPerResult)} upIsGood={false} vs={vs} />}
            />
            <Tile term="linkClicks" label="Clicks to website" value={int(t?.linkClicks)} delta={<Delta value={change(t?.linkClicks, p?.linkClicks)} vs={vs} />} />
            <Tile term="linkCtr" label="Click rate" value={pct(m.d?.linkCtr, 2)} note={m.d?.linkCtr === null ? 'Needs impressions for these dates' : undefined} delta={<Delta value={change(m.d?.linkCtr, m.prevD?.linkCtr)} vs={vs} />} />
            <Tile
              term="bookings"
              label={estimated ? 'Estimated bookings' : 'Bookings (tracked)'}
              value={int(estimated ? m.bookings.soldInPeriod : m.tracked!.count)}
              estimate={estimated}
              note={estimated ? `Seats sold ${fmtRange(m.bookingRange, false)}, all sources` : undefined}
              delta={estimated && m.prevBookings ? <Delta value={change(m.bookings.soldInPeriod, m.prevBookings.soldInPeriod)} vs={vs} /> : undefined}
            />
            <Tile term="revenue" label="Estimated class revenue" value={money(estimated ? m.bookings.revenue : m.revenueForRoi, 0)} estimate />
            <Tile
              term="roas"
              label="Return on ad spend"
              value={m.roas !== null ? `${m.roas >= 10 ? Math.round(m.roas) : m.roas.toFixed(1)}×` : '—'}
              estimate
              note={m.breakEvenStudents !== null ? `Ads pay for themselves at ${m.breakEvenStudents} student${m.breakEvenStudents === 1 ? '' : 's'}` : undefined}
            />
          </div>
          {estimated && (
            <p className="mt-3 text-xs text-muted">
              Bookings, revenue and return are estimates from the registration pages. They count every seat sold, not only seats from people who saw the ads.
            </p>
          )}
        </>
      )}
    </Section>
  );
}

function DeltaOnDark({ value }: { value: number | null }) {
  if (value === null) return null;
  const v = Math.round(value * 100);
  return <span className="font-semibold text-white">{`${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v)}%`}</span>;
}

function Tile({
  label,
  term,
  value,
  delta,
  note,
  estimate,
  prefix,
}: {
  label: string;
  term: TermKey;
  value: string;
  delta?: ReactNode;
  note?: string;
  estimate?: boolean;
  prefix?: string;
}) {
  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <p className="flex items-center gap-1 text-[13px] font-semibold text-ink2">
          {label} <InfoTip term={term} />
        </p>
        {estimate && <Badge tone="gold">Estimate</Badge>}
      </div>
      <p className={cx('mt-2 text-[28px] font-semibold leading-none tracking-tight sm:text-[32px]', value === '—' && 'text-muted')}>
        {prefix && value !== '—' && <span className="text-xl text-ink2">{prefix}</span>}
        {value}
      </p>
      <div className="mt-auto space-y-1 pt-2">
        {delta}
        {note && <p className="text-xs leading-snug text-muted">{note}</p>}
      </div>
    </Card>
  );
}
