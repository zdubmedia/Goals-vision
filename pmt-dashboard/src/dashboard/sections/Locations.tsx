import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { derive, type EntityRow } from '../../lib/ads';
import { fmtRange } from '../../lib/dates';
import { int, money, num, pct } from '../../lib/format';
import { adSetLocation } from '../../lib/model';
import { Badge, Card, Note, Section, SortTable, Swatch, type Column } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function bestPerformer(rows: EntityRow[]): string | null {
  const eligible = rows.filter((r) => (r.metrics.results ?? 0) >= 20);
  if (eligible.length < 2) return null;
  return eligible.reduce((b, r) => ((derive(r.metrics).costPerResult ?? Infinity) < (derive(b.metrics).costPerResult ?? Infinity) ? r : b)).key;
}

export function StatusBadge({ status }: { status?: string }) {
  if (!status) return <span className="text-muted">—</span>;
  const s = status.toLowerCase();
  if (/^active|delivering/.test(s)) return <Badge tone="good">Running</Badge>;
  if (/learning/.test(s)) return <Badge tone="neutral">Learning</Badge>;
  if (/off|inactive|paused|not delivering|completed/.test(s)) return <Badge tone="neutral">Off</Badge>;
  return <Badge tone="neutral">{status}</Badge>;
}

export function LocationsSection({ m, state, colors, hidden }: SectionProps & { hidden: boolean }) {
  const rows = m.adSetRows;
  const totalSpend = rows.reduce((s, r) => s + (r.metrics.spend ?? 0), 0);
  const totalResults = rows.reduce((s, r) => s + (r.metrics.results ?? 0), 0);
  const best = bestPerformer(rows);
  const color = (adSet: string) => {
    const loc = adSetLocation(adSet, state);
    const i = state.settings.locations.findIndex((l) => l.name === loc);
    return i >= 0 ? colors.loc[i % colors.loc.length] : colors.mutedMark;
  };
  const approx = rows.find((r) => !r.exact);

  const columns: Column<EntityRow>[] = [
    {
      key: 'name',
      label: 'Ad set (class)',
      render: (r) => (
        <span className="flex min-w-[180px] max-w-[240px] items-center gap-2">
          <Swatch color={color(r.key)} />
          <span>
            <span className="block font-semibold text-ink">{r.key}</span>
            <span className="text-xs text-muted">{adSetLocation(r.key, state) ?? 'No location'}</span>
          </span>
          {r.key === best && (
            <Badge tone="gold" icon="star">
              Best
            </Badge>
          )}
        </span>
      ),
      sort: (r) => r.key,
      csv: (r) => r.key,
    },
    { key: 'spend', label: 'Spend', term: 'spend', align: 'right', render: (r) => money(r.metrics.spend), sort: (r) => r.metrics.spend, csv: (r) => r.metrics.spend },
    { key: 'reach', label: 'Reach', term: 'reach', align: 'right', render: (r) => int(r.metrics.reach), sort: (r) => r.metrics.reach, csv: (r) => r.metrics.reach },
    { key: 'imp', label: 'Ad views', term: 'impressions', align: 'right', render: (r) => int(r.metrics.impressions), sort: (r) => r.metrics.impressions, csv: (r) => r.metrics.impressions },
    { key: 'clicks', label: 'Clicks', term: 'linkClicks', align: 'right', render: (r) => int(r.metrics.linkClicks), sort: (r) => r.metrics.linkClicks, csv: (r) => r.metrics.linkClicks },
    {
      key: 'visits',
      label: 'Website visits',
      term: 'results',
      align: 'right',
      render: (r) => <span className="font-semibold">{int(r.metrics.results)}</span>,
      sort: (r) => r.metrics.results,
      csv: (r) => r.metrics.results,
    },
    {
      key: 'cpv',
      label: 'Cost / visit',
      term: 'costPerResult',
      align: 'right',
      render: (r) => money(derive(r.metrics).costPerResult),
      sort: (r) => derive(r.metrics).costPerResult,
      csv: (r) => derive(r.metrics).costPerResult?.toFixed(2) ?? '',
    },
    {
      key: 'ctr',
      label: 'Click rate',
      term: 'linkCtr',
      align: 'right',
      render: (r) => pct(derive(r.metrics).linkCtr, 2),
      sort: (r) => derive(r.metrics).linkCtr,
      csv: (r) => derive(r.metrics).linkCtr?.toFixed(4) ?? '',
    },
    {
      key: 'freq',
      label: 'Seen / person',
      term: 'frequency',
      align: 'right',
      render: (r) => num(derive(r.metrics).frequency),
      sort: (r) => derive(r.metrics).frequency,
      csv: (r) => derive(r.metrics).frequency?.toFixed(2) ?? '',
    },
    {
      key: 'share',
      label: 'Share of spend → visits',
      render: (r) => <ShareBars spend={(r.metrics.spend ?? 0) / (totalSpend || 1)} results={(r.metrics.results ?? 0) / (totalResults || 1)} accent={colors.accent} />,
      sort: (r) => (r.metrics.results ?? 0) / (totalResults || 1) - (r.metrics.spend ?? 0) / (totalSpend || 1),
      csv: (r) => `${pct((r.metrics.spend ?? 0) / (totalSpend || 1))} → ${pct((r.metrics.results ?? 0) / (totalResults || 1))}`,
    },
  ];

  if (rows.some((r) => r.deliveryStatus)) {
    columns.splice(1, 0, { key: 'status', label: 'Status', render: (r) => <StatusBadge status={r.deliveryStatus} />, csv: (r) => r.deliveryStatus ?? '' });
  }

  const chart = rows
    .map((r) => ({ name: r.key, location: adSetLocation(r.key, state) ?? '', cpv: derive(r.metrics).costPerResult, visits: r.metrics.results }))
    .filter((r) => r.cpv !== null)
    .sort((a, b) => (a.cpv ?? 0) - (b.cpv ?? 0));

  return (
    <Section
      id="locations"
      title="Results by location and class"
      subtitle="Each ad set promotes one class at one location. Gold highlights the lowest cost per visit."
      hiddenForClient={hidden}
    >
      {!rows.length ? (
        <Note>Upload a Meta report at the ad set level to see this breakdown.</Note>
      ) : (
        <div className="space-y-4">
          <Card>
            <p className="text-sm font-semibold text-ink2">Cost per website visit (lower is better)</p>
            <div className="mt-2" style={{ height: Math.max(140, chart.length * 46) }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chart} layout="vertical" margin={{ top: 0, right: 56, left: 0, bottom: 0 }} barCategoryGap="28%">
                  <CartesianGrid horizontal={false} stroke={colors.grid} />
                  <XAxis type="number" stroke={colors.axis} fontSize={11} tickLine={false} tickFormatter={(v) => `$${Number(v).toFixed(2)}`} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={150}
                    stroke={colors.axis}
                    fontSize={11}
                    tickLine={false}
                    tickFormatter={(v: string) => (v.length > 24 ? `${v.slice(0, 23)}…` : v)}
                  />
                  <Tooltip
                    cursor={{ fill: colors.accentSoft }}
                    content={({ active, payload }) =>
                      active && payload?.length ? (
                        <div className="rounded-lg border border-line bg-surface px-3 py-2 text-xs shadow-lg">
                          <p className="font-semibold text-ink">{payload[0].payload.name}</p>
                          <p className="text-ink2">{payload[0].payload.location}</p>
                          <p className="mt-1 text-ink2">
                            Cost per visit <span className="font-semibold text-ink">{money(payload[0].payload.cpv)}</span>
                          </p>
                          <p className="text-ink2">
                            Website visits <span className="font-semibold text-ink">{int(payload[0].payload.visits)}</span>
                          </p>
                        </div>
                      ) : null
                    }
                  />
                  <Bar dataKey="cpv" radius={[0, 4, 4, 0]} maxBarSize={24} isAnimationActive={false}>
                    {chart.map((c) => (
                      <Cell key={c.name} fill={color(c.name)} />
                    ))}
                    <LabelList dataKey="cpv" position="right" formatter={(v: number) => money(v)} fill={colors.ink} fontSize={12} fontWeight={600} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink2">
              {state.settings.locations.map((l, i) => (
                <span key={l.name} className="inline-flex items-center gap-1.5">
                  <Swatch color={colors.loc[i % colors.loc.length]} /> {l.name}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <SortTable
              caption="Results by ad set"
              rows={rows}
              columns={columns}
              rowKey={(r) => r.key}
              initialSort={{ key: 'visits', dir: 'desc' }}
              highlight={(r) => r.key === best}
              csvName="results-by-ad-set"
            />
            {approx && <p className="mt-2 text-xs text-muted">These numbers cover {fmtRange(approx.range)}, the closest report available for the dates you picked.</p>}
            <p className="mt-2 text-xs text-muted">Reach can't be added across ad sets: some people saw more than one ad.</p>
          </Card>
        </div>
      )}
    </Section>
  );
}

function ShareBars({ spend, results, accent }: { spend: number; results: number; accent: string }) {
  return (
    <div className="w-36 space-y-1" aria-label={`${pct(spend, 0)} of spend, ${pct(results, 0)} of visits`}>
      <div className="flex items-center gap-1.5">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface2">
          <div className="h-full rounded-full bg-[var(--c-muted-mark)]" style={{ width: `${spend * 100}%` }} />
        </div>
        <span className="w-9 text-right text-[11px] text-muted">{pct(spend, 0)}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface2">
          <div className="h-full rounded-full" style={{ width: `${results * 100}%`, background: accent }} />
        </div>
        <span className="w-9 text-right text-[11px] font-semibold text-ink">{pct(results, 0)}</span>
      </div>
    </div>
  );
}
