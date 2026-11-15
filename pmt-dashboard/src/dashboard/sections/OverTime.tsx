import { useState, useSyncExternalStore } from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { derive } from '../../lib/ads';
import { fmtDate } from '../../lib/dates';
import { int, money } from '../../lib/format';
import { Card, Note, Section, Seg } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

type MetricKey = 'results' | 'linkClicks' | 'spend' | 'reach';

const METRICS: Record<MetricKey, { label: string; fmt: (n: number) => string }> = {
  results: { label: 'Website visits', fmt: int },
  linkClicks: { label: 'Clicks', fmt: int },
  spend: { label: 'Spend', fmt: (n) => money(n) },
  reach: { label: 'Reach', fmt: int },
};

export function OverTimeSection({ m, colors, hidden }: SectionProps & { hidden: boolean }) {
  const [metric, setMetric] = useState<MetricKey>('results');
  const daily = m.daily;
  const hasReach = !!daily?.some((d) => d.metrics.reach !== null);
  const rows =
    daily?.map((d) => ({
      date: d.date,
      results: d.metrics.results,
      linkClicks: d.metrics.linkClicks,
      spend: d.metrics.spend,
      reach: d.metrics.reach,
      cpv: derive(d.metrics).costPerResult,
    })) ?? [];
  const best = rows.reduce<(typeof rows)[number] | null>((b, r) => ((r[metric] ?? -1) > (b?.[metric] ?? -1) ? r : b), null);
  const annotations = m.annotations.filter((a) => rows.some((r) => r.date === a.date));
  const axis = { stroke: colors.axis, fontSize: 11, tickLine: false };
  const wide = useWide();

  const tooltip = (
    <Tooltip
      cursor={{ fill: colors.accentSoft }}
      content={({ active, payload }) => {
        if (!active || !payload?.length) return null;
        const r = payload[0].payload as (typeof rows)[number];
        const notes = m.annotations.filter((a) => a.date === r.date);
        return (
          <div className="rounded-lg border border-line bg-surface px-3 py-2 text-xs shadow-lg">
            <p className="mb-1 font-semibold text-ink">{fmtDate(r.date, true)}</p>
            <Row k="Website visits" v={int(r.results)} />
            <Row k="Clicks to website" v={int(r.linkClicks)} />
            <Row k="Spend" v={money(r.spend)} />
            <Row k="Cost per visit" v={money(r.cpv)} />
            {r.reach !== null && <Row k="Reach" v={int(r.reach)} />}
            {notes.map((n) => (
              <p key={n.id} className="mt-1 font-semibold text-accentink">
                {n.label}
              </p>
            ))}
          </div>
        );
      }}
    />
  );

  return (
    <Section
      id="over-time"
      title="Results over time"
      subtitle="Day by day. Hover or tap a day to see every number for it."
      hiddenForClient={hidden}
      actions={
        daily && (
          <Seg
            size="sm"
            label="Metric"
            value={metric}
            onChange={setMetric}
            options={(Object.keys(METRICS) as MetricKey[]).filter((k) => k !== 'reach' || hasReach).map((k) => ({ value: k, label: METRICS[k].label }))}
          />
        )
      }
    >
      {!daily ? (
        <Note>
          Day-by-day numbers need a Meta report broken down by day{m.adSets ? ' at the ad set level (to filter by location)' : ''}. Upload one to see this chart.
        </Note>
      ) : (
        <Card>
          <p className="text-sm font-semibold text-ink2">
            {METRICS[metric].label} per day
            {best && best[metric] !== null && (
              <span className="font-normal text-muted">
                {' '}
                · best day {fmtDate(best.date)}: {METRICS[metric].fmt(best[metric]!)}
              </span>
            )}
          </p>
          <div className="mt-2 h-60 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rows} margin={{ top: 18, right: 8, left: -12, bottom: 0 }} barCategoryGap="22%">
                <CartesianGrid vertical={false} stroke={colors.grid} />
                <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} {...axis} axisLine={{ stroke: colors.axis }} minTickGap={16} />
                <YAxis {...axis} axisLine={false} tickFormatter={(v) => (metric === 'spend' ? `$${v}` : int(v))} width={52} />
                {tooltip}
                {annotations.map((a) => (
                  <ReferenceLine
                    key={a.id}
                    x={a.date}
                    stroke={colors.ink2}
                    strokeDasharray="0"
                    strokeOpacity={0.35}
                    label={wide ? { value: a.label, position: 'insideTopLeft', fill: colors.ink2, fontSize: 10, offset: 4 } : undefined}
                  />
                ))}
                <Bar dataKey={metric} fill={colors.accent} radius={[4, 4, 0, 0]} maxBarSize={24} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm font-semibold text-ink2">Cost per website visit</p>
          <div className="mt-2 h-36 sm:h-40">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={rows} margin={{ top: 8, right: 8, left: -12, bottom: 0 }} barCategoryGap="22%">
                <CartesianGrid vertical={false} stroke={colors.grid} />
                <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} {...axis} axisLine={{ stroke: colors.axis }} minTickGap={16} />
                <YAxis {...axis} axisLine={false} tickFormatter={(v) => `$${Number(v).toFixed(2)}`} width={52} domain={[0, 'auto']} />
                {tooltip}
                <Line
                  type="linear"
                  dataKey="cpv"
                  stroke={colors.ink2}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 5, fill: colors.ink2, stroke: colors.surface, strokeWidth: 2 }}
                  isAnimationActive={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs text-muted">Lower is better. The last day may be partial if the report was pulled mid-day.</p>
        </Card>
      )}
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <p className="flex justify-between gap-4 text-ink2">
      <span>{k}</span>
      <span className="tabular font-semibold text-ink">{v}</span>
    </p>
  );
}

const WIDE = '(min-width: 640px)';

/** Chart labels for notes only fit on wider screens; on phones the tooltip shows them. */
function useWide(): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(WIDE);
      mq.addEventListener('change', cb);
      return () => mq.removeEventListener('change', cb);
    },
    () => window.matchMedia(WIDE).matches,
  );
}
