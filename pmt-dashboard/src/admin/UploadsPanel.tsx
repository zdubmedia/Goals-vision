import { useMemo, useRef, useState } from 'react';
import { api, fileUrl } from '../api';
import { effectiveData, sumMetrics } from '../lib/ads';
import { fmtRange } from '../lib/dates';
import { fmtDateTime, int, money } from '../lib/format';
import { describeUpload, parseMetaTable, type MetaParseResult } from '../lib/metaParser';
import type { MetaUpload } from '../lib/types';
import { Badge, Button, Card, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { isSpreadsheet, newId, readTable, SHEET_TYPE } from './files';

interface Pending {
  file: File;
  result: MetaParseResult;
}

export function UploadsPanel() {
  const { state, save, toast } = useAdmin();
  const [pending, setPending] = useState<Pending | null>(null);
  const [busy, setBusy] = useState(false);
  const [readError, setReadError] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const eff = useMemo(() => effectiveData(state.uploads), [state.uploads]);

  const pick = async (file: File | undefined) => {
    if (!file) return;
    setReadError(null);
    setPending(null);
    try {
      const table = await readTable(file);
      setPending({ file, result: parseMetaTable(table) });
    } catch (e) {
      setReadError(e instanceof Error ? e.message : 'That file could not be read.');
    }
    if (input.current) input.current.value = '';
  };

  const preview = useMemo(() => {
    if (!pending?.result.ok) return null;
    const r = pending.result;
    const candidate: MetaUpload = {
      id: 'candidate',
      fileName: pending.file.name,
      uploadedAt: new Date().toISOString(),
      level: r.level,
      breakdown: r.breakdown,
      daily: r.daily,
      start: r.start,
      end: r.end,
      rows: r.rows,
      warnings: r.warnings,
    };
    const after = effectiveData([...state.uploads, candidate]);
    const replaces = state.uploads.filter((u) => after.replacedBy[u.id] === 'candidate' && !eff.replacedBy[u.id]);
    const partly = state.uploads.filter(
      (u) => u.daily && r.daily && u.level === r.level && u.breakdown === r.breakdown && !replaces.includes(u) && u.start <= r.end && u.end >= r.start,
    );
    const total = r.summary ?? sumMetrics(r.rows);
    return { replaces, partly, total };
  }, [pending, state.uploads, eff]);

  const confirm = async () => {
    if (!pending?.result.ok) return;
    setBusy(true);
    try {
      const type = isSpreadsheet(pending.file) ? SHEET_TYPE : 'text/csv';
      const { key } = await api.uploadFile(pending.file, type);
      const r = pending.result;
      const upload: MetaUpload = {
        id: newId('meta'),
        fileName: pending.file.name,
        uploadedAt: new Date().toISOString(),
        level: r.level,
        breakdown: r.breakdown,
        daily: r.daily,
        start: r.start,
        end: r.end,
        rows: r.summary ? [r.summary, ...r.rows] : r.rows,
        warnings: r.warnings,
        rawKey: key,
      };
      const ok = await save(
        (s) => ({ ...s, uploads: [...s.uploads, upload], dataUpdatedAt: new Date().toISOString() }),
        `Added ${describeUpload(r.level, r.breakdown, r.daily).toLowerCase()} for ${fmtRange({ start: r.start, end: r.end })}.`,
      );
      if (ok) setPending(null);
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Upload failed.', 'error');
    } finally {
      setBusy(false);
    }
  };

  const remove = async (u: MetaUpload) => {
    if (!window.confirm(`Delete "${u.fileName}"? Its numbers will be removed from the dashboard.`)) return;
    const ok = await save((s) => ({ ...s, uploads: s.uploads.filter((x) => x.id !== u.id), dataUpdatedAt: new Date().toISOString() }), 'File deleted.');
    if (ok && u.rawKey) api.deleteFile(u.rawKey).catch(() => {});
  };

  const sorted = [...state.uploads].sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));

  return (
    <>
      <PanelTitle title="Meta Ads data">
        Upload exports from Meta Ads Manager (CSV or Excel). The dashboard works out what kind of report each file is. Uploading a newer file for the same dates
        replaces the old numbers instead of adding them twice.
      </PanelTitle>

      <Card>
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-line px-4 py-8 text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            void pick(e.dataTransfer.files[0]);
          }}
        >
          <p className="font-semibold">Drop a Meta Ads export here</p>
          <p className="text-sm text-ink2">.csv or .xlsx · campaign, ad set or ad level · with or without a breakdown (Day, Age, Gender, Placement)</p>
          <input ref={input} type="file" accept=".csv,.xlsx,text/csv" className="sr-only" id="meta-file" onChange={(e) => void pick(e.target.files?.[0])} />
          <Button variant="primary" icon="upload" onClick={() => input.current?.click()}>
            Choose file
          </Button>
        </div>
        {readError && (
          <div className="mt-3">
            <Note tone="warn">{readError}</Note>
          </div>
        )}

        {pending && (
          <div className="mt-4 rounded-lg border border-line p-4">
            <p className="text-sm text-muted">{pending.file.name}</p>
            {!pending.result.ok ? (
              <div className="mt-2 space-y-2">
                <p className="font-semibold text-badink">This file can't be used:</p>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {pending.result.errors.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <Button onClick={() => setPending(null)}>Choose a different file</Button>
              </div>
            ) : (
              <div className="mt-2 space-y-3">
                <p className="text-lg font-semibold">
                  {describeUpload(pending.result.level, pending.result.breakdown, pending.result.daily)} ·{' '}
                  {fmtRange({ start: pending.result.start, end: pending.result.end })}
                </p>
                <p className="text-sm text-ink2">
                  {int(pending.result.rows.length)} rows · total spend {money(preview?.total.spend)} · {int(preview?.total.results)} website visits
                  {pending.result.summary ? ' (from Meta’s total row)' : ''}
                </p>
                {preview && preview.replaces.length > 0 && (
                  <Note>
                    This replaces {preview.replaces.map((u) => `"${u.fileName}"`).join(', ')} (same kind of report, same dates). The old file stays in the history below.
                  </Note>
                )}
                {preview && preview.partly.length > 0 && (
                  <Note>Overlapping days in {preview.partly.map((u) => `"${u.fileName}"`).join(', ')} will use this newer file. Other days are kept.</Note>
                )}
                {pending.result.warnings.map((w) => (
                  <Note key={w} tone="warn">
                    {w}
                  </Note>
                ))}
                <div className="flex gap-2">
                  <Button variant="primary" icon="check" onClick={() => void confirm()} disabled={busy}>
                    {busy ? 'Saving…' : 'Add to dashboard'}
                  </Button>
                  <Button onClick={() => setPending(null)} disabled={busy}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      <Card>
        <h2 className="mb-3 text-base font-semibold">Upload history</h2>
        <ul className="divide-y divide-line">
          {sorted.map((u) => {
            const replaced = eff.replacedBy[u.id];
            const by = replaced ? state.uploads.find((x) => x.id === replaced) : null;
            const raw = fileUrl(u.rawKey, { kind: 'admin' });
            return (
              <li key={u.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{u.fileName}</p>
                  <p className="text-sm text-ink2">
                    {describeUpload(u.level, u.breakdown, u.daily)} · {fmtRange({ start: u.start, end: u.end })} · {int(u.rows.filter((r) => !r.isSummary).length)} rows
                  </p>
                  <p className="text-xs text-muted">Added {fmtDateTime(u.uploadedAt)}</p>
                  {u.warnings.length > 0 && <p className="mt-1 text-xs text-ink2">⚠ {u.warnings.join(' ')}</p>}
                </div>
                <div className="flex items-center gap-2">
                  {replaced ? <Badge tone="neutral">Replaced by {by?.fileName ?? 'a newer file'}</Badge> : <Badge tone="good">In use</Badge>}
                  {raw && (
                    <a href={raw} download={u.fileName} className="focus-ring rounded-md px-2 py-1 text-xs font-semibold text-ink2 hover:bg-surface2">
                      Download
                    </a>
                  )}
                  <Button size="sm" variant="danger" icon="trash" onClick={() => void remove(u)} title="Delete this file" />
                </div>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">How to export from Meta Ads Manager</h2>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-ink2">
          <li>Open Ads Manager and pick the date range at the top right (for example "Since launch" or "Last 7 days").</li>
          <li>
            Choose the <strong>Campaigns</strong>, <strong>Ad sets</strong> or <strong>Ads</strong> tab. Ad sets give the location breakdown.
          </li>
          <li>
            For day-by-day numbers: <strong>Breakdown → By time → Day</strong>. For audience: <strong>Breakdown → By delivery → Age</strong>,{' '}
            <strong>Gender</strong> or <strong>Placement</strong>.
          </li>
          <li>
            Click <strong>Reports → Export table data</strong>, choose <strong>.csv</strong> or <strong>.xlsx</strong>, and keep "Include summary row" ticked.
          </li>
          <li>Drop the file above. Do one file per breakdown.</li>
        </ol>
        <p className="mt-2 text-xs text-muted">
          Best set each week: ad sets by day, ad sets total, ads total, and campaign by age, gender and placement. Reach can only be shown for date ranges you've
          exported as a total (reach can't be added up from daily numbers).
        </p>
      </Card>
    </>
  );
}
