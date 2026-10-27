import { createContext, useCallback, useContext, useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { adminToken, api, ApiError, setAdminToken, type AdminState } from '../api';
import { Loading } from '../App';
import { Dashboard } from '../dashboard/Dashboard';
import type { AppState } from '../lib/types';
import { Icon } from '../ui/Icon';
import { Button, cx, inputClass } from '../ui/ui';
import { BookingsPanel } from './BookingsPanel';
import { ContentPanel } from './ContentPanel';
import { FeedbackPanel } from './FeedbackPanel';
import { OrganicPanel } from './OrganicPanel';
import { ResourcesPanel } from './ResourcesPanel';
import { SettingsPanel } from './SettingsPanel';
import { SharePanel } from './SharePanel';
import { UploadsPanel } from './UploadsPanel';

interface AdminCtx {
  state: AdminState;
  /** Applies a change and saves it. Returns false if saving failed. */
  save: (change: (s: AppState) => AppState, message?: string) => Promise<boolean>;
  reload: () => Promise<void>;
  setState: (s: AdminState) => void;
  toast: (msg: string, tone?: 'ok' | 'error') => void;
  vision: boolean;
}

const Ctx = createContext<AdminCtx | null>(null);

export function useAdmin(): AdminCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useAdmin outside AdminApp');
  return c;
}

export default function AdminApp() {
  const [authed, setAuthed] = useState(!!adminToken());
  const [state, setState] = useState<AdminState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number; msg: string; tone: 'ok' | 'error' }[]>([]);
  const [vision, setVision] = useState(false);

  const toast = useCallback((msg: string, tone: 'ok' | 'error' = 'ok') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), tone === 'error' ? 8000 : 3500);
  }, []);

  const reload = useCallback(async () => {
    try {
      setState(await api.getState());
      setError(null);
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) setAuthed(false);
      else setError(e instanceof Error ? e.message : 'Could not load.');
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    void reload();
    api.health().then((h) => setVision(h.vision), () => {});
  }, [authed, reload]);

  const save = useCallback(
    async (change: (s: AppState) => AppState, message?: string) => {
      if (!state) return false;
      const { hasClientPassword, ...base } = state;
      const next = change(structuredClone(base));
      try {
        const r = await api.saveState(next, state.version);
        setState({ ...next, version: r.version, updatedAt: r.updatedAt, hasClientPassword });
        if (message) toast(message);
        return true;
      } catch (e) {
        toast(e instanceof Error ? e.message : 'Saving failed.', 'error');
        if (e instanceof ApiError && e.status === 409) void reload();
        if (e instanceof ApiError && e.status === 401) setAuthed(false);
        return false;
      }
    },
    [state, toast, reload],
  );

  if (!authed) return <Login onDone={() => setAuthed(true)} />;
  if (error)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 p-6 text-center">
        <p className="font-semibold">{error}</p>
        <Button icon="refresh" onClick={() => void reload()}>
          Try again
        </Button>
      </div>
    );
  if (!state) return <Loading />;

  const tabs: [string, string, ReactNode][] = [
    ['', 'Dashboard', <Dashboard key="d" state={state} mode="admin" access={{ kind: 'admin' }} />],
    ['uploads', 'Meta data', <UploadsPanel key="u" />],
    ['bookings', 'Bookings', <BookingsPanel key="b" />],
    ['social', 'Social', <OrganicPanel key="o" />],
    ['content', 'Ads & notes', <ContentPanel key="c" />],
    ['feedback', 'Feedback', <FeedbackPanel key="f" />],
    ['files', 'Files for PMT', <ResourcesPanel key="r" />],
    ['settings', 'Settings', <SettingsPanel key="s" />],
    ['share', 'Share', <SharePanel key="sh" />],
  ];

  return (
    <Ctx.Provider value={{ state, save, reload, setState, toast, vision }}>
      <div className="no-print sticky top-0 z-40 border-b border-white/10 bg-[#0b1420] text-white">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 sm:px-6">
          <span className="hidden whitespace-nowrap py-3 text-xs font-semibold uppercase tracking-widest text-gold sm:block">Admin</span>
          <nav className="flex flex-1 gap-1 overflow-x-auto py-2" aria-label="Admin">
            {tabs.map(([path, label]) => (
              <NavLink
                key={path}
                to={`/admin/${path}`}
                end={path === ''}
                className={({ isActive }) =>
                  cx('focus-ring whitespace-nowrap rounded-md px-3 py-1.5 text-[13px] font-semibold', isActive ? 'bg-white text-[#0b1420]' : 'text-white/80 hover:bg-white/10')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setAdminToken(null);
              setAuthed(false);
            }}
            className="focus-ring rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Log out"
            title="Log out"
          >
            <Icon name="logout" />
          </button>
        </div>
      </div>
      <Routes>
        {tabs.map(([path, , node]) => (
          <Route key={path} path={path === '' ? '/' : `${path}/*`} element={path === '' ? node : <AdminPage>{node}</AdminPage>} />
        ))}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
      <div className="no-print pointer-events-none fixed bottom-4 left-1/2 z-[120] flex w-[min(92vw,420px)] -translate-x-1/2 flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cx('pointer-events-auto rounded-lg px-4 py-2.5 text-sm font-semibold shadow-xl', t.tone === 'error' ? 'bg-bad text-white' : 'bg-ink text-page')}
          >
            {t.msg}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  );
}

function AdminPage({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">{children}</main>;
}

export function PanelTitle({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div>
      <h1 className="font-display text-4xl tracking-wide">{title}</h1>
      {children && <div className="mt-1 max-w-3xl text-sm text-ink2">{children}</div>}
    </div>
  );
}

function Login({ onDone }: { onDone: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await api.login(pw);
      onDone();
    } catch (x) {
      setErr(x instanceof Error ? x.message : 'Try again.');
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy p-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl bg-surface p-6 shadow-2xl">
        <img src="/brand/zdub-logo.webp" alt="ZDub Media" className="mx-auto h-14 rounded-lg bg-[#0b1420] p-2" />
        <h1 className="mt-4 text-center text-lg font-semibold">PMT dashboard admin</h1>
        <label className="mt-4 block text-sm font-semibold text-ink2" htmlFor="admin-pw">
          Admin password
        </label>
        <input id="admin-pw" type="password" autoFocus autoComplete="current-password" className={`${inputClass} mt-1`} value={pw} onChange={(e) => setPw(e.target.value)} />
        {err && <p className="mt-2 text-sm text-badink">{err}</p>}
        <Button type="submit" variant="primary" className="mt-4 w-full" disabled={busy || !pw}>
          {busy ? 'Logging in…' : 'Log in'}
        </Button>
      </form>
    </div>
  );
}
