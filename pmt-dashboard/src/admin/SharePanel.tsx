import { useMemo, useState } from 'react';
import { api } from '../api';
import { dataRange, effectiveData } from '../lib/ads';
import { addDays, fmtRange } from '../lib/dates';
import { fmtDateTime } from '../lib/format';
import { Badge, Button, Card, Field, inputClass } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';

export function SharePanel() {
  const { state, setState, toast } = useAdmin();
  const token = state.share?.token ?? '';
  const link = `${window.location.origin}/r/${token}`;
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const dr = useMemo(() => dataRange(effectiveData(state.uploads)), [state.uploads]);
  const [label, setLabel] = useState(() => `Week ending ${dr ? fmtRange({ start: dr.end, end: dr.end }, false) : ''}`);
  const [range, setRange] = useState(() => (dr ? { start: addDays(dr.end, -6) < dr.start ? dr.start : addDays(dr.end, -6), end: dr.end } : { start: state.settings.campaignStart, end: state.settings.campaignStart }));

  const share = async (body: { regenerate?: boolean; password?: string | null }, msg: string) => {
    setBusy(true);
    try {
      const r = await api.share(body);
      setState({ ...state, share: { token: r.token, passwordHash: null }, hasClientPassword: r.hasClientPassword, version: r.version });
      toast(msg);
      setPw('');
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Failed.', 'error');
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <PanelTitle title="Share with PMT">PMT opens this private link on their phone or computer. They can't change anything, and they can't see your admin pages or health alerts.</PanelTitle>

      <Card>
        <h2 className="text-base font-semibold">PMT's private link</h2>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input readOnly className={`${inputClass} font-mono text-xs`} value={link} onFocus={(e) => e.target.select()} aria-label="Report link" />
          <div className="flex gap-2">
            <Button
              variant="primary"
              icon="link"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(link);
                  toast('Link copied. Paste it into a text or email to PMT.');
                } catch {
                  toast('Copy didn’t work. Select the link and copy it by hand.', 'error');
                }
              }}
            >
              Copy
            </Button>
            <a href={link} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-line hover:bg-surface2">
              Open
            </a>
          </div>
        </div>
        <p className="mt-2 text-sm text-ink2">
          Anyone with this link can view the report, so only send it to PMT. If it ever gets shared too widely, make a new link: the old one stops working
          immediately.
        </p>
        <Button
          className="mt-3"
          variant="danger"
          icon="refresh"
          disabled={busy}
          onClick={() => {
            if (window.confirm('Make a new link? The current link will stop working, and you’ll need to send PMT the new one.')) void share({ regenerate: true }, 'New link created. Send it to PMT.');
          }}
        >
          Make a new link
        </Button>
      </Card>

      <Card>
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold">Extra password (optional)</h2>
          {state.hasClientPassword ? <Badge tone="good" icon="lock">On</Badge> : <Badge tone="neutral">Off</Badge>}
        </div>
        <p className="mt-1 text-sm text-ink2">For extra privacy, PMT can be asked for a password the first time they open the link on a device.</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end">
          <Field label={state.hasClientPassword ? 'New password' : 'Password'} className="sm:w-64">
            <input type="text" className={inputClass} value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="off" />
          </Field>
          <Button icon="lock" disabled={busy || pw.length < 4} onClick={() => void share({ password: pw }, 'Password set. Tell PMT what it is.')}>
            {state.hasClientPassword ? 'Change password' : 'Turn on password'}
          </Button>
          {state.hasClientPassword && (
            <Button variant="ghost" disabled={busy} onClick={() => void share({ password: null }, 'Password removed.')}>
              Turn off
            </Button>
          )}
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">Weekly snapshots</h2>
        <p className="mt-1 text-sm text-ink2">
          Save a frozen copy of the report each week. PMT can pick past weeks from a menu at the top of their link, even after newer data is added.
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr),160px,160px,auto]">
          <Field label="Name">
            <input className={inputClass} value={label} onChange={(e) => setLabel(e.target.value)} />
          </Field>
          <Field label="Week from">
            <input type="date" className={inputClass} value={range.start} onChange={(e) => setRange({ ...range, start: e.target.value })} />
          </Field>
          <Field label="to">
            <input type="date" className={inputClass} value={range.end} min={range.start} onChange={(e) => setRange({ ...range, end: e.target.value })} />
          </Field>
          <div className="self-end">
            <Button
              variant="primary"
              icon="archive"
              disabled={busy || !label.trim()}
              onClick={async () => {
                setBusy(true);
                try {
                  const r = await api.saveArchive(label.trim(), range);
                  setState({ ...state, archive: [r.meta, ...state.archive], version: r.version });
                  toast('Snapshot saved.');
                } catch (e) {
                  toast(e instanceof Error ? e.message : 'Failed.', 'error');
                } finally {
                  setBusy(false);
                }
              }}
            >
              Save snapshot
            </Button>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {state.archive.map((a) => (
            <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm">
              <span>
                <span className="font-semibold">{a.label}</span> · {fmtRange(a.range)} <span className="text-muted">· saved {fmtDateTime(a.createdAt)}</span>
              </span>
              <span className="flex gap-2">
                <a href={`/r/${token}/archive/${a.id}`} target="_blank" rel="noreferrer" className="focus-ring rounded px-2 py-1 text-xs font-semibold text-ink2 hover:bg-surface2">
                  View
                </a>
                <Button
                  size="sm"
                  variant="danger"
                  icon="trash"
                  title="Delete snapshot"
                  onClick={async () => {
                    if (!window.confirm(`Delete the snapshot "${a.label}"?`)) return;
                    try {
                      const r = await api.deleteArchive(a.id);
                      setState({ ...state, archive: state.archive.filter((x) => x.id !== a.id), version: r.version });
                      toast('Snapshot deleted.');
                    } catch (e) {
                      toast(e instanceof Error ? e.message : 'Failed.', 'error');
                    }
                  }}
                />
              </span>
            </li>
          ))}
          {!state.archive.length && <li className="py-2 text-sm text-muted">No snapshots yet.</li>}
        </ul>
      </Card>
    </>
  );
}
