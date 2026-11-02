import { describe, expect, it } from 'vitest';
import { handle } from './handler';
import { buildSeedState } from '../src/lib/seed';
import { memoryStore } from './store';

function setup(env: Record<string, string> = { ADMIN_PASSWORD: 'ride-safe-2026' }) {
  const store = memoryStore();
  const deps = { store, env: (k: string) => env[k] };
  const call = (path: string, init: RequestInit & { token?: string } = {}) => {
    const headers = new Headers(init.headers);
    if (init.token) headers.set('authorization', `Bearer ${init.token}`);
    return handle(new Request(`http://local${path}`, { ...init, headers }), deps);
  };
  const login = async () => {
    const r = await call('/api/login', { method: 'POST', body: JSON.stringify({ password: 'ride-safe-2026' }) });
    return ((await r.json()) as { token: string }).token;
  };
  return { call, login, store };
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

  it('runs a feedback batch: create, fill, PMT answers, resubmits', async () => {
    const { call, login } = setup();
    const token = await login();
    const round = await (await call('/api/reviews', { method: 'POST', token, body: JSON.stringify({ kind: 'posts', title: 'Nov posts' }) })).json();
    const items = [
      { id: 'a', title: 'Fri post', headline: '', text: 'Caption A', media: [], note: '' },
      { id: 'b', title: 'Sat post', headline: '', text: 'Caption B', media: [], note: '' },
    ];
    await call(`/api/reviews/${round.id}`, { method: 'PUT', token, body: JSON.stringify({ title: 'Nov posts', intro: 'Hi', items }) });
    expect((await call(`/api/review/wrong`)).status).toBe(404);
    const pub = await (await call(`/api/review/${round.token}`)).json();
    expect(pub.items).toHaveLength(2);
    expect(pub.responses).toBeUndefined();
    const sent = await call(`/api/review/${round.token}`, {
      method: 'POST',
      body: JSON.stringify({ name: 'Owner', overall: 'Looks great', answers: { a: { decision: 'yes' }, b: { decision: 'changes', comment: 'Use the Eureka photo' }, zzz: { decision: 'yes' } } }),
    });
    expect(sent.status).toBe(200);
    await call(`/api/review/${round.token}`, { method: 'POST', body: JSON.stringify({ answers: { a: { decision: 'no' } } }) });
    const full = await (await call(`/api/reviews/${round.id}`, { token })).json();
    expect(full.responses).toHaveLength(2);
    expect(full.responses[0].answers).toEqual({ a: { decision: 'yes' }, b: { decision: 'changes', comment: 'Use the Eureka photo' } });
    expect((await (await call(`/api/review/${round.token}`)).json()).lastResponse.answers.a.decision).toBe('no');
    const list = await (await call('/api/reviews', { token })).json();
    expect(list[0]).toMatchObject({ id: round.id, responseCount: 2, itemCount: 2 });
    // A new link stops the old one.
    await call(`/api/reviews/${round.id}/link`, { method: 'POST', token });
    expect((await call(`/api/review/${round.token}`)).status).toBe(404);
  });

  it('uploads a video in pieces and streams it back by range', async () => {
    const { call, login } = setup();
    const token = await login();
    const size = 4_000_000 + 1234;
    const bytes = new Uint8Array(size).map((_, i) => i % 251);
    const start = await (await call('/api/uploads', { method: 'POST', token, body: JSON.stringify({ contentType: 'video/mp4', size }) })).json();
    expect(start.parts).toBe(2);
    for (let n = 0; n < start.parts; n++) {
      const r = await call(`/api/uploads/${start.id}/${n}`, { method: 'PUT', token, body: bytes.slice(n * start.chunkSize, (n + 1) * start.chunkSize) });
      expect(r.status).toBe(200);
    }
    const { key } = await (await call(`/api/uploads/${start.id}/done`, { method: 'POST', token })).json();
    const fileId = key.replace('files/', '');
    // Only admins, or PMT's feedback link when the video is part of that batch.
    expect((await call(`/api/files/${fileId}`)).status).toBe(404);
    const round = await (await call('/api/reviews', { method: 'POST', token, body: JSON.stringify({ kind: 'ads', title: 'x' }) })).json();
    await call(`/api/reviews/${round.id}`, {
      method: 'PUT',
      token,
      body: JSON.stringify({ title: 'x', intro: '', items: [{ id: 'v', title: 'V', headline: '', text: '', note: '', media: [{ key, type: 'video' }] }] }),
    });
    const r = await call(`/api/files/${fileId}?r=${round.token}`, { headers: { range: 'bytes=3999990-4000010' } });
    expect(r.status).toBe(206);
    expect(r.headers.get('content-range')).toBe(`bytes 3999990-3999999/${size}`);
    expect([...new Uint8Array(await r.arrayBuffer())]).toEqual([...bytes.slice(3999990, 4000000)]);
    const tail = await call(`/api/files/${fileId}?r=${round.token}`, { headers: { range: 'bytes=4000000-' } });
    expect(tail.headers.get('content-range')).toBe(`bytes 4000000-${size - 1}/${size}`);
    expect((await tail.arrayBuffer()).byteLength).toBe(1234);
  });

  it('brings older saved data up to date: 14% margin, a careful 10% from the ads, no files yet', async () => {
    const { call, login, store } = setup();
    const old = buildSeedState('tok') as unknown as Record<string, unknown> & { settings: Record<string, unknown> };
    delete old.settings.profitMargin;
    old.settings.adCreditShare = 1;
    delete old.resources;
    delete (old.settings.sections as Record<string, boolean>).resources;
    await store.setJSON('state', old);
    const s = await (await call('/api/state', { token: await login() })).json();
    expect(s.settings.profitMargin).toBe(0.14);
    expect(s.settings.adCreditShare).toBe(0.1);
    expect(s.settings.sections.resources).toBe(true);
    expect(s.resources).toEqual([]);
  });

  it('shares a PDF with the client only once it is listed as a file for them', async () => {
    const { call, login } = setup();
    const token = await login();
    const size = 4_000_000 + 10;
    const bytes = new Uint8Array(size).map((_, i) => (i * 7) % 256);
    const start = await (await call('/api/uploads', { method: 'POST', token, body: JSON.stringify({ contentType: 'application/pdf', size }) })).json();
    for (let n = 0; n < start.parts; n++) {
      await call(`/api/uploads/${start.id}/${n}`, { method: 'PUT', token, body: bytes.slice(n * start.chunkSize, (n + 1) * start.chunkSize) });
    }
    const { key } = await (await call(`/api/uploads/${start.id}/done`, { method: 'POST', token })).json();
    const id = key.replace('files/', '');
    const s = await (await call('/api/state', { token })).json();
    expect((await call(`/api/files/${id}?t=${s.share.token}`)).status).toBe(404);

    s.resources = [{ id: 'r1', title: 'Social ideas', description: '', key, fileName: 'Social ideas guide.pdf', contentType: 'application/pdf', size, addedAt: s.updatedAt }];
    await call('/api/state', { method: 'PUT', token, body: JSON.stringify({ state: s, baseVersion: s.version }) });
    const whole = await call(`/api/files/${id}?t=${s.share.token}`);
    expect(whole.status).toBe(200);
    expect(whole.headers.get('content-type')).toBe('application/pdf');
    expect(whole.headers.get('content-disposition')).toBe("inline; filename*=UTF-8''Social%20ideas%20guide.pdf");
    expect(Buffer.from(await whole.arrayBuffer()).equals(Buffer.from(bytes))).toBe(true);
    const dl = await call(`/api/files/${id}?t=${s.share.token}&dl=1`);
    expect(dl.headers.get('content-disposition')).toMatch(/^attachment;/);
  });

  it('refuses file types and sizes it cannot keep', async () => {
    const { call, login } = setup();
    const token = await login();
    const start = (contentType: string, size: number) => call('/api/uploads', { method: 'POST', token, body: JSON.stringify({ contentType, size }) });
    expect((await start('text/html', 100)).status).toBe(415);
    expect((await start('application/pdf', 21 * 1024 * 1024)).status).toBe(413);
    expect((await start('video/mp4', 21 * 1024 * 1024)).status).toBe(200);
  });
});
