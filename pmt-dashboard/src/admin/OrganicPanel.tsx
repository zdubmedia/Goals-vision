import { useState } from 'react';
import { api } from '../api';
import { addDays, fmtRange, parseDate, todayISO } from '../lib/dates';
import { int } from '../lib/format';
import { guessColumn, ORGANIC_METRICS } from '../lib/organic';
import { parseNumber, type Table } from '../lib/tabular';
import type { ConversionEntry, ExtraEntry, ExtraMetric, OrganicEntry, OrganicMetric, Platform } from '../lib/types';
import { Button, Card, Field, inputClass, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { isSpreadsheet, newId, readTable, SHEET_TYPE } from './files';

const METRICS = Object.keys(ORGANIC_METRICS) as OrganicMetric[];
const WINDOWS = [7, 14, 28, 30, 60, 90];

export function OrganicPanel() {
  return (
    <>
      <PanelTitle title="Instagram & Facebook numbers">
        Type in numbers from the Instagram app or Meta Business Suite, or upload a Business Suite export. Numbers for overlapping periods are fine: "last 60 days"
        minus "last 30 days" gives the 30 days before, automatically.
      </PanelTitle>
      <ManualEntry />
      <FileImport />
      <EntryList />
      <Extras />
    </>
  );
}

function ManualEntry() {
  const { save } = useAdmin();
  const [platform, setPlatform] = useState<Platform>('instagram');
  const [metric, setMetric] = useState<OrganicMetric>('profile_visits');
  const [end, setEnd] = useState(addDays(todayISO(), -1));
  const [days, setDays] = useState<number | ''>(30);
  const [start, setStart] = useState(addDays(addDays(todayISO(), -1), -29));
  const [value, setValue] = useState('');
  const [change, setChange] = useState('');
  const [includesAds, setIncludesAds] = useState(false);
  const pointInTime = ORGANIC_METRICS[metric].pointInTime;

  const setWindow = (d: number | '', e = end) => {
    setDays(d);
    if (d) setStart(addDays(e, -(d - 1)));
  };

  const submit = async () => {
    const v = parseNumber(value);
    if (v === null) return;
    const pct = parseNumber(change);
    const entry: OrganicEntry = {
      id: newId('org'),
      platform,
      metric,
      start: pointInTime ? end : start,
      end,
      value: v,
      prevValue: pct === null ? null : Math.round(v / (1 + pct / 100)),
      includesAds,
      source: 'manual',
    };
    const ok = await save(
      (s) => ({
        ...s,
        organic: [...s.organic.filter((e) => !(e.platform === platform && e.metric === metric && e.start === entry.start && e.end === entry.end)), entry],
        dataUpdatedAt: new Date().toISOString(),
      }),
      `Saved ${ORGANIC_METRICS[metric].label.toLowerCase()} for ${fmtRange(entry)}.`,
    );
    if (ok) {
      setValue('');
      setChange('');
    }
  };

  return (
    <Card>
      <h2 className="text-base font-semibold">Add a number</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Platform">
          <select className={inputClass} value={platform} onChange={(e) => setPlatform(e.target.value as Platform)}>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook Page</option>
          </select>
        </Field>
        <Field label="What" hint={ORGANIC_METRICS[metric].help}>
          <select className={inputClass} value={metric} onChange={(e) => setMetric(e.target.value as OrganicMetric)}>
            {METRICS.map((m) => (
              <option key={m} value={m}>
                {ORGANIC_METRICS[m].label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={pointInTime ? 'On date' : 'Period ends'}>
          <input
            type="date"
            className={inputClass}
            value={end}
            onChange={(e) => {
              setEnd(e.target.value);
              setWindow(days, e.target.value);
            }}
          />
        </Field>
        {!pointInTime && (
          <Field label="Period length">
            <select className={inputClass} value={days} onChange={(e) => setWindow(e.target.value ? Number(e.target.value) : '')}>
              {WINDOWS.map((w) => (
                <option key={w} value={w}>
                  Last {w} days
                </option>
              ))}
              <option value="">Custom start date</option>
            </select>
          </Field>
        )}
        {!pointInTime && days === '' && (
          <Field label="Period starts">
            <input type="date" className={inputClass} value={start} max={end} onChange={(e) => setStart(e.target.value)} />
          </Field>
        )}
        <Field label="Number">
          <input inputMode="decimal" className={inputClass} value={value} onChange={(e) => setValue(e.target.value)} placeholder="e.g. 342" />
        </Field>
        {!pointInTime && (
          <Field label="% change shown (optional)" hint='Business Suite shows e.g. "+156%" vs the period before.'>
            <input inputMode="decimal" className={inputClass} value={change} onChange={(e) => setChange(e.target.value)} placeholder="e.g. 156" />
          </Field>
        )}
        <label className="flex items-center gap-2 self-end pb-2 text-sm">
          <input type="checkbox" checked={includesAds} onChange={(e) => setIncludesAds(e.target.checked)} /> Includes ad views
        </label>
      </div>
      <p className="mt-2 text-xs text-muted">{pointInTime ? `On ${end}` : `Covers ${fmtRange({ start, end })}`}</p>
      <Button variant="primary" className="mt-3" icon="check" disabled={parseNumber(value) === null} onClick={() => void submit()}>
        Save number
      </Button>
    </Card>
  );
}

interface Mapping {
  header: string;
  platform: Platform;
  metric: OrganicMetric | '';
}

function FileImport() {
  const { save, toast } = useAdmin();
  const [file, setFile] = useState<File | null>(null);
  const [table, setTable] = useState<Table | null>(null);
  const [dateCol, setDateCol] = useState('');
  const [maps, setMaps] = useState<Mapping[]>([]);
  const [err, setErr] = useState<string | null>(null);

  const pick = async (f: File | undefined) => {
    if (!f) return;
    setErr(null);
    try {
      const t = await readTable(f);
      const dc = t.headers.find((h) => t.rows.slice(0, 5).filter((r) => parseDate(r[h])).length >= Math.min(3, t.rows.length));
      if (!dc) throw new Error('No date column was found. Business Suite exports should have a "Date" column.');
      const numeric = t.headers.filter((h) => h !== dc && t.rows.some((r) => parseNumber(r[h]) !== null));
      setFile(f);
      setTable(t);
      setDateCol(dc);
      setMaps(
        numeric.map((h) => {
          const g = guessColumn(h);
          return { header: h, platform: g?.platform ?? (/facebook|page/i.test(f.name) ? 'facebook' : 'instagram'), metric: g?.metric ?? '' };
        }),
      );
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'That file could not be read.');
    }
  };

  const importIt = async () => {
    if (!table || !file) return;
    const used = maps.filter((m) => m.metric);
    const entries: OrganicEntry[] = [];
    const uploadId = newId('orgfile');
    for (const r of table.rows) {
      const d = parseDate(r[dateCol]);
      if (!d) continue;
      for (const m of used) {
        const v = parseNumber(r[m.header]);
        if (v === null) continue;
        entries.push({ id: newId('org'), platform: m.platform, metric: m.metric as OrganicMetric, start: d, end: d, value: v, source: 'upload', uploadId });
      }
    }
    if (!entries.length) {
      toast('No numbers to import. Pick what each column is first.', 'error');
      return;
    }
    let rawKey: string | undefined;
    try {
      rawKey = (await api.uploadFile(file, isSpreadsheet(file) ? SHEET_TYPE : 'text/csv')).key;
    } catch {
      /* the numbers still import even if the original file can't be kept */
    }
    const keyOf = (e: OrganicEntry) => `${e.platform}|${e.metric}|${e.start}|${e.end}`;
    const incoming = new Set(entries.map(keyOf));
    const ok = await save(
      (s) => ({
        ...s,
        organic: [...s.organic.filter((e) => !incoming.has(keyOf(e))), ...entries],
        organicUploads: [...s.organicUploads, { id: uploadId, fileName: file.name, uploadedAt: new Date().toISOString(), entryCount: entries.length, rawKey }],
        dataUpdatedAt: new Date().toISOString(),
      }),
      `Imported ${int(entries.length)} daily numbers.`,
    );
    if (ok) {
      setTable(null);
      setFile(null);
    }
  };

  return (
    <Card>
      <h2 className="text-base font-semibold">Upload a Business Suite export</h2>
      <p className="mt-1 text-sm text-ink2">
        In Meta Business Suite: <strong>Insights → Export data</strong>, choose the date range and the metrics, then download as CSV/Excel. Day-by-day files work best.
      </p>
      <input type="file" accept=".csv,.xlsx" className="mt-3 block text-sm" onChange={(e) => void pick(e.target.files?.[0])} />
      {err && (
        <div className="mt-3">
          <Note tone="warn">{err}</Note>
        </div>
      )}
      {table && (
        <div className="mt-4 space-y-3">
          <p className="text-sm">
            Found {table.rows.length} rows, dates in "{dateCol}". Tell the dashboard what each column is (pick "Skip" to leave one out):
          </p>
          <div className="space-y-2">
            {maps.map((m, i) => (
              <div key={m.header} className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[minmax(0,1fr),160px,220px]">
                <span className="truncate text-sm font-semibold">{m.header}</span>
                <select className={inputClass} value={m.platform} onChange={(e) => setMaps(maps.map((x, j) => (j === i ? { ...x, platform: e.target.value as Platform } : x)))}>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                </select>
                <select className={inputClass} value={m.metric} onChange={(e) => setMaps(maps.map((x, j) => (j === i ? { ...x, metric: e.target.value as OrganicMetric | '' } : x)))}>
                  <option value="">Skip</option>
                  {METRICS.map((k) => (
                    <option key={k} value={k}>
                      {ORGANIC_METRICS[k].label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="primary" icon="check" onClick={() => void importIt()}>
              Import
            </Button>
            <Button onClick={() => setTable(null)}>Cancel</Button>
          </div>
        </div>
      )}
    </Card>
  );
}

function EntryList() {
  const { state, save } = useAdmin();
  const windows = state.organic.filter((e) => e.start !== e.end || ORGANIC_METRICS[e.metric].pointInTime);
  const daily = state.organic.filter((e) => e.start === e.end && !ORGANIC_METRICS[e.metric].pointInTime);
  const dailyGroups = new Map<string, OrganicEntry[]>();
  for (const e of daily) {
    const k = `${e.platform}|${e.metric}`;
    dailyGroups.set(k, [...(dailyGroups.get(k) ?? []), e]);
  }
  const sorted = [...windows].sort((a, b) => a.platform.localeCompare(b.platform) || a.metric.localeCompare(b.metric) || (a.start < b.start ? -1 : 1));
  return (
    <Card>
      <h2 className="mb-3 text-base font-semibold">Saved numbers</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-muted">
              <th className="py-2 pr-2">Platform</th>
              <th className="py-2 pr-2">What</th>
              <th className="py-2 pr-2">Period</th>
              <th className="py-2 pr-2 text-right">Number</th>
              <th className="py-2 pr-2 text-right">Period before</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {sorted.map((e) => (
              <tr key={e.id} className="border-b border-line/60">
                <td className="py-2 pr-2">{e.platform === 'instagram' ? 'Instagram' : 'Facebook'}</td>
                <td className="py-2 pr-2">{ORGANIC_METRICS[e.metric].label}</td>
                <td className="py-2 pr-2">{fmtRange(e)}</td>
                <td className="tabular py-2 pr-2 text-right font-semibold">{int(e.value)}</td>
                <td className="tabular py-2 pr-2 text-right text-ink2">{e.prevValue ? int(e.prevValue) : '—'}</td>
                <td className="py-2 text-right">
                  <Button
                    size="sm"
                    variant="ghost"
                    icon="trash"
                    title="Delete"
                    onClick={() => void save((s) => ({ ...s, organic: s.organic.filter((x) => x.id !== e.id), dataUpdatedAt: new Date().toISOString() }), 'Deleted.')}
                  />
                </td>
              </tr>
            ))}
            {[...dailyGroups].map(([k, list]) => {
              const [p, m] = k.split('|');
              const days = list.map((e) => e.start).sort();
              return (
                <tr key={k} className="border-b border-line/60">
                  <td className="py-2 pr-2">{p === 'instagram' ? 'Instagram' : 'Facebook'}</td>
                  <td className="py-2 pr-2">{ORGANIC_METRICS[m as OrganicMetric].label}</td>
                  <td className="py-2 pr-2">
                    {list.length} daily numbers, {fmtRange({ start: days[0], end: days[days.length - 1] })}
                  </td>
                  <td className="tabular py-2 pr-2 text-right font-semibold">{int(list.reduce((s, e) => s + e.value, 0))}</td>
                  <td />
                  <td className="py-2 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      icon="trash"
                      title="Delete all daily numbers"
                      onClick={() => {
                        if (window.confirm('Delete all these daily numbers?'))
                          void save((s) => ({ ...s, organic: s.organic.filter((x) => !list.includes(x)), dataUpdatedAt: new Date().toISOString() }), 'Deleted.');
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

const EXTRA_LABELS: Record<ExtraMetric, string> = {
  phone_calls: 'Phone calls PMT received',
  dms: 'DMs / messages PMT received',
  gbp_calls: 'Google Business Profile calls',
  gbp_website_clicks: 'Google Business Profile website clicks',
};

function Extras() {
  const { state, save } = useAdmin();
  const locations = state.settings.locations.map((l) => l.name);
  const [metric, setMetric] = useState<ExtraMetric>('phone_calls');
  const [start, setStart] = useState(state.settings.campaignStart);
  const [end, setEnd] = useState(addDays(todayISO(), -1));
  const [value, setValue] = useState('');
  const [location, setLocation] = useState('');
  const [convDate, setConvDate] = useState(addDays(todayISO(), -1));
  const [convCount, setConvCount] = useState('');
  const [convLoc, setConvLoc] = useState('');

  return (
    <Card>
      <h2 className="text-base font-semibold">Other numbers (optional)</h2>
      <p className="mt-1 text-sm text-ink2">
        Calls, messages and Google Business Profile numbers show in the Social section. These only count when the whole period you enter falls inside the dates
        PMT is looking at.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="What">
          <select className={inputClass} value={metric} onChange={(e) => setMetric(e.target.value as ExtraMetric)}>
            {(Object.keys(EXTRA_LABELS) as ExtraMetric[]).map((k) => (
              <option key={k} value={k}>
                {EXTRA_LABELS[k]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="From">
          <input type="date" className={inputClass} value={start} onChange={(e) => setStart(e.target.value)} />
        </Field>
        <Field label="To">
          <input type="date" className={inputClass} value={end} min={start} onChange={(e) => setEnd(e.target.value)} />
        </Field>
        <Field label="Location (optional)">
          <select className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">All / unknown</option>
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
        <Field label="Number">
          <input inputMode="numeric" className={inputClass} value={value} onChange={(e) => setValue(e.target.value)} />
        </Field>
      </div>
      <Button
        className="mt-3"
        icon="plus"
        disabled={parseNumber(value) === null}
        onClick={async () => {
          const entry: ExtraEntry = { id: newId('extra'), metric, start, end, value: parseNumber(value)!, location: location || undefined };
          if (await save((s) => ({ ...s, extras: [...s.extras, entry], dataUpdatedAt: new Date().toISOString() }), 'Saved.')) setValue('');
        }}
      >
        Add
      </Button>
      {state.extras.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm">
          {state.extras.map((e) => (
            <li key={e.id} className="flex items-center justify-between gap-2 rounded-md bg-surface2 px-3 py-1.5">
              <span>
                {EXTRA_LABELS[e.metric]}: <strong>{int(e.value)}</strong> · {fmtRange(e)}
                {e.location ? ` · ${e.location}` : ''}
              </span>
              <Button size="sm" variant="ghost" icon="trash" title="Delete" onClick={() => void save((s) => ({ ...s, extras: s.extras.filter((x) => x.id !== e.id) }), 'Deleted.')} />
            </li>
          ))}
        </ul>
      )}

      <h3 className="mt-6 text-sm font-semibold">Bookings confirmed from ads (once tracking exists)</h3>
      <p className="mt-1 text-sm text-ink2">
        When the Meta Pixel or Google Analytics shows bookings that came from the ads, enter them here (or ask me to connect it). As soon as any are entered, the
        dashboard uses these instead of the screenshot estimates for ROI.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-4">
        <Field label="Date">
          <input type="date" className={inputClass} value={convDate} onChange={(e) => setConvDate(e.target.value)} />
        </Field>
        <Field label="Bookings">
          <input inputMode="numeric" className={inputClass} value={convCount} onChange={(e) => setConvCount(e.target.value)} />
        </Field>
        <Field label="Location (optional)">
          <select className={inputClass} value={convLoc} onChange={(e) => setConvLoc(e.target.value)}>
            <option value="">All / unknown</option>
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </Field>
        <div className="self-end">
          <Button
            icon="plus"
            disabled={parseNumber(convCount) === null}
            onClick={async () => {
              const c: ConversionEntry = { id: newId('conv'), date: convDate, count: parseNumber(convCount)!, location: convLoc || undefined, source: 'manual' };
              if (await save((s) => ({ ...s, conversions: [...s.conversions, c], dataUpdatedAt: new Date().toISOString() }), 'Saved.')) setConvCount('');
            }}
          >
            Add
          </Button>
        </div>
      </div>
      {state.conversions.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm">
          {state.conversions.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-2 rounded-md bg-surface2 px-3 py-1.5">
              <span>
                {c.date}: <strong>{c.count}</strong> booking{c.count === 1 ? '' : 's'}
                {c.location ? ` · ${c.location}` : ''}
              </span>
              <Button size="sm" variant="ghost" icon="trash" title="Delete" onClick={() => void save((s) => ({ ...s, conversions: s.conversions.filter((x) => x.id !== c.id) }), 'Deleted.')} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
