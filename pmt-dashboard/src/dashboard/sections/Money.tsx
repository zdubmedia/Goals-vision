import { compact, int, money, pct } from '../../lib/format';
import type { TermKey } from '../../lib/glossary';
import type { BenchmarkBand } from '../../lib/types';
import { Badge, Card, InfoTip, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function MoneySection({ m, state, hidden }: SectionProps & { hidden: boolean }) {
  const t = m.totals?.metrics;
  const per = (n: number | null | undefined) => (t?.spend && n !== null && n !== undefined ? (n / t.spend) * 100 : null);
  const b = state.settings.benchmarks;
  const items: { label: string; value: number | null; term: TermKey; fmt: (n: number | null) => string }[] = [
    { label: 'people reached', value: m.totals?.reachQuality === 'exact' || m.totals?.reachQuality === 'atLeast' ? per(t?.reach) : null, term: 'reach', fmt: compact },
    { label: 'ad views', value: per(t?.impressions), term: 'impressions', fmt: compact },
    { label: 'clicks to the website', value: per(t?.linkClicks), term: 'linkClicks', fmt: int },
    { label: 'website visits', value: per(t?.results), term: 'results', fmt: int },
  ];
  return (
    <Section
      id="money"
      title="What your money bought"
      subtitle="Every $100 of ads bought roughly this much attention, and how the costs compare with typical local-business ads."
      hiddenForClient={hidden}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] lg:items-start">
        <Card>
          <p className="text-sm font-semibold text-ink2">For every $100 spent</p>
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-5">
            {items.map((i) => (
              <div key={i.label}>
                <dd className="text-[32px] font-semibold leading-none tracking-tight">{i.fmt(i.value)}</dd>
                <dt className="mt-1 flex items-center gap-1 text-sm text-ink2">
                  {i.label} <InfoTip term={i.term} />
                </dt>
              </div>
            ))}
          </dl>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-ink2">Compared with typical local ads</p>
          <div className="mt-3 space-y-4">
            <Band label="Cost per website visit" term="costPerResult" value={m.d?.costPerResult ?? null} band={b.costPerVisit} lowerIsBetter fmt={(n) => money(n)} />
            <Band label="Cost per click" term="cpc" value={m.d?.cpc ?? null} band={b.cpc} lowerIsBetter fmt={(n) => money(n)} />
            <Band label="Cost per 1,000 views" term="cpm" value={m.d?.cpm ?? null} band={b.cpm} lowerIsBetter fmt={(n) => money(n)} />
            <Band label="Click rate" term="linkCtr" value={m.d?.linkCtr ?? null} band={b.linkCtr} fmt={(n) => pct(n, 2)} />
          </div>
          <p className="mt-4 text-xs text-muted">Typical ranges are rough guides for local service businesses on Facebook and Instagram.</p>
        </Card>
      </div>
    </Section>
  );
}

function Band({
  label,
  term,
  value,
  band,
  lowerIsBetter,
  fmt,
}: {
  label: string;
  term: TermKey;
  value: number | null;
  band: BenchmarkBand;
  lowerIsBetter?: boolean;
  fmt: (n: number) => string;
}) {
  // Three zones on one scale: better than typical | typical | worse.
  const lo = Math.min(band.good, band.typical);
  const hi = Math.max(band.good, band.typical);
  const max = hi * 1.6;
  const pos = value === null ? null : Math.min(1, Math.max(0, value / max));
  const verdict =
    value === null
      ? null
      : lowerIsBetter
        ? value <= band.good
          ? 'good'
          : value <= band.typical
            ? 'typical'
            : 'high'
        : value >= band.good
          ? 'good'
          : value >= band.typical
            ? 'typical'
            : 'high';
  const zones = lowerIsBetter
    ? [
        { w: lo / max, c: 'bg-good/25' },
        { w: (hi - lo) / max, c: 'bg-surface2' },
        { w: 1 - hi / max, c: 'bg-bad/15' },
      ]
    : [
        { w: lo / max, c: 'bg-bad/15' },
        { w: (hi - lo) / max, c: 'bg-surface2' },
        { w: 1 - hi / max, c: 'bg-good/25' },
      ];
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="flex items-center gap-1 text-sm">
          {label} <InfoTip term={term} />
        </span>
        <span className="flex items-center gap-2">
          <span className="tabular text-sm font-semibold">{value === null ? '—' : fmt(value)}</span>
          {verdict === 'good' && <Badge tone="good">Better than typical</Badge>}
          {verdict === 'typical' && <Badge tone="neutral">Typical</Badge>}
          {verdict === 'high' && <Badge tone="warn">{lowerIsBetter ? 'Higher than typical' : 'Lower than typical'}</Badge>}
        </span>
      </div>
      <div className="relative mt-1.5 h-2.5" aria-hidden>
        <div className="flex h-full overflow-hidden rounded-full">
          {zones.map((z, i) => (
            <div key={i} className={z.c} style={{ width: `${z.w * 100}%` }} />
          ))}
        </div>
        {pos !== null && (
          <div className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-accent shadow" style={{ left: `${pos * 100}%` }} />
        )}
      </div>
      <p className="mt-1 text-[11px] text-muted">
        Typical: {fmt(lo)} – {fmt(hi)}
      </p>
    </div>
  );
}
