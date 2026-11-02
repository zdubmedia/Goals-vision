import { useMemo, useState, type ReactNode } from 'react';
import { fileUrl, type FileAccess } from '../api';
import { healthAlerts } from '../lib/alerts';
import { fmtRange, type DateRange } from '../lib/dates';
import { fmtDateTime } from '../lib/format';
import { GLOSSARY } from '../lib/glossary';
import { buildModel, DEFAULT_FILTERS, type Filters, type Model } from '../lib/model';
import type { AppState, SectionKey } from '../lib/types';
import { Icon } from '../ui/Icon';
import { useChartColors, useThemePref, type ChartColors } from '../ui/theme';
import { Badge, Card, cx, Drawer, inputClass, Seg } from '../ui/ui';
import { AudienceSection } from './sections/Audience';
import { BookingsSection } from './sections/Bookings';
import { CreativesSection } from './sections/Creatives';
import { FunnelSection } from './sections/Funnel';
import { InsightsSection } from './sections/Insights';
import { KpiSection } from './sections/Kpis';
import { LocationsSection } from './sections/Locations';
import { MoneySection } from './sections/Money';
import { OrganicSection } from './sections/Organic';
import { OverTimeSection } from './sections/OverTime';
import { ResourcesSection } from './sections/Resources';
import { RoiSection } from './sections/Roi';
import { TrackingSection } from './sections/Tracking';

export interface SectionProps {
  m: Model;
  state: AppState;
  colors: ChartColors;
  access: FileAccess;
  mode: 'client' | 'admin';
}

const NAV: { key: SectionKey; id: string; label: string }[] = [
  { key: 'kpis', id: 'results', label: 'Results' },
  { key: 'moneyBought', id: 'money', label: 'Per $100' },
  { key: 'overTime', id: 'over-time', label: 'Over time' },
  { key: 'locations', id: 'locations', label: 'Locations' },
  { key: 'creatives', id: 'ads', label: 'Ads' },
  { key: 'funnel', id: 'funnel', label: 'Funnel' },
  { key: 'audience', id: 'audience', label: 'Audience' },
  { key: 'organic', id: 'social', label: 'Social' },
  { key: 'bookings', id: 'bookings', label: 'Bookings' },
  { key: 'roi', id: 'roi', label: 'ROI' },
  { key: 'insights', id: 'insights', label: 'Next steps' },
  { key: 'tracking', id: 'tracking', label: 'Tracking' },
  { key: 'resources', id: 'files', label: 'Files' },
];

export function Dashboard({
  state,
  mode,
  access,
  banner,
  adminBar,
  initialFilters,
}: {
  state: AppState;
  mode: 'client' | 'admin';
  access: FileAccess;
  banner?: ReactNode;
  adminBar?: ReactNode;
  initialFilters?: Filters;
}) {
  const [filters, setFilters] = useState<Filters>(initialFilters ?? DEFAULT_FILTERS);
  const [glossary, setGlossary] = useState(false);
  const [pref, setPref] = useThemePref();
  const colors = useChartColors();
  const m = useMemo(() => buildModel(state, filters), [state, filters]);
  const s = state.settings;
  const visible = (k: SectionKey) => mode === 'admin' || (s.sections[k] && (k !== 'resources' || state.resources.length > 0));
  const hidden = (k: SectionKey) => mode === 'admin' && !s.sections[k];
  const props: SectionProps = { m, state, colors, access, mode };
  const alerts = useMemo(() => (mode === 'admin' ? healthAlerts(m.data, s, m.range) : []), [mode, m, s]);
  const logo = fileUrl(s.pmtLogoKey, access) ?? '/brand/pmt-logo.webp';
  const agencyLogo = fileUrl(s.agencyLogoKey, access) ?? '/brand/zdub-logo.webp';

  const sections: [SectionKey, ReactNode][] = [
    ['kpis', <KpiSection key="k" {...props} hidden={hidden('kpis')} />],
    ['moneyBought', <MoneySection key="m" {...props} hidden={hidden('moneyBought')} />],
    ['overTime', <OverTimeSection key="o" {...props} hidden={hidden('overTime')} />],
    ['locations', <LocationsSection key="l" {...props} hidden={hidden('locations')} />],
    ['creatives', <CreativesSection key="c" {...props} hidden={hidden('creatives')} />],
    ['funnel', <FunnelSection key="f" {...props} hidden={hidden('funnel')} />],
    ['audience', <AudienceSection key="a" {...props} hidden={hidden('audience')} />],
    ['organic', <OrganicSection key="og" {...props} hidden={hidden('organic')} />],
    ['bookings', <BookingsSection key="b" {...props} hidden={hidden('bookings')} />],
    ['roi', <RoiSection key="r" {...props} hidden={hidden('roi')} />],
    ['insights', <InsightsSection key="i" {...props} hidden={hidden('insights')} />],
    ['tracking', <TrackingSection key="t" {...props} hidden={hidden('tracking')} />],
    ['resources', <ResourcesSection key="res" {...props} hidden={hidden('resources')} />],
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-7">
          <div className="flex items-start justify-between gap-4">
            <img src={logo} alt={s.clientName} className="h-14 w-auto sm:h-20" />
            <div className="no-print flex items-center gap-1">
              <button
                type="button"
                onClick={() => setGlossary(true)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-semibold text-white/90 hover:bg-white/10"
              >
                <Icon name="book" /> <span className="hidden sm:inline">What do these mean?</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="focus-ring inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-semibold text-white/90 hover:bg-white/10"
              >
                <Icon name="printer" /> <span className="hidden sm:inline">PDF</span>
              </button>
              <button
                type="button"
                aria-label={pref === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => setPref(document.documentElement.dataset.dark === 'true' ? 'light' : 'dark')}
                className="focus-ring rounded-md p-2 text-white/90 hover:bg-white/10"
              >
                <Icon name={pref === 'dark' ? 'sun' : 'moon'} />
              </button>
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Facebook &amp; Instagram ad results</p>
          <h1 className="mt-1 font-display text-4xl leading-none tracking-wide sm:text-5xl">{s.campaignName}</h1>
          <p className="mt-2 text-sm text-white/80">
            {fmtRange(m.range)} · Data last updated {fmtDateTime(state.dataUpdatedAt)}
          </p>
          {banner}
        </div>
      </header>

      {/* Filters */}
      <div className="no-print sticky top-0 z-30 border-b border-line bg-page/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <FilterBar filters={filters} setFilters={setFilters} m={m} locations={s.locations.map((l) => l.name)} colors={colors} />
        </div>
        <nav aria-label="Sections" className="mx-auto max-w-6xl overflow-x-auto px-4 pb-2 sm:px-6">
          <ul className="flex gap-1 text-[13px]">
            {NAV.filter((n) => visible(n.key)).map((n) => (
              <li key={n.key}>
                <a href={`#${n.id}`} className="focus-ring block whitespace-nowrap rounded-full px-2.5 py-1 font-semibold text-ink2 hover:bg-surface2 hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="print-only mx-auto max-w-6xl px-6 pt-4 text-sm text-ink2">
        Showing {fmtRange(m.range)}
        {filters.locations ? ` · ${filters.locations.join(', ')}` : ' · All locations'}
      </p>

      <main className="mx-auto max-w-6xl space-y-12 px-4 py-8 sm:px-6 sm:py-10">
        {adminBar}
        {mode === 'admin' && alerts.length > 0 && (
          <Card className="no-print !border-warn/70">
            <div className="mb-2 flex items-center gap-2">
              <Icon name="alert" className="h-4 w-4 text-ink" />
              <h2 className="text-sm font-semibold">Health alerts</h2>
              <Badge tone="neutral" icon="eyeOff">
                Only you see these
              </Badge>
            </div>
            <ul className="space-y-2">
              {alerts.map((a) => (
                <li key={a.id} className="flex items-start gap-2 text-sm">
                  <Badge tone={a.severity === 'critical' ? 'bad' : a.severity === 'warning' ? 'warn' : 'neutral'}>
                    {a.severity === 'critical' ? 'Act now' : a.severity === 'warning' ? 'Check' : 'Watch'}
                  </Badge>
                  <span>
                    <span className="font-semibold">{a.title}.</span> <span className="text-ink2">{a.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        )}
        {sections.filter(([k]) => visible(k)).map(([, node]) => node)}
      </main>

      <footer className="bg-[#0b1420] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <img src={agencyLogo} alt={s.agencyName} className="h-10 w-auto" />
            <p className="text-sm text-white/80">
              Report prepared by <span className="font-semibold text-white">{s.agencyName}</span> for {s.clientName}
            </p>
          </div>
          <p className="text-xs text-white/50">Ad numbers from Meta Ads Manager · bookings estimated from registration pages</p>
        </div>
      </footer>

      <Drawer open={glossary} onClose={() => setGlossary(false)} title="What the numbers mean">
        <dl className="space-y-4">
          {Object.values(GLOSSARY).map((t) => (
            <div key={t.label}>
              <dt className="font-semibold">{t.label}</dt>
              <dd className="mt-0.5 text-sm text-ink2">{t.plain}</dd>
              {'technical' in t && t.technical && <dd className="mt-0.5 text-xs text-muted">In Meta: {t.technical}</dd>}
            </div>
          ))}
        </dl>
      </Drawer>
    </div>
  );
}

function FilterBar({
  filters,
  setFilters,
  m,
  locations,
  colors,
}: {
  filters: Filters;
  setFilters: (f: Filters) => void;
  m: Model;
  locations: string[];
  colors: ChartColors;
}) {
  const [custom, setCustom] = useState<DateRange>(filters.custom ?? m.range);
  const bounds = m.dataRange;
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Seg
          label="Date range"
          value={filters.preset}
          onChange={(preset) => setFilters({ ...filters, preset, custom: preset === 'custom' ? custom : null })}
          options={[
            { value: 'launch', label: 'Since launch' },
            { value: '7d', label: 'Last 7 days' },
            { value: '30d', label: 'Last 30 days' },
            { value: 'custom', label: 'Custom' },
          ]}
        />
        {filters.preset === 'custom' && (
          <div className="flex items-center gap-1.5 text-sm">
            <input
              type="date"
              aria-label="Start date"
              className={cx(inputClass, 'w-auto py-1')}
              value={custom.start}
              min={bounds?.start}
              max={custom.end}
              onChange={(e) => {
                const c = { ...custom, start: e.target.value };
                setCustom(c);
                if (e.target.value) setFilters({ ...filters, custom: c });
              }}
            />
            <span className="text-muted">to</span>
            <input
              type="date"
              aria-label="End date"
              className={cx(inputClass, 'w-auto py-1')}
              value={custom.end}
              min={custom.start}
              max={bounds?.end}
              onChange={(e) => {
                const c = { ...custom, end: e.target.value };
                setCustom(c);
                if (e.target.value) setFilters({ ...filters, custom: c });
              }}
            />
          </div>
        )}
        <span className="text-xs text-muted">{fmtRange(m.range)}</span>
      </div>
      <div role="group" aria-label="Locations" className="flex flex-wrap items-center gap-1.5">
        <LocChip active={!filters.locations} onClick={() => setFilters({ ...filters, locations: null })}>
          All locations
        </LocChip>
        {locations.map((l, i) => {
          const on = !!filters.locations?.includes(l);
          return (
            <LocChip
              key={l}
              active={on}
              color={colors.loc[i % colors.loc.length]}
              onClick={() => {
                const cur = filters.locations ?? [];
                const next = on ? cur.filter((x) => x !== l) : [...cur, l];
                setFilters({ ...filters, locations: next.length && next.length < locations.length ? next : null });
              }}
            >
              {l}
            </LocChip>
          );
        })}
      </div>
    </>
  );
}

function LocChip({ active, onClick, color, children }: { active: boolean; onClick: () => void; color?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cx(
        'focus-ring inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-semibold transition',
        active ? 'border-ink bg-ink text-page' : 'border-line bg-surface text-ink2 hover:text-ink',
      )}
    >
      {color && <span aria-hidden className="h-2.5 w-2.5 rounded-full ring-2 ring-surface" style={{ background: color }} />}
      {children}
    </button>
  );
}

