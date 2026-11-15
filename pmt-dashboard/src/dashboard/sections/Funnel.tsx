import { int, pct } from '../../lib/format';
import type { TermKey } from '../../lib/glossary';
import { Badge, Card, InfoTip, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function FunnelSection({ m, colors, hidden }: SectionProps & { hidden: boolean }) {
  const t = m.totals?.metrics;
  const bookings = m.tracked ? m.tracked.count : m.bookings.soldInPeriod;
  const stages: { label: string; value: number | null; term: TermKey; estimate?: boolean }[] = [
    { label: 'Ad views', value: t?.impressions ?? null, term: 'impressions' },
    { label: 'All clicks on the ads', value: t?.clicksAll ?? null, term: 'clicksAll' },
    { label: 'Clicks to the website', value: t?.linkClicks ?? null, term: 'linkClicks' },
    { label: 'Website visits', value: t?.results ?? null, term: 'results' },
    { label: m.tracked ? 'Bookings (tracked)' : 'Estimated bookings', value: bookings, term: 'bookings', estimate: !m.tracked },
  ];
  const shown = stages.filter((s) => s.value !== null);
  const max = Math.max(...shown.map((s) => s.value ?? 0), 1);

  return (
    <Section
      id="funnel"
      title="From ad view to booking"
      subtitle="How many people moved from one step to the next. Bar lengths are to scale."
      hiddenForClient={hidden}
    >
      {shown.length < 2 ? (
        <Note>Not enough data for these dates.</Note>
      ) : (
        <Card>
          <ol className="space-y-3">
            {shown.map((s, i) => {
              const prev = i > 0 ? shown[i - 1].value : null;
              const carried = prev ? (s.value ?? 0) / prev : null;
              const last = i === shown.length - 1;
              return (
                <li key={s.label}>
                  {carried !== null && (
                    <p className="mb-1 pl-1 text-xs text-muted">
                      ↓ {pct(carried, carried < 0.01 ? 2 : 1)} carried on{carried > 0 && carried < 0.5 ? ` (about 1 in ${int(1 / carried)})` : ''}
                    </p>
                  )}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      {s.label} <InfoTip term={s.term} />
                      {s.estimate && <Badge tone="gold">Estimate</Badge>}
                    </span>
                    <span className="tabular text-lg font-semibold">{int(s.value)}</span>
                  </div>
                  <div className="mt-1 h-6 overflow-hidden rounded-md bg-surface2">
                    <div
                      className="h-full rounded-r-md"
                      style={{
                        width: `max(4px, ${((s.value ?? 0) / max) * 100}%)`,
                        background: last || s.term === 'results' ? colors.accent : colors.mutedMark,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
          {!m.tracked && (
            <p className="mt-4 text-xs text-muted">
              Bookings count every seat sold during the period, from any source. Real conversion tracking (see the end of the report) would show exactly which came from
              the ads.
            </p>
          )}
        </Card>
      )}
    </Section>
  );
}
