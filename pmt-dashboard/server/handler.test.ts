import { describe, expect, it } from 'vitest';
import { handle } from './handler';
import { memoryStore } from './store';

function setup(env: Record<string, string> = { ADMIN_PASSWORD: 'ride-safe-2026' }) {
  const deps = { store: memoryStore(), env: (k: string) => env[k] };
  const call = (path: string, init: RequestInit & { token?: string } = {}) => {
    const headers = new Headers(init.headers);
    if (init.token) headers.set('authorization', `Bearer ${init.token}`);
    return handle(new Request(`http://local${path}`, { ...init, headers }), deps);
  };
  const login = async () => {
    const r = await call('/api/login', { method: 'POST', body: JSON.stringify({ password: 'ride-safe-2026' }) });
    return ((await r.json()) as { token: string }).token;
  };
  return { call, login };
}

describe('API', () => {
  it('rejects a wrong admin password', async () => {
    const { call } = setup();
    const r = await call('/api/login', { method: 'POST', body: JSON.stringify({ password: 'nope' }) });
    expect(r.status).toBe(401);
  });

  it('refuses admin routes without a login', async () => {
    const { call } = setup();
    expect((await call('/api/state')).status).toBe(401);
  });

  it('seeds the data on first load and shows it to the admin', async () => {
    const { call, login } = setup();
    const token = await login();
    const r = await call('/api/state', { token });
    expect(r.status).toBe(200);
    const s = await r.json();
    expect(s.uploads.length).toBe(7);
    expect(s.share.token).toMatch(/^[\w-]{20,}$/);
    expect(s.share.passwordHash).toBeNull();
  });

  it('serves the client report only with the right link, without admin fields', async () => {
    const { call, login } = setup();
    const token = await login();
    const admin = await (await call('/api/state', { token })).json();
    expect((await call('/api/report?t=wrong')).status).toBe(404);
    const r = await call(`/api/report?t=${admin.share.token}`);
    expect(r.status).toBe(200);
    const c = await r.json();
    expect(c.share).toBeUndefined();
    expect(c.classes.length).toBe(22);
  });

  it('protects the report with an optional password', async () => {
    const { call, login } = setup();
    const token = await login();
    const share = await (
      await call('/api/share', { method: 'POST', token, body: JSON.stringify({ password: 'pmt123' }) })
    ).json();
    expect(share.hasClientPassword).toBe(true);
    const locked = await call(`/api/report?t=${share.token}`);
    expect(locked.status).toBe(401);
    expect((await locked.json()).needsPassword).toBe(true);
    const bad = await call('/api/report/unlock', { method: 'POST', body: JSON.stringify({ t: share.token, password: 'x' }) });
    expect(bad.status).toBe(401);
    const { k } = await (
      await call('/api/report/unlock', { method: 'POST', body: JSON.stringify({ t: share.token, password: 'pmt123' }) })
    ).json();
    expect((await call(`/api/report?t=${share.token}&k=${k}`)).status).toBe(200);
  });

  it('a new link stops the old one working', async () => {
    const { call, login } = setup();
    const token = await login();
    const old = (await (await call('/api/state', { token })).json()).share.token;
    await call('/api/share', { method: 'POST', token, body: JSON.stringify({ regenerate: true }) });
    expect((await call(`/api/report?t=${old}`)).status).toBe(404);
  });

  it('saves changes and rejects a stale save instead of overwriting', async () => {
    const { call, login } = setup();
    const token = await login();
    const s = await (await call('/api/state', { token })).json();
    s.insightsHtml = '<p>Week 3</p>';
    const ok = await call('/api/state', { method: 'PUT', token, body: JSON.stringify({ state: s, baseVersion: s.version }) });
    expect(ok.status).toBe(200);
    const stale = await call('/api/state', { method: 'PUT', token, body: JSON.stringify({ state: s, baseVersion: s.version }) });
    expect(stale.status).toBe(409);
    const after = await (await call('/api/state', { token })).json();
    expect(after.insightsHtml).toBe('<p>Week 3</p>');
    expect(after.share.token).toBe(s.share.token); // a save can't change the share settings
  });

  it('stores screenshots and shows them to the client link only', async () => {
    const { call, login } = setup();
    const token = await login();
    const png = new Uint8Array([137, 80, 78, 71]);
    const up = await call('/api/files', { method: 'POST', token, headers: { 'content-type': 'image/png' }, body: png });
    const { key } = await up.json();
    const id = key.replace('files/', '');
    const share = (await (await call('/api/state', { token })).json()).share.token;
    expect((await call(`/api/files/${id}`)).status).toBe(404);
    const got = await call(`/api/files/${id}?t=${share}`);
    expect(got.status).toBe(200);
    expect(got.headers.get('content-type')).toBe('image/png');
  });

  it('turns screenshot reading off without an API key', async () => {
    const { call, login } = setup();
    const token = await login();
    expect((await (await call('/api/health')).json()).vision).toBe(false);
    const r = await call('/api/vision', { method: 'POST', token, body: JSON.stringify({ imageKey: 'files/x' }) });
    expect(r.status).toBe(501);
  });

  it('saves a weekly snapshot the client can open', async () => {
    const { call, login } = setup();
    const token = await login();
    const { meta } = await (
      await call('/api/archive', { method: 'POST', token, body: JSON.stringify({ label: 'Week of Oct 19', range: { start: '2026-10-17', end: '2026-10-23' } }) })
    ).json();
    const share = (await (await call('/api/state', { token })).json()).share.token;
    const r = await call(`/api/archive/${meta.id}?t=${share}`);
    expect(r.status).toBe(200);
    expect((await r.json()).share).toBeUndefined();
  });
});
