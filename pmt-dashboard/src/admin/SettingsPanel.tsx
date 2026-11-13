import { useMemo, useState, type ReactNode } from 'react';
import { api, fileUrl } from '../api';
import { effectiveData, locationOf } from '../lib/ads';
import { SECTION_KEYS, type SectionKey, type Settings } from '../lib/types';
import { Button, Card, Field, inputClass } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { compressImage } from './files';

const SECTION_LABELS: Record<SectionKey, string> = {
  kpis: 'Your results (headline numbers)',
  moneyBought: 'What your money bought',
  overTime: 'Results over time',
  locations: 'Results by location and class',
  creatives: 'The ads (gallery)',
  funnel: 'From ad view to booking (funnel)',
  audience: 'Who saw and clicked (age, gender, placement)',
  organic: 'The halo effect (Instagram & Facebook)',
  bookings: 'Bookings tracker',
  roi: 'Did the ads pay for themselves? (profit & ROI)',
  insights: 'Insights & next steps',
  tracking: 'Exact booking tracking (coming next)',
  resources: 'Files for PMT (guides, ad layouts)',
};

const pctIn = (v: number | null) => (v === null ? '' : String(Math.round(v * 100)));
const pctOut = (s: string) => (s.trim() === '' ? null : Math.max(0, Math.min(100, Number(s))) / 100);

export function SettingsPanel() {
  const { state, save, toast } = useAdmin();
  const [s, setS] = useState<Settings>(() => structuredClone(state.settings));
  const dirty = JSON.stringify(s) !== JSON.stringify(state.settings);
  const set = (patch: Partial<Settings>) => setS((x) => ({ ...x, ...patch }));
  const adSets = useMemo(() => [...new Set(effectiveData(state.uploads).rows.map((r) => r.adSet).filter(Boolean))].sort(), [state.uploads]);

  const uploadLogo = async (file: File | undefined, which: 'pmtLogoKey' | 'agencyLogoKey') => {
    if (!file) return;
    try {
      if (file.type === 'image/svg+xml') throw new Error('Please use a PNG or JPG logo (SVG isn’t supported).');
      // PNG/WebP keep their transparent background; photos get shrunk.
      const blob = file.type === 'image/png' || file.type === 'image/webp' ? file : await compressImage(file, 800);
      const { key } = await api.uploadFile(blob, blob.type || 'image/png');
      const next = { ...state.settings, [which]: key };
      if (await save((st) => ({ ...st, settings: next }), 'Logo updated.')) setS((x) => ({ ...x, [which]: key }));
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Upload failed.', 'error');
    }
  };

  return (
    <>
      <PanelTitle title="Settings">Business numbers the dashboard uses. Changes apply to PMT's view once you save.</PanelTitle>
      <div className="sticky top-14 z-30 -mx-2 flex items-center justify-end gap-2 rounded-lg px-2 py-2 backdrop-blur">
        {dirty && <span className="text-sm text-ink2">Unsaved changes</span>}
        <Button onClick={() => setS(structuredClone(state.settings))} disabled={!dirty}>
          Undo
        </Button>
        <Button variant="primary" icon="check" disabled={!dirty} onClick={() => void save((st) => ({ ...st, settings: s }), 'Settings saved.')}>
          Save settings
        </Button>
      </div>

      <Group title="Names & dates">
        <Field label="Client name">
          <input className={inputClass} value={s.clientName} onChange={(e) => set({ clientName: e.target.value })} />
        </Field>
        <Field label="Short name">
          <input className={inputClass} value={s.clientShortName} onChange={(e) => set({ clientShortName: e.target.value })} />
        </Field>
        <Field label="Campaign name (report title)">
          <input className={inputClass} value={s.campaignName} onChange={(e) => set({ campaignName: e.target.value })} />
        </Field>
        <Field label="Your agency name">
          <input className={inputClass} value={s.agencyName} onChange={(e) => set({ agencyName: e.target.value })} />
        </Field>
        <Field label="Campaign start date">
          <input type="date" className={inputClass} value={s.campaignStart} onChange={(e) => set({ campaignStart: e.target.value })} />
        </Field>
        <Field label="'Before' screenshots date" hint="The registration screenshots taken just before launch.">
          <input type="date" className={inputClass} value={s.bookingsBaselineDate} onChange={(e) => set({ bookingsBaselineDate: e.target.value })} />
        </Field>
      </Group>

      <Group title="Classes & prices">
        <Field label="Basic class price ($)">
          <input type="number" min={0} className={inputClass} value={s.prices.Basic} onChange={(e) => set({ prices: { ...s.prices, Basic: Number(e.target.value) } })} />
        </Field>
        <Field label="Intermediate price ($)" hint="Used for both IRC and 1DPC.">
          <input type="number" min={0} className={inputClass} value={s.prices.Intermediate} onChange={(e) => set({ prices: { ...s.prices, Intermediate: Number(e.target.value) } })} />
        </Field>
        <Field label="Seats in a full class">
          <input type="number" min={1} className={inputClass} value={s.seatsPerClass} onChange={(e) => set({ seatsPerClass: Number(e.target.value) })} />
        </Field>
        <Field label="Basic seats when Intermediate shares the range">
          <input type="number" min={1} className={inputClass} value={s.sharedRangeCap} onChange={(e) => set({ sharedRangeCap: Number(e.target.value) })} />
        </Field>
        <Field label="Seats each for IRC and 1DPC">
          <input type="number" min={1} className={inputClass} value={s.intermediateSplitSeats} onChange={(e) => set({ intermediateSplitSeats: Number(e.target.value) })} />
        </Field>
        <Field label="PMT profit margin (%)" hint="PMT's profit on each class fee. 14% of $425 = $59.50 a student.">
          <input type="number" min={0} max={100} step={0.5} className={inputClass} value={Math.round(s.profitMargin * 1000) / 10} onChange={(e) => set({ profitMargin: Math.max(0, Math.min(100, Number(e.target.value))) / 100 })} />
        </Field>
        <Field label="Sign-ups from the ads, starting guess (%)" hint="Where the ROI slider starts. Until the Pixel tracks sign-ups, nobody knows which came from the ads, so keep it conservative.">
          <input type="number" min={0} max={100} step={5} className={inputClass} value={Math.round(s.adCreditShare * 100)} onChange={(e) => set({ adCreditShare: Math.max(0, Math.min(100, Number(e.target.value))) / 100 })} />
        </Field>
      </Group>

      <Card>
        <h2 className="text-base font-semibold">Locations and "normal" bookings</h2>
        <p className="mt-1 text-sm text-ink2">
          "Normal" is how full a class usually got before ads, as a % of its seats. Keywords match ad set names to a location (e.g. "wood" matches "WOOD IRC").
        </p>
        <div className="mt-3 space-y-3">
          {s.locations.map((l, i) => {
            const upd = (patch: Partial<typeof l>) => set({ locations: s.locations.map((x, j) => (j === i ? { ...x, ...patch } : x)) });
            return (
              <div key={i} className="grid grid-cols-2 gap-3 rounded-lg border border-line p-3 sm:grid-cols-6">
                <Field label="Location">
                  <input className={inputClass} value={l.name} onChange={(e) => upd({ name: e.target.value })} />
                </Field>
                <Field label="Keywords" className="col-span-1 sm:col-span-2">
                  <input className={inputClass} value={l.keywords.join(', ')} onChange={(e) => upd({ keywords: e.target.value.split(',').map((k) => k.trim()).filter(Boolean) })} />
                </Field>
                <Field label="Morning normal %">
                  <input type="number" min={0} max={100} className={inputClass} value={pctIn(l.normalFillAM)} onChange={(e) => upd({ normalFillAM: pctOut(e.target.value) })} />
                </Field>
                <Field label="Afternoon normal %">
                  <input type="number" min={0} max={100} className={inputClass} value={pctIn(l.normalFillPM)} onChange={(e) => upd({ normalFillPM: pctOut(e.target.value) })} />
                </Field>
                <Field label="Intermediate normal %">
                  <input type="number" min={0} max={100} className={inputClass} value={pctIn(l.normalFillIntermediate)} placeholder="unknown" onChange={(e) => upd({ normalFillIntermediate: pctOut(e.target.value) })} />
                </Field>
              </div>
            );
          })}
        </div>
        <Button
          className="mt-3"
          icon="plus"
          onClick={() => set({ locations: [...s.locations, { name: 'New location', keywords: [], normalFillAM: 1, normalFillPM: 0.5, normalFillIntermediate: null }] })}
        >
          Add location
        </Button>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">Daily budgets per ad set</h2>
        <p className="mt-1 text-sm text-ink2">Used for the "underspending" alert only you see.</p>
        <div className="mt-3 space-y-2">
          {adSets.map((a) => (
            <div key={a} className="grid grid-cols-[minmax(0,1fr),120px] items-center gap-3 text-sm">
              <span className="truncate">
                {a} <span className="text-muted">· {locationOf(a, s.locations) ?? 'no location match'}</span>
              </span>
              <input
                type="number"
                min={0}
                step="0.01"
                aria-label={`Daily budget for ${a}`}
                className={inputClass}
                placeholder="$ / day"
                value={s.adSetBudgets[a] ?? ''}
                onChange={(e) => set({ adSetBudgets: { ...s.adSetBudgets, [a]: e.target.value === '' ? null : Number(e.target.value) } })}
              />
            </div>
          ))}
        </div>
      </Card>

      <Group title="Typical ranges (for the comparison bars)">
        <Field label="Cost per visit: great below ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.costPerVisit.good} onChange={(e) => set({ benchmarks: { ...s.benchmarks, costPerVisit: { ...s.benchmarks.costPerVisit, good: Number(e.target.value) } } })} />
        </Field>
        <Field label="Cost per visit: typical up to ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.costPerVisit.typical} onChange={(e) => set({ benchmarks: { ...s.benchmarks, costPerVisit: { ...s.benchmarks.costPerVisit, typical: Number(e.target.value) } } })} />
        </Field>
        <Field label="Cost per click: great below ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.cpc.good} onChange={(e) => set({ benchmarks: { ...s.benchmarks, cpc: { ...s.benchmarks.cpc, good: Number(e.target.value) } } })} />
        </Field>
        <Field label="Cost per click: typical up to ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.cpc.typical} onChange={(e) => set({ benchmarks: { ...s.benchmarks, cpc: { ...s.benchmarks.cpc, typical: Number(e.target.value) } } })} />
        </Field>
        <Field label="Cost per 1,000 views: great below ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.cpm.good} onChange={(e) => set({ benchmarks: { ...s.benchmarks, cpm: { ...s.benchmarks.cpm, good: Number(e.target.value) } } })} />
        </Field>
        <Field label="Cost per 1,000 views: typical up to ($)">
          <input type="number" step="0.01" className={inputClass} value={s.benchmarks.cpm.typical} onChange={(e) => set({ benchmarks: { ...s.benchmarks, cpm: { ...s.benchmarks.cpm, typical: Number(e.target.value) } } })} />
        </Field>
        <Field label="Click rate: great above (%)">
          <input type="number" step="0.01" className={inputClass} value={+(s.benchmarks.linkCtr.good * 100).toFixed(2)} onChange={(e) => set({ benchmarks: { ...s.benchmarks, linkCtr: { ...s.benchmarks.linkCtr, good: Number(e.target.value) / 100 } } })} />
        </Field>
        <Field label="Click rate: typical from (%)">
          <input type="number" step="0.01" className={inputClass} value={+(s.benchmarks.linkCtr.typical * 100).toFixed(2)} onChange={(e) => set({ benchmarks: { ...s.benchmarks, linkCtr: { ...s.benchmarks.linkCtr, typical: Number(e.target.value) / 100 } } })} />
        </Field>
      </Group>

      <Group title="Health alerts (only you see these)">
        <Field label="Ad fatigue: times seen per person above">
          <input type="number" step="0.1" className={inputClass} value={s.alerts.frequency} onChange={(e) => set({ alerts: { ...s.alerts, frequency: Number(e.target.value) } })} />
        </Field>
        <Field label="Cost per visit rise vs prior week (%)">
          <input type="number" className={inputClass} value={Math.round(s.alerts.costPerVisitRise * 100)} onChange={(e) => set({ alerts: { ...s.alerts, costPerVisitRise: Number(e.target.value) / 100 } })} />
        </Field>
        <Field label="Underspend: below this % of daily budget">
          <input type="number" className={inputClass} value={Math.round(s.alerts.underspend * 100)} onChange={(e) => set({ alerts: { ...s.alerts, underspend: Number(e.target.value) / 100 } })} />
        </Field>
      </Group>

      <Card>
        <h2 className="text-base font-semibold">What PMT sees</h2>
        <p className="mt-1 text-sm text-ink2">Untick a section to hide it from PMT's link. You'll still see it (faded) in your preview.</p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SECTION_KEYS.map((k) => (
            <label key={k} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={s.sections[k]} onChange={(e) => set({ sections: { ...s.sections, [k]: e.target.checked } })} />
              {SECTION_LABELS[k]}
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">Logos</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LogoField label="PMT logo (shown on navy)" src={fileUrl(state.settings.pmtLogoKey, { kind: 'admin' }) ?? '/brand/pmt-logo.webp'} onFile={(f) => void uploadLogo(f, 'pmtLogoKey')} bg="bg-navy" />
          <LogoField label="Your logo (shown on dark)" src={fileUrl(state.settings.agencyLogoKey, { kind: 'admin' }) ?? '/brand/zdub-logo.webp'} onFile={(f) => void uploadLogo(f, 'agencyLogoKey')} bg="bg-[#0b1420]" />
        </div>
      </Card>
    </>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Card>
  );
}

function LogoField({ label, src, onFile, bg }: { label: string; src: string; onFile: (f: File | undefined) => void; bg: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold text-ink2">{label}</p>
      <div className={`flex h-24 items-center justify-center rounded-lg ${bg} p-3`}>
        <img src={src} alt="" className="max-h-full max-w-full" />
      </div>
      <input type="file" accept="image/png,image/jpeg,image/webp" className="mt-2 block text-sm" onChange={(e) => onFile(e.target.files?.[0])} />
    </div>
  );
}
