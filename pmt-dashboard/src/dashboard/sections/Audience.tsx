import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { derive, type BreakdownResult, type BreakdownRow } from '../../lib/ads';
import { fmtRange } from '../../lib/dates';
import { int, money, pct, prettyBreakdown } from '../../lib/format';
import { Card, Note, Section, SortTable, type Column } from '../../ui/ui';
import type { ChartColors } from '../../ui/theme';
import type { SectionProps } from '../Dashboard';

export function AudienceSection({ m, colors, hidden }: SectionProps & { hidden: boolean }) {
  const none = !m.age && !m.gender && !m.placement;
  const platforms = m.placement ? platformTotals(m.placement) : null;
  return (
    <Section id="audience" title="Who saw and clicked" subtitle="Website visits and costs by age, gender and where the ads appeared." hiddenForClient={hidden}>
      {none ? (
        <Note>Upload Meta reports broken down by age, gender or placement to see this.</Note>
      ) : (
        <div className="space-y-4">
          {m.adSets && <Note>These splits are for the whole campaign; Meta's age, gender and placement reports aren't split by location.</Note>}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {m.age && (
              <Card>
                <Header title="By age" b={m.age} m={m} />
                <VisitsChart rows={m.age.rows.filter((r) => !r.isOther)} colors={colors} />
                <BreakdownTable rows={m.age.rows} name="Age" csv="by-age" />
              </Card>
            )}
            <div className="space-y-4">
              {m.gender && (
                <Card>
                  <Header title="By gender" b={m.gender} m={m} />
                  <BreakdownTable rows={m.gender.rows} name="Gender" csv="by-gender" />
                </Card>
              )}
              {platforms && (
                <Card>
                  <p className="text-sm font-semibold text-ink2">Facebook vs. Instagram</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {platforms.map((p) => (
                      <div key={p.name} className="rounded-lg bg-surface2 p-3">
                        <p className="text-sm font-semibold">{p.name}</p>
                        <p className="mt-1 text-2xl font-semibold">{int(p.results)}</p>
                        <p className="text-xs text-muted">
                          visits · {money(p.results ? p.spend / p.results : null)} each · {pct(p.spend / platforms.reduce((s, x) => s + x.spend, 0), 0)} of spend
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
          {m.placement && (
            <Card>
              <Header title="Where the ads appeared" b={m.placement} m={m} />
              <BreakdownTable rows={m.placement.rows} name="Placement" csv="by-placement" />
            </Card>
          )}
        </div>
      )}
    </Section>
  );
}

function Header({ title, b, m }: { title: string; b: BreakdownResult; m: SectionProps['m'] }) {
  return (
    <p className="text-sm font-semibold text-ink2">
      {title}
      {(b.range.start !== m.range.start || b.range.end !== m.range.end) && <span className="font-normal text-muted"> · {fmtRange(b.range, false)}</span>}
    </p>
  );
}

function VisitsChart({ rows, colors }: { rows: BreakdownRow[]; colors: ChartColors }) {
  const data = rows.map((r) => ({ name: prettyBreakdown(r.key), visits: r.metrics.results, cpv: derive(r.metrics).costPerResult }));
  return (
    <div className="mt-2 h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 18, right: 4, left: -18, bottom: 0 }} barCategoryGap="25%">
          <CartesianGrid vertical={false} stroke={colors.grid} />
          <XAxis dataKey="name" stroke={colors.axis} fontSize={11} tickLine={false} />
          <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: colors.accentSoft }}
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="rounded-lg border border-line bg-surface px-3 py-2 text-xs shadow-lg">
                  <p className="font-semibold text-ink">Age {payload[0].payload.name}</p>
                  <p className="text-ink2">
                    Website visits <span className="font-semibold text-ink">{int(payload[0].payload.visits)}</span>
                  </p>
                  <p className="text-ink2">
                    Cost per visit <span className="font-semibold text-ink">{money(payload[0].payload.cpv)}</span>
                  </p>
                </div>
              ) : null
            }
          />
          <Bar dataKey="visits" fill={colors.accent} radius={[4, 4, 0, 0]} maxBarSize={24} isAnimationActive={false}>
            <LabelList dataKey="visits" position="top" fill={colors.ink2} fontSize={11} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function BreakdownTable({ rows, name, csv }: { rows: BreakdownRow[]; name: string; csv: string }) {
  const totalSpend = rows.reduce((s, r) => s + (r.metrics.spend ?? 0), 0);
  const cols: Column<BreakdownRow>[] = [
    { key: 'k', label: name, render: (r) => <span className={r.isOther ? 'text-muted' : 'font-semibold'}>{r.isOther ? 'Other / not listed' : prettyBreakdown(r.key)}</span>, csv: (r) => prettyBreakdown(r.key) },
    { key: 'spend', label: 'Spend', align: 'right', render: (r) => money(r.metrics.spend), sort: (r) => r.metrics.spend, csv: (r) => r.metrics.spend },
    { key: 'share', label: '% of spend', align: 'right', render: (r) => pct((r.metrics.spend ?? 0) / (totalSpend || 1), 0), sort: (r) => r.metrics.spend },
    { key: 'v', label: 'Visits', term: 'results', align: 'right', render: (r) => int(r.metrics.results), sort: (r) => r.metrics.results, csv: (r) => r.metrics.results },
    { key: 'cpv', label: 'Cost / visit', term: 'costPerResult', align: 'right', render: (r) => money(derive(r.metrics).costPerResult), sort: (r) => derive(r.metrics).costPerResult, csv: (r) => derive(r.metrics).costPerResult?.toFixed(2) ?? '' },
  ];
  if (rows.some((r) => derive(r.metrics).ctrAll !== null && !r.isOther)) {
    cols.push({
      key: 'ctr',
      label: 'Click rate',
      term: 'ctrAll',
      align: 'right',
      render: (r) => pct(derive(r.metrics).ctrAll, 2),
      sort: (r) => derive(r.metrics).ctrAll,
      csv: (r) => derive(r.metrics).ctrAll?.toFixed(4) ?? '',
    });
  }
  return (
    <div className="mt-3">
      <SortTable caption={`Results by ${name.toLowerCase()}`} rows={rows} columns={cols} rowKey={(r) => r.key} csvName={csv} minWidth={420} />
    </div>
  );
}

function platformTotals(b: BreakdownResult): { name: string; spend: number; results: number }[] | null {
  const out = new Map<string, { spend: number; results: number }>();
  for (const r of b.rows) {
    if (r.isOther) continue;
    const p = r.key.split(' · ')[0];
    const name = p === 'facebook' ? 'Facebook' : p === 'instagram' ? 'Instagram' : null;
    if (!name) continue;
    const cur = out.get(name) ?? { spend: 0, results: 0 };
    cur.spend += r.metrics.spend ?? 0;
    cur.results += r.metrics.results ?? 0;
    out.set(name, cur);
  }
  return out.size ? [...out].map(([name, v]) => ({ name, ...v })) : null;
}
