import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api, ApiError } from '../api';
import { Loading } from '../App';
import { Dashboard } from '../dashboard/Dashboard';
import { fmtRange } from '../lib/dates';
import type { AppState } from '../lib/types';
import { Icon } from '../ui/Icon';
import { Button, inputClass } from '../ui/ui';

function storedKey(t: string): string | null {
  try {
    return sessionStorage.getItem(`pmt-k-${t}`);
  } catch {
    return null;
  }
}

export function ReportPage() {
  const { token = '', archiveId } = useParams();
  const nav = useNavigate();
  const [k, setK] = useState<string | null>(() => storedKey(token));
  const [state, setState] = useState<AppState | null>(null);
  const [live, setLive] = useState<AppState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsPassword, setNeedsPassword] = useState(false);

  const load = useCallback(async () => {
    setError(null);
    try {
      const current = live ?? (await api.report(token, k));
      setLive(current);
      setState(archiveId ? await api.archive(archiveId, token, k) : current);
      setNeedsPassword(false);
    } catch (e) {
      if (e instanceof ApiError && e.needsPassword) setNeedsPassword(true);
      else setError(e instanceof Error ? e.message : 'Something went wrong.');
    }
  }, [token, k, archiveId, live]);

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, k, archiveId]);

  useEffect(() => {
    document.title = state ? `${state.settings.clientShortName} ad results` : 'Ad results';
  }, [state]);

  if (needsPassword) {
    return (
      <PasswordGate
        onUnlock={async (pw) => {
          const r = await api.unlock(token, pw);
          try {
            sessionStorage.setItem(`pmt-k-${token}`, r.k);
          } catch {
            /* the password will be asked again next visit */
          }
          setK(r.k);
        }}
      />
    );
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="max-w-sm text-center">
          <Icon name="link" className="mx-auto h-8 w-8 text-muted" />
          <p className="mt-3 font-semibold">{error}</p>
          <Button className="mt-4" onClick={() => void load()} icon="refresh">
            Try again
          </Button>
        </div>
      </div>
    );
  }
  if (!state || !live) return <Loading label="Loading your report…" />;

  const archived = archiveId ? live.archive.find((a) => a.id === archiveId) : null;
  const banner = (
    <div className="no-print mt-4 flex flex-wrap items-center gap-2 text-sm">
      {archived ? (
        <>
          <span className="rounded-full bg-gold px-3 py-1 font-semibold text-navydeep">
            Saved report: {archived.label} ({fmtRange(archived.range, false)})
          </span>
          <Link to={`/r/${token}`} className="focus-ring rounded font-semibold text-white underline">
            Back to the live report
          </Link>
        </>
      ) : (
        live.archive.length > 0 && (
          <label className="flex items-center gap-2 text-white/80">
            <Icon name="archive" />
            Past weekly reports:
            <select
              className="rounded-md border border-white/30 bg-navydeep px-2 py-1 text-sm text-white"
              value=""
              onChange={(e) => e.target.value && nav(`/r/${token}/archive/${e.target.value}`)}
            >
              <option value="">Choose…</option>
              {live.archive.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label} · {fmtRange(a.range, false)}
                </option>
              ))}
            </select>
          </label>
        )
      )}
    </div>
  );

  return <Dashboard state={state} mode="client" access={{ kind: 'client', t: token, k }} banner={banner} />;
}

function PasswordGate({ onUnlock }: { onUnlock: (pw: string) => Promise<void> }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await onUnlock(pw);
    } catch (x) {
      setErr(x instanceof Error ? x.message : 'Try again.');
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy p-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl bg-surface p-6 shadow-2xl">
        <img src="/brand/pmt-logo.webp" alt="Pacific Motorcycle Training" className="mx-auto h-14 rounded bg-navy p-2" />
        <h1 className="mt-4 text-center text-lg font-semibold">Your ad results</h1>
        <p className="mt-1 text-center text-sm text-ink2">Enter the password your agency gave you.</p>
        <input type="password" autoFocus autoComplete="current-password" aria-label="Password" className={`${inputClass} mt-4`} value={pw} onChange={(e) => setPw(e.target.value)} />
        {err && <p className="mt-2 text-sm text-badink">{err}</p>}
        <Button type="submit" variant="primary" className="mt-4 w-full" disabled={busy || !pw}>
          {busy ? 'Checking…' : 'View report'}
        </Button>
      </form>
    </div>
  );
}
