import { useEffect, useMemo, useRef, useState } from 'react';
import { api, fileUrl } from '../api';
import { effectiveData } from '../lib/ads';
import { fmtDate, todayISO } from '../lib/dates';
import { fmtDateTime } from '../lib/format';
import { creativeImages, type Annotation, type Creative } from '../lib/types';
import { sanitize } from '../dashboard/sections/Insights';
import { Icon, type IconName } from '../ui/Icon';
import { Button, Card, Field, inputClass } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { compressImage, newId } from './files';

export function ContentPanel() {
  return (
    <>
      <PanelTitle title="Ads & notes">Ad images and text for the gallery, your weekly notes for PMT, and notes on the chart (like "new ad image").</PanelTitle>
      <InsightsEditor />
      <Creatives />
      <Annotations />
    </>
  );
}

function InsightsEditor() {
  const { state, save } = useAdmin();
  const ref = useRef<HTMLDivElement>(null);
  const [dirty, setDirty] = useState(false);
  useEffect(() => {
    if (ref.current && !dirty) ref.current.innerHTML = sanitize(state.insightsHtml);
  }, [state.insightsHtml, dirty]);

  const cmd = (command: string, value?: string) => {
    ref.current?.focus();
    document.execCommand(command, false, value);
    setDirty(true);
  };
  const tools: [IconName | null, string, () => void][] = [
    [null, 'Heading', () => cmd('formatBlock', 'h3')],
    [null, 'Normal text', () => cmd('formatBlock', 'p')],
    [null, 'Bold', () => cmd('bold')],
    [null, '• List', () => cmd('insertUnorderedList')],
    [
      'link',
      'Link',
      () => {
        const url = window.prompt('Link address (https://…)');
        if (url && /^https?:\/\//.test(url)) cmd('createLink', url);
      },
    ],
  ];

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold">Insights & next steps (weekly notes)</h2>
        <span className="text-xs text-muted">Last saved {fmtDateTime(state.insightsUpdatedAt)}</span>
      </div>
      <p className="mt-1 text-sm text-ink2">Write in plain words: what worked, what you're changing. PMT sees this near the end of the report.</p>
      <div className="mt-3 flex flex-wrap gap-1 rounded-t-md border border-b-0 border-line bg-surface2 p-1">
        {tools.map(([icon, label, fn]) => (
          <button
            key={label}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={fn}
            className="focus-ring inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold text-ink2 hover:bg-surface hover:text-ink"
          >
            {icon && <Icon name={icon} className="h-3.5 w-3.5" />}
            {label}
          </button>
        ))}
      </div>
      <div
        ref={ref}
        contentEditable
        role="textbox"
        aria-multiline="true"
        aria-label="Weekly notes"
        suppressContentEditableWarning
        onInput={() => setDirty(true)}
        className="prose-insights focus-ring min-h-[220px] rounded-b-md border border-line bg-surface px-4 py-3 text-[15px]"
      />
      <div className="mt-3 flex gap-2">
        <Button
          variant="primary"
          icon="check"
          disabled={!dirty}
          onClick={async () => {
            const html = sanitize(ref.current?.innerHTML ?? '');
            if (await save((s) => ({ ...s, insightsHtml: html, insightsUpdatedAt: new Date().toISOString() }), 'Notes saved.')) setDirty(false);
          }}
        >
          Save notes
        </Button>
        {dirty && (
          <Button
            onClick={() => {
              if (ref.current) ref.current.innerHTML = sanitize(state.insightsHtml);
              setDirty(false);
            }}
          >
            Undo changes
          </Button>
        )}
      </div>
    </Card>
  );
}

function Creatives() {
  const { state, save } = useAdmin();
  const adNames = useMemo(() => {
    const eff = effectiveData(state.uploads);
    const m = new Map<string, string>();
    for (const r of eff.rows) if (r.ad) m.set(r.ad, r.adSet);
    return m;
  }, [state.uploads]);
  const missing = [...adNames].filter(([ad]) => !state.creatives.some((c) => c.adName === ad));

  const update = (adName: string, patch: Partial<Creative>, msg?: string) =>
    save((s) => ({ ...s, creatives: s.creatives.map((c) => (c.adName === adName ? { ...c, ...patch } : c)) }), msg);

  return (
    <Card>
      <h2 className="text-base font-semibold">Ad gallery</h2>
      <p className="mt-1 text-sm text-ink2">
        Add each ad's images (or stills from the video) and its text. Add several images when the same text ran with different pictures: PMT swipes through
        them. The first image is the cover. The numbers come from the Meta files automatically.
      </p>
      {missing.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span>Ads in your data without a card:</span>
          {missing.map(([ad, adSet]) => (
            <Button key={ad} size="sm" icon="plus" onClick={() => void save((s) => ({ ...s, creatives: [...s.creatives, { adName: ad, adSet, headline: '', primaryText: '' }] }), 'Ad added.')}>
              {ad}
            </Button>
          ))}
        </div>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {state.creatives.map((c) => (
          <div key={c.adName} className="space-y-3 rounded-lg border border-line p-3">
            <AdImages creative={c} onChange={(imageKeys, msg) => update(c.adName, { imageKeys, imageKey: undefined }, msg)} />
            <div className="min-w-0 space-y-2">
              <p className="truncate text-xs text-muted">
                {c.adName} · {c.adSet}
              </p>
              <input
                className={inputClass}
                defaultValue={c.headline}
                placeholder="Headline"
                aria-label="Headline"
                onBlur={(e) => e.target.value !== c.headline && void update(c.adName, { headline: e.target.value }, 'Saved.')}
              />
              <textarea
                className={inputClass}
                rows={3}
                defaultValue={c.primaryText}
                placeholder="Primary text (the words above the image)"
                aria-label="Primary text"
                onBlur={(e) => e.target.value !== c.primaryText && void update(c.adName, { primaryText: e.target.value }, 'Saved.')}
              />
              <Button
                size="sm"
                variant="ghost"
                icon="trash"
                onClick={() => {
                  if (window.confirm('Remove this ad card? (The numbers stay in the data.)')) void save((s) => ({ ...s, creatives: s.creatives.filter((x) => x.adName !== c.adName) }), 'Removed.');
                }}
              >
                Remove card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Annotations() {
  const { state, save } = useAdmin();
  const [date, setDate] = useState(todayISO());
  const [label, setLabel] = useState('');
  const [kind, setKind] = useState<Annotation['kind']>('change');
  const list = [...state.annotations].sort((a, b) => (a.date < b.date ? -1 : 1));
  return (
    <Card>
      <h2 className="text-base font-semibold">Chart notes</h2>
      <p className="mt-1 text-sm text-ink2">These show as markers on the "Results over time" chart, for example "Ads launched", "New image", "Budget raised".</p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[160px,minmax(0,1fr),160px,auto]">
        <Field label="Date">
          <input type="date" className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <Field label="Note">
          <input className={inputClass} value={label} maxLength={60} onChange={(e) => setLabel(e.target.value)} placeholder="e.g. New Eureka image" />
        </Field>
        <Field label="Kind">
          <select className={inputClass} value={kind} onChange={(e) => setKind(e.target.value as Annotation['kind'])}>
            <option value="change">Ad change</option>
            <option value="launch">Launch</option>
            <option value="class">Class date</option>
            <option value="note">Other</option>
          </select>
        </Field>
        <div className="self-end">
          <Button
            icon="plus"
            disabled={!label.trim()}
            onClick={async () => {
              if (await save((s) => ({ ...s, annotations: [...s.annotations, { id: newId('note'), date, label: label.trim(), kind }] }), 'Note added.')) setLabel('');
            }}
          >
            Add
          </Button>
        </div>
      </div>
      <ul className="mt-3 space-y-1 text-sm">
        {list.map((a) => (
          <li key={a.id} className="flex items-center justify-between gap-2 rounded-md bg-surface2 px-3 py-1.5">
            <span>
              <span className="font-semibold">{fmtDate(a.date)}</span> · {a.label}
            </span>
            <Button size="sm" variant="ghost" icon="trash" title="Delete" onClick={() => void save((s) => ({ ...s, annotations: s.annotations.filter((x) => x.id !== a.id) }), 'Deleted.')} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

function AdImages({ creative, onChange }: { creative: Creative; onChange: (keys: string[], msg: string) => Promise<boolean> }) {
  const { toast } = useAdmin();
  const [busy, setBusy] = useState(false);
  const keys = creativeImages(creative);
  const move = (i: number, d: -1 | 1) => {
    const next = [...keys];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    void onChange(next, d < 0 && i === 1 ? 'Cover image changed.' : 'Order saved.');
  };
  return (
    <div>
      <ul className="flex gap-2 overflow-x-auto pb-1">
        {keys.map((k, i) => (
          <li key={k} className="w-24 shrink-0">
            <div className="relative aspect-square overflow-hidden rounded-md bg-navy">
              <img src={fileUrl(k, { kind: 'admin' })!} alt={`Image ${i + 1}`} className="h-full w-full object-cover" />
              {i === 0 && <span className="absolute left-1 top-1 rounded bg-black/60 px-1.5 text-[10px] font-semibold text-white">Cover</span>}
            </div>
            <div className="mt-1 flex justify-between">
              <button type="button" className="focus-ring rounded px-1 text-xs text-ink2 hover:text-ink disabled:opacity-30" disabled={i === 0} onClick={() => move(i, -1)} aria-label={`Move image ${i + 1} left`}>
                ←
              </button>
              <button
                type="button"
                className="focus-ring rounded px-1 text-xs text-muted hover:text-badink"
                aria-label={`Remove image ${i + 1}`}
                onClick={async () => {
                  if (!window.confirm('Remove this image?')) return;
                  if (await onChange(keys.filter((x) => x !== k), 'Image removed.')) api.deleteFile(k).catch(() => {});
                }}
              >
                Remove
              </button>
              <button type="button" className="focus-ring rounded px-1 text-xs text-ink2 hover:text-ink disabled:opacity-30" disabled={i === keys.length - 1} onClick={() => move(i, 1)} aria-label={`Move image ${i + 1} right`}>
                →
              </button>
            </div>
          </li>
        ))}
        <li className="w-24 shrink-0">
          <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-line text-center text-[11px] font-semibold text-ink2 hover:border-ink2">
            <Icon name="plus" className="h-4 w-4" />
            {busy ? 'Uploading…' : keys.length ? 'Add more' : 'Add images'}
            <input
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              disabled={busy}
              onChange={async (e) => {
                const files = [...(e.target.files ?? [])];
                e.target.value = '';
                if (!files.length) return;
                setBusy(true);
                try {
                  const added: string[] = [];
                  for (const f of files) added.push((await api.uploadFile(await compressImage(f, 1400), 'image/jpeg')).key);
                  await onChange([...keys, ...added], `${added.length} image${added.length === 1 ? '' : 's'} added.`);
                } catch (x) {
                  toast(x instanceof Error ? x.message : 'Upload failed.', 'error');
                } finally {
                  setBusy(false);
                }
              }}
            />
          </label>
        </li>
      </ul>
    </div>
  );
}
