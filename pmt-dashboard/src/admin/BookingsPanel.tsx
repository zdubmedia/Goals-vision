import { useMemo, useState } from 'react';
import { api, fileUrl } from '../api';
import { capacityInfo, classTitle, FORMAT_LABEL, kindOf, rulesFrom, snapshotsFor } from '../lib/bookings';
import { fmtDate, fmtRange, todayISO } from '../lib/dates';
import { fmtSnapTime } from '../lib/format';
import type { AppState, ClassFormat, ClassSession, SeatSnapshot, VisionClass } from '../lib/types';
import { Badge, Button, Card, cx, Field, inputClass, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { compressImage, fileTime, newId, nowLocal } from './files';

interface Row {
  key: string;
  classId: string; // '' = new class
  newClass: { format: ClassFormat; startDate: string; endDate: string; time: 'AM' | 'PM' | '' };
  seatsLeft: string;
  soldOut: boolean;
  fromClaude?: string;
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** Finds the first date in text like "Sat, Oct 24 - Sun, Oct 25" or "10/24/2026". */
function firstDate(text: string, year: number): string | null {
  const t = text.toLowerCase();
  let m = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(\d{1,2})\b/.exec(t);
  if (m) return `${year}-${String(MONTHS.indexOf(m[1]) + 1).padStart(2, '0')}-${m[2].padStart(2, '0')}`;
  m = /\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/.exec(t);
  if (m) {
    const y = m[3] ? (m[3].length === 2 ? 2000 + +m[3] : +m[3]) : year;
    return `${y}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
  }
  return null;
}

function guessFormat(v: VisionClass): ClassFormat {
  const t = v.title.toLowerCase();
  if (/1dpc|1-day premier|licens/.test(t)) return '1DPC';
  if (/irc|intermediate/.test(t)) return 'IRC';
  if (/erider|emtc|online/.test(t)) return 'eMTC';
  return 'MTC';
}

const emptyRow = (): Row => ({
  key: newId('row'),
  classId: '',
  newClass: { format: 'eMTC', startDate: '', endDate: '', time: 'AM' },
  seatsLeft: '',
  soldOut: false,
});

export function BookingsPanel() {
  const { state, save, toast, vision } = useAdmin();
  const locations = state.settings.locations.map((l) => l.name);
  const [location, setLocation] = useState(locations[0] ?? '');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageKey, setImageKey] = useState<string | null>(null);
  const [takenAt, setTakenAt] = useState(nowLocal());
  const [rows, setRows] = useState<Row[]>([emptyRow()]);
  const [busy, setBusy] = useState<string | null>(null);
  const [claudeNote, setClaudeNote] = useState<string | null>(null);

  const locClasses = useMemo(
    () => state.classes.filter((c) => c.location === location).sort((a, b) => (a.startDate < b.startDate ? -1 : a.startDate > b.startDate ? 1 : a.format.localeCompare(b.format))),
    [state.classes, location],
  );

  const choose = (f: File | undefined) => {
    if (!f) return;
    setFile(f);
    setImageKey(null);
    setTakenAt(fileTime(f));
    setPreview(URL.createObjectURL(f));
    setClaudeNote(null);
  };

  const ensureUploaded = async (): Promise<string | null> => {
    if (!file) return null;
    if (imageKey) return imageKey;
    const blob = await compressImage(file);
    const { key } = await api.uploadFile(blob, 'image/jpeg');
    setImageKey(key);
    return key;
  };

  const readWithClaude = async () => {
    setBusy('claude');
    try {
      const key = await ensureUploaded();
      if (!key) return;
      const r = await api.vision(key);
      const year = Number(takenAt.slice(0, 4)) || new Date().getFullYear();
      if (r.location) {
        const hit = locations.find((l) => r.location!.toLowerCase().includes(l.toLowerCase()) || (l === 'Eureka' && /redwood|humboldt/i.test(r.location!)));
        if (hit) setLocation(hit);
      }
      const targetLoc = r.location ? locations.find((l) => r.location!.toLowerCase().includes(l.toLowerCase())) ?? location : location;
      const classes = state.classes.filter((c) => c.location === targetLoc);
      setRows(
        r.classes.map((v) => {
          const date = firstDate(v.dates, year);
          const format = guessFormat(v);
          const sameType = (c: ClassSession) => (kindOf(format) === 'Intermediate' ? c.format === format : kindOf(c.format) === 'Basic');
          const match = classes.find((c) => c.startDate === date && sameType(c) && (!v.time || !c.time || c.time === v.time));
          return {
            key: newId('row'),
            classId: match?.id ?? '',
            newClass: { format, startDate: date ?? '', endDate: date ?? '', time: v.time },
            seatsLeft: v.soldOut ? '0' : v.seatsLeft === null ? '' : String(v.seatsLeft),
            soldOut: v.soldOut || v.seatsLeft === 0,
            fromClaude: `${v.title} · ${v.dates}${v.time ? ` · ${v.time}` : ''}`,
          };
        }),
      );
      setClaudeNote(r.classes.length ? `Claude found ${r.classes.length} class${r.classes.length === 1 ? '' : 'es'}. Check each number against the screenshot before saving.${r.notes ? ` Note: ${r.notes}` : ''}` : `Claude didn't find any classes. ${r.notes}`);
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Could not read the screenshot.', 'error');
    } finally {
      setBusy(null);
    }
  };

  const valid = rows.some((r) => (r.soldOut || r.seatsLeft !== '') && (r.classId || (r.newClass.startDate && r.newClass.endDate)));

  const submit = async () => {
    setBusy('save');
    try {
      const key = await ensureUploaded();
      const newClasses: ClassSession[] = [];
      const snaps: SeatSnapshot[] = [];
      for (const r of rows) {
        if (!r.soldOut && r.seatsLeft === '') continue;
        let classId = r.classId;
        if (!classId) {
          if (!r.newClass.startDate) continue;
          classId = newId('class');
          const isInt = kindOf(r.newClass.format) === 'Intermediate';
          newClasses.push({
            id: classId,
            location,
            format: r.newClass.format,
            startDate: r.newClass.startDate,
            endDate: isInt ? r.newClass.startDate : r.newClass.endDate || r.newClass.startDate,
            time: isInt ? '' : r.newClass.time,
          });
        }
        const seats = r.soldOut ? 0 : Math.max(0, Math.round(Number(r.seatsLeft)));
        snaps.push({ id: newId('snap'), classId, takenAt, seatsLeft: seats, imageKey: key ?? undefined, readBy: r.fromClaude ? 'claude' : 'manual' });
      }
      if (!snaps.length) return;
      const ok = await save(
        (s) => ({ ...s, classes: [...s.classes, ...newClasses], snapshots: [...s.snapshots, ...snaps], dataUpdatedAt: new Date().toISOString() }),
        `Saved ${snaps.length} seat count${snaps.length === 1 ? '' : 's'} for ${location}.`,
      );
      if (ok) {
        setRows([emptyRow()]);
        setFile(null);
        setPreview(null);
        setImageKey(null);
        setClaudeNote(null);
      }
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Saving failed.', 'error');
    } finally {
      setBusy(null);
    }
  };

  const setRow = (key: string, patch: Partial<Row>) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));

  return (
    <>
      <PanelTitle title="Bookings tracker">
        Add a screenshot of a class registration page and how many seats are left. The dashboard works out seats sold between screenshots. One screenshot can
        cover several classes.
      </PanelTitle>

      <Card>
        <h2 className="text-base font-semibold">Add a screenshot</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,240px),minmax(0,1fr)]">
          <div>
            <label className="flex aspect-[3/4] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed border-line bg-surface2 text-center text-sm text-ink2 hover:border-ink2">
              {preview ? <img src={preview} alt="Screenshot preview" className="h-full w-full object-contain" /> : <span className="px-4">Tap to choose a screenshot (optional, but it's the proof PMT can click to see)</span>}
              <input type="file" accept="image/*" className="sr-only" onChange={(e) => choose(e.target.files?.[0])} />
            </label>
            {file && vision && (
              <Button className="mt-2 w-full" icon="sparkle" onClick={() => void readWithClaude()} disabled={!!busy}>
                {busy === 'claude' ? 'Reading…' : 'Read seats with Claude'}
              </Button>
            )}
            {file && !vision && <p className="mt-2 text-xs text-muted">Automatic reading is off (no Anthropic API key). Type the numbers in.</p>}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Location">
                <select className={inputClass} value={location} onChange={(e) => setLocation(e.target.value)}>
                  {locations.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </Field>
              <Field label="Screenshot taken" hint="Filled in from the file; fix it if it's off.">
                <input type="datetime-local" className={inputClass} value={takenAt} onChange={(e) => setTakenAt(e.target.value)} />
              </Field>
            </div>
            {claudeNote && <Note>{claudeNote}</Note>}
            <div className="space-y-3">
              {rows.map((r, i) => (
                <ClassRow
                  key={r.key}
                  row={r}
                  index={i}
                  classes={locClasses}
                  state={state}
                  onChange={(p) => setRow(r.key, p)}
                  onRemove={rows.length > 1 ? () => setRows((rs) => rs.filter((x) => x.key !== r.key)) : undefined}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button icon="plus" onClick={() => setRows((rs) => [...rs, emptyRow()])}>
                Another class from this screenshot
              </Button>
              <Button variant="primary" icon="check" onClick={() => void submit()} disabled={!valid || !!busy}>
                {busy === 'save' ? 'Saving…' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <ClassList />
    </>
  );
}

function ClassRow({
  row,
  index,
  classes,
  state,
  onChange,
  onRemove,
}: {
  row: Row;
  index: number;
  classes: ClassSession[];
  state: AppState;
  onChange: (p: Partial<Row>) => void;
  onRemove?: () => void;
}) {
  const isInt = kindOf(row.newClass.format) === 'Intermediate';
  const last = row.classId ? snapshotsFor(row.classId, state.snapshots).at(-1) : null;
  return (
    <div className="rounded-lg border border-line p-3">
      {row.fromClaude && <p className="mb-2 text-xs text-muted">Claude read: {row.fromClaude}</p>}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr),110px,auto]">
        <Field label={`Class ${index + 1}`}>
          <select className={inputClass} value={row.classId} onChange={(e) => onChange({ classId: e.target.value })}>
            <option value="">+ New class…</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {classTitle(c)} · {c.startDate === c.endDate ? fmtDate(c.startDate) : fmtRange({ start: c.startDate, end: c.endDate }, false)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Seats left">
          <input
            type="number"
            min={0}
            inputMode="numeric"
            className={inputClass}
            value={row.soldOut ? '0' : row.seatsLeft}
            disabled={row.soldOut}
            onChange={(e) => onChange({ seatsLeft: e.target.value })}
          />
        </Field>
        <div className="flex items-end gap-3 pb-1.5">
          <label className="flex items-center gap-1.5 text-sm">
            <input type="checkbox" checked={row.soldOut} onChange={(e) => onChange({ soldOut: e.target.checked })} /> Sold out
          </label>
          {onRemove && <Button size="sm" variant="ghost" icon="trash" onClick={onRemove} title="Remove this row" />}
        </div>
      </div>
      {last && <p className="mt-1.5 text-xs text-muted">Last screenshot: {fmtSnapTime(last.takenAt)}, {last.seatsLeft === 0 ? 'sold out' : `${last.seatsLeft} left`}</p>}
      {!row.classId && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Field label="Type">
            <select className={inputClass} value={row.newClass.format} onChange={(e) => onChange({ newClass: { ...row.newClass, format: e.target.value as ClassFormat } })}>
              {(Object.keys(FORMAT_LABEL) as ClassFormat[]).map((f) => (
                <option key={f} value={f}>
                  {f} – {FORMAT_LABEL[f]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={isInt ? 'Class date' : 'First day'}>
            <input
              type="date"
              className={inputClass}
              value={row.newClass.startDate}
              onChange={(e) => onChange({ newClass: { ...row.newClass, startDate: e.target.value, endDate: row.newClass.endDate || e.target.value } })}
            />
          </Field>
          {!isInt && (
            <>
              <Field label="Last day">
                <input type="date" className={inputClass} value={row.newClass.endDate} min={row.newClass.startDate} onChange={(e) => onChange({ newClass: { ...row.newClass, endDate: e.target.value } })} />
              </Field>
              <Field label="Ride time">
                <select className={inputClass} value={row.newClass.time} onChange={(e) => onChange({ newClass: { ...row.newClass, time: e.target.value as Row['newClass']['time'] } })}>
                  <option value="AM">Morning</option>
                  <option value="PM">Afternoon</option>
                  <option value="">Not shown</option>
                </select>
              </Field>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ClassList() {
  const { state, save } = useAdmin();
  const [showPast, setShowPast] = useState(false);
  const today = todayISO();
  const rules = rulesFrom(state.settings);
  const classes = [...state.classes]
    .filter((c) => showPast || c.endDate >= today)
    .sort((a, b) => (a.location === b.location ? (a.startDate < b.startDate ? -1 : 1) : a.location.localeCompare(b.location)));

  const updateClass = (id: string, patch: Partial<ClassSession>, msg?: string) =>
    save((s) => ({ ...s, classes: s.classes.map((c) => (c.id === id ? { ...c, ...patch } : c)), dataUpdatedAt: new Date().toISOString() }), msg);

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold">Classes and screenshots</h2>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={showPast} onChange={(e) => setShowPast(e.target.checked)} /> Show classes that already ran
        </label>
      </div>
      <ul className="divide-y divide-line">
        {classes.map((c) => {
          const cap = capacityInfo(c, state.classes, rules);
          const snaps = snapshotsFor(c.id, state.snapshots);
          return (
            <li key={c.id} className="py-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold">
                    {c.location} · {classTitle(c)} · {c.startDate === c.endDate ? fmtDate(c.startDate) : fmtRange({ start: c.startDate, end: c.endDate }, false)}
                  </p>
                  <p className="text-xs text-muted">
                    {cap.capacity} seats: {cap.reason}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <label className="flex items-center gap-1.5">
                    Seats
                    <input
                      type="number"
                      min={1}
                      className={cx(inputClass, 'w-16 py-1')}
                      defaultValue={c.capacityOverride ?? ''}
                      placeholder={String(cap.capacity)}
                      aria-label="Capacity override"
                      onBlur={(e) => {
                        const v = e.target.value ? Number(e.target.value) : null;
                        if (v !== (c.capacityOverride ?? null)) void updateClass(c.id, { capacityOverride: v }, 'Capacity updated.');
                      }}
                    />
                  </label>
                  <label className="flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={!!c.droppedOffAt}
                      onChange={(e) => void updateClass(c.id, { droppedOffAt: e.target.checked ? today : null }, e.target.checked ? 'Marked as dropped off the page.' : 'Unmarked.')}
                    />
                    Dropped off page
                  </label>
                  <Button
                    size="sm"
                    variant="danger"
                    icon="trash"
                    title="Delete class and its screenshots"
                    onClick={() => {
                      if (window.confirm('Delete this class and all its seat counts?'))
                        void save((s) => ({ ...s, classes: s.classes.filter((x) => x.id !== c.id), snapshots: s.snapshots.filter((x) => x.classId !== c.id), dataUpdatedAt: new Date().toISOString() }), 'Class deleted.');
                    }}
                  />
                </div>
              </div>
              <ol className="mt-2 flex flex-wrap gap-2">
                {snaps.map((s) => {
                  const img = fileUrl(s.imageKey, { kind: 'admin' });
                  return (
                    <li key={s.id} className="flex items-center gap-1.5 rounded-md bg-surface2 px-2 py-1 text-xs">
                      <span className="text-ink2">{fmtSnapTime(s.takenAt)}</span>
                      <span className="font-semibold">{s.seatsLeft === 0 ? 'Sold out' : `${s.seatsLeft} left`}</span>
                      {s.readBy === 'claude' && <Badge tone="neutral">Claude</Badge>}
                      {img && (
                        <a href={img} target="_blank" rel="noreferrer" className="font-semibold text-accentink underline">
                          image
                        </a>
                      )}
                      <button
                        type="button"
                        className="focus-ring rounded text-muted hover:text-badink"
                        aria-label="Delete this seat count"
                        onClick={() => {
                          if (window.confirm('Delete this seat count?')) void save((st) => ({ ...st, snapshots: st.snapshots.filter((x) => x.id !== s.id), dataUpdatedAt: new Date().toISOString() }), 'Deleted.');
                        }}
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>
      {!classes.length && <p className="text-sm text-muted">No upcoming classes. Add a screenshot above.</p>}
    </Card>
  );
}
