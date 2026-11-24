/* ZDub Learning Hub — app logic.
   Content lives in data/*.js (HUB.tab / HUB.reference / HUB.review). This file only renders + stores progress.
   Progress: localStorage always; on the published Claude page it also syncs to the artifact db (per-viewer, private). */
(function () {
  'use strict';
  const HUB = window.HUB;
  const TABS = HUB.tabs.filter(t => (t.lessons || []).length); // topics with no lessons yet stay hidden
  const TAB = Object.fromEntries(TABS.map(t => [t.id, t]));
  const TOPICS = TABS.filter(t => t.kind !== 'book');
  const BOOKS = TABS.filter(t => t.kind === 'book');
  const bookAuthor = (t, l) => { const w = (l.source && l.source[0] && l.source[0].who) || ''; return w && !/^(book|workbook)$/i.test(w) ? w : t.title; };
  const LESSON = {}; // id -> {lesson, tab, index}
  TABS.forEach(t => (t.lessons || []).forEach((l, i) => { LESSON[l.id] = { l, t, i }; }));
  const DEFAULT_PINS = ['copywriting', 'meta-ads', 'sales', 'getting-clients'].filter(id => TAB[id]);
  const LS_KEY = 'zdub-learning-hub-v1';
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');

  /* ---------------- icons ---------------- */
  const P = {
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    brain: '<path d="M9 4.5a3 3 0 0 0-3 3v.2A3 3 0 0 0 4.5 13 3 3 0 0 0 7 17.8 2.8 2.8 0 0 0 12 19V5.6A2.6 2.6 0 0 0 9 4.5Z"/><path d="M15 4.5a3 3 0 0 1 3 3v.2a3 3 0 0 1 1.5 5.3 3 3 0 0 1-2.5 4.8A2.8 2.8 0 0 1 12 19"/>',
    pen: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    tag: '<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13.5" r="3.5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    funnel: '<path d="M3 4h18l-7 8v7l-4 2v-9z"/>',
    handshake: '<path d="m3 11 4-4 4 2 3-2 7 5"/><path d="m7 7-4 4 6 6 2-1 2 2 2-1 2 1 3-4"/><path d="m11 13 2 2M13 11l3 3"/>',
    rocket: '<path d="M12 15c4-3 7-7 7-12-5 0-9 3-12 7l-3 1 2 2"/><path d="m9 13 2 2"/><path d="M7 17c-1.5 0-3 1.5-3 3 1.5 0 3-1.5 3-3Z"/><circle cx="14.5" cy="9.5" r="1.6"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    flame: '<path d="M12 21c-3.9 0-6.5-2.6-6.5-6.2C5.5 10 10 8 10 3c3 2 4 4.5 4 7 1-1 1.5-2 1.5-3.5C17 8 18.5 10.5 18.5 14.8 18.5 18.4 15.9 21 12 21Z"/>',
    book: '<path d="M4 4.5h6a2 2 0 0 1 2 2V20a1.5 1.5 0 0 0-1.5-1.5H4z"/><path d="M20 4.5h-6a2 2 0 0 0-2 2V20a1.5 1.5 0 0 1 1.5-1.5H20z"/>',
    home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/>',
    bank: '<path d="M4 9h16M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18M12 3l9 5H3z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    left: '<path d="m14 6-6 6 6 6"/>', right: '<path d="m10 6 6 6-6 6"/>',
    pin: '<path d="M9 4h6l-1 6 3 3H7l3-3z"/><path d="M12 13v7"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    wand: '<path d="m4 20 11-11M14 4v2M18 8h2M17 5l1-1M19 11l1 1M12 7l1-1"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
    play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor"/>',
    pause: '<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/>',
    back: '<path d="M11 6 5 12l6 6M19 6l-6 6 6 6"/>',
    fwd: '<path d="m13 6 6 6-6 6M5 6l6 6-6 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'
  };
  const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.book}</svg>`;

  /* ---------------- text helpers ---------------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>');
  function md(src) {
    if (!src) return '';
    const lines = String(src).replace(/\r/g, '').split('\n');
    let out = '', list = null, para = [], quote = [];
    const flushP = () => { if (para.length) { out += `<p>${para.map(inline).join('<br>')}</p>`; para = []; } };
    const flushL = () => { if (list) { out += `<${list.t}>${list.items.map(i => `<li>${inline(i)}</li>`).join('')}</${list.t}>`; list = null; } };
    const flushQ = () => { if (quote.length) { out += `<blockquote>${quote.map(inline).join('<br>')}</blockquote>`; quote = []; } };
    const flush = () => { flushP(); flushL(); flushQ(); };
    for (const raw of lines) {
      const line = raw.trimEnd();
      let m;
      if (!line.trim()) { flush(); continue; }
      if ((m = line.match(/^\s*[-•]\s+(.*)/))) { flushP(); flushQ(); if (!list || list.t !== 'ul') { flushL(); list = { t: 'ul', items: [] }; } list.items.push(m[1]); continue; }
      if ((m = line.match(/^\s*\d+[.)]\s+(.*)/))) { flushP(); flushQ(); if (!list || list.t !== 'ol') { flushL(); list = { t: 'ol', items: [] }; } list.items.push(m[1]); continue; }
      if ((m = line.match(/^>\s?(.*)/))) { flushP(); flushL(); quote.push(m[1]); continue; }
      if ((m = line.match(/^#{2,4}\s+(.*)/))) { flush(); out += `<h4>${inline(m[1])}</h4>`; continue; }
      if (list && /^\s{2,}\S/.test(raw)) { list.items[list.items.length - 1] += ' ' + line.trim(); continue; }
      flushL(); flushQ(); para.push(line);
    }
    flush();
    return out;
  }
  const plain = s => String(s || '').replace(/\*\*|\*|^>\s?/gm, '');
  const todayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const fmtDate = iso => { if (!iso) return ''; const d = new Date(iso); return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: d.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined }); };
  const tagClass = t => t === 'Platform fact (re-check)' ? 'recheck' : t.startsWith('Alternate') ? 'Jason' : t.replace(/\W/g, '');

  /* ---------------- state + storage ---------------- */
  // Docs: settings | l_<lessonId> | t_<tab>__<tracker> | w_<workshopId>. Each carries updatedAt for merge.
  const S = { docs: {} };
  const blankSettings = () => ({ pinned: DEFAULT_PINS.slice(), days: {}, updatedAt: 0 });
  function loadLocal() {
    try { const raw = localStorage.getItem(LS_KEY); if (raw) S.docs = JSON.parse(raw).docs || {}; } catch (e) { /* storage unavailable */ }
    if (!S.docs.settings) S.docs.settings = blankSettings();
  }
  function saveLocal() { try { localStorage.setItem(LS_KEY, JSON.stringify({ docs: S.docs })); } catch (e) { /* ignore */ } }
  const settings = () => S.docs.settings;
  const L = id => S.docs['l_' + id] || (S.docs['l_' + id] = { answers: {}, rubric: {}, checks: {}, feedback: {}, updatedAt: 0 });
  const peekL = id => S.docs['l_' + id];

  const sync = { db: null, uid: null, state: 'local', timers: {} };
  function touch(key) {
    const d = S.docs[key]; if (d) d.updatedAt = Date.now();
    saveLocal();
    if (key.startsWith('l_')) bumpDay();
    if (sync.db && sync.uid) {
      clearTimeout(sync.timers[key]);
      sync.timers[key] = setTimeout(() => pushDoc(key), 1200);
    }
  }
  function bumpDay() {
    const s = settings(); const k = todayKey();
    if (!s.days[k]) { s.days[k] = 1; s.updatedAt = Date.now(); saveLocal(); if (sync.db && sync.uid) { clearTimeout(sync.timers.settings); sync.timers.settings = setTimeout(() => pushDoc('settings'), 1500); } renderTopStats(); }
  }
  async function pushDoc(key) {
    try { await sync.db.collection('data/users/' + sync.uid).doc(key).set(JSON.parse(JSON.stringify(S.docs[key]))); setSync('synced'); }
    catch (e) { setSync(e && e.code === 'quota_exceeded' ? 'full' : 'error'); }
  }
  function setSync(st) { sync.state = st; const el = $('#syncchip'); if (el) renderSyncChip(el); }
  function renderSyncChip(el) {
    const m = { local: ['Saved on this device', ''], loading: ['Syncing…', ''], synced: ['Synced', 'sync-ok'], error: ['Sync paused · saved on device', ''], full: ['Sync storage full', ''] }[sync.state] || ['', ''];
    el.textContent = m[0]; el.className = 'chip ' + m[1];
  }
  async function startSync() {
    if (!window.claude || typeof window.claude.use !== 'function') return;
    try {
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      if (!db || !user) return;
      const uid = await user.id(); if (!uid) return;
      sync.db = db; sync.uid = uid; setSync('loading');
      const timer = setTimeout(() => { if (sync.state === 'loading') setSync('error'); }, 10000);
      const snap = await db.collection('data/users/' + uid).get();
      clearTimeout(timer);
      let changedLocal = false; const remoteKeys = new Set();
      snap.docs.forEach(d => {
        remoteKeys.add(d.id); const r = d.data(); if (!r) return;
        const mine = S.docs[d.id];
        if (!mine || (r.updatedAt || 0) > (mine.updatedAt || 0)) {
          if (d.id === 'settings' && mine) r.days = Object.assign({}, mine.days, r.days);
          S.docs[d.id] = JSON.parse(JSON.stringify(r)); changedLocal = true;
        }
      });
      // push anything newer locally (or never synced)
      for (const k of Object.keys(S.docs)) {
        const r = snap.docs.find(d => d.id === k);
        const rd = r && r.data();
        if (!rd || (S.docs[k].updatedAt || 0) > (rd.updatedAt || 0)) await pushDoc(k);
      }
      saveLocal(); setSync('synced');
      if (changedLocal) route();
    } catch (e) { setSync('error'); }
  }

  /* ---------------- derived ---------------- */
  const isDone = id => !!(peekL(id) && peekL(id).done);
  const doneCount = t => t.lessons.filter(l => isDone(l.id)).length;
  const nextLesson = t => t.lessons.find(l => !isDone(l.id)) || null;
  function streak() {
    const days = settings().days || {}; let n = 0; const d = new Date();
    if (!days[todayKey(d)]) d.setDate(d.getDate() - 1);
    while (days[todayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const totalDone = () => Object.keys(LESSON).filter(isDone).length;
  const totalLessons = Object.keys(LESSON).length;

  /* ---------------- toast ---------------- */
  let toastT;
  function toast(msg) {
    let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { el.hidden = true; }, 2600);
  }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) { return false; }
  }

  /* ---------------- sample (ask Claude) ---------------- */
  let samplePromise = null;
  function getSample() {
    if (!samplePromise) samplePromise = (window.claude && typeof window.claude.use === 'function') ? window.claude.use('sample').catch(() => null) : Promise.resolve(null);
    return samplePromise;
  }
  const COACH = 'You are a sharp, encouraging marketing coach for Zach Wallin, owner of ZDub Media, a local-business marketing agency in the Sacramento region (Meta ads, ad creative, landing pages, follow-up). His first client is Pacific Motorcycle Training (PMT), a motorcycle safety and licensing school. He is practicing a lesson in his learning hub.';
  const errCopy = c => ({ not_granted: 'Claude access was declined for this page. Use "Copy prompt" instead.', rate_limited: 'Too many requests right now. Wait a minute, then try again.', prompt_too_large: 'That is too much text to send at once. Shorten your answers and try again.', refused: 'Claude declined to answer this one. Try rewording.', session_expired: 'Your Claude session expired. Reload the page and try again.' }[c] || 'Feedback could not be fetched. Try again in a moment, or use "Copy prompt".');

  // Renders a feedback block into `box`. `build()` returns the prompt. `onDone(text)` saves.
  async function askClaude(box, prompt, onDone, label = 'Coach feedback') {
    const sample = await getSample();
    if (!sample) { showCopyFallback(box, prompt); return; }
    const ctl = new AbortController();
    box.hidden = false;
    box.innerHTML = `<div class="feedback"><div class="eyebrow">${esc(label)}</div><div class="prose" data-out>Thinking…</div><div class="row" style="margin-top:10px"><button class="btn small ghost" data-stop>Stop</button></div></div>`;
    const out = $('[data-out]', box); const stop = $('[data-stop]', box);
    stop.onclick = () => ctl.abort();
    try {
      const { text, truncated } = await sample(prompt, { signal: ctl.signal, cache: false, onText: ({ text }) => { out.innerHTML = md(text); } });
      out.innerHTML = md(text) + (truncated ? '<p class="muted">(Cut short. Ask about one answer at a time.)</p>' : '');
      stop.remove(); onDone && onDone(text);
    } catch (e) {
      stop.remove();
      if (e && e.code === 'cancelled') { out.innerHTML = md(e.text || '') + '<p class="muted">Stopped.</p>'; return; }
      if (e && e.text) { out.innerHTML = md(e.text) + `<p class="muted">${esc(errCopy(e.code))}</p>`; return; }
      out.innerHTML = `<p>${esc(errCopy(e && e.code))}</p>`;
      if (e && (e.code === 'not_granted' || e.code === 'sampling_disabled' || e.code === 'capability_disabled' || e.code === 'not_declared')) showCopyFallback(box, prompt, true);
    }
  }
  function showCopyFallback(box, prompt, append) {
    box.hidden = false;
    const html = `<div class="feedback copybox"><div class="eyebrow">Get feedback in Claude</div><p class="muted" style="margin:0 0 8px;font-size:14px">Live feedback works on the published Claude page. Here, copy this prompt and paste it into any Claude chat.</p><textarea readonly id="cp-${Math.random().toString(36).slice(2, 8)}">${esc(prompt)}</textarea><div class="row" style="margin-top:8px"><button class="btn small primary" data-copy>${icon('copy')} Copy prompt</button></div></div>`;
    if (append) box.insertAdjacentHTML('beforeend', html); else box.innerHTML = html;
    const ta = box.querySelector('.copybox:last-child textarea');
    box.querySelector('.copybox:last-child [data-copy]').onclick = async () => { if (await copyText(prompt)) toast('Prompt copied. Paste it into Claude.'); else { ta.focus(); ta.select(); toast('Select all and copy.'); } };
  }
  function practicePrompt(l, p, pi) {
    const st = L(l.id);
    const answers = p.fields.map((f, fi) => `### ${f}\n${(st.answers[`p${pi}_${fi}`] || '').trim() || '(left blank)'}`).join('\n\n');
    return `${COACH}\n\nLESSON: ${l.title}\n\nWHAT THE LESSON TEACHES:\n${plain(l.idea).slice(0, 3500)}\n\nKEY POINTS:\n${(l.keyPoints || []).map(k => '- ' + k).join('\n')}\n\nTHE EXERCISE: ${p.prompt}\n\nSELF-CHECK RUBRIC:\n${(p.rubric || []).map(r => '- ' + r).join('\n') || '(none)'}\n${p.model ? `\nA STRONG SAMPLE ANSWER (for your reference, don't just repeat it):\n${p.model}\n` : ''}\nZACH'S ANSWERS:\n${answers}\n\nGive feedback in under 260 words, plain text with short bullets:\n1. A score out of 10 for each answer against the lesson and rubric, one line each.\n2. What works (1–2 bullets).\n3. The single most important fix, specific and concrete.\n4. Rewrite his weakest answer into a stronger version he could use today.\nBe direct. If an answer is blank, say so and give a starter example instead.`;
  }

  /* ---------------- top bar ---------------- */
  function renderTop(active) {
    const pins = new Set(settings().pinned);
    const rail = [
      `<button data-go="home" ${active === 'home' ? 'aria-current="page"' : ''}>${icon('home')}Today</button>`,
      '<span class="sep"></span>',
      ...TOPICS.map(t => railBtn(t, active, pins)),
      BOOKS.length ? '<span class="sep"></span>' : '',
      ...BOOKS.map(t => railBtn(t, active, pins)),
      '<span class="sep"></span>',
      HUB.ref ? `<button data-go="reference" ${active === 'reference' ? 'aria-current="page"' : ''}>${icon('book')}Reference</button>` : '',
      `<button data-go="bank" ${active === 'bank' ? 'aria-current="page"' : ''}>${icon('bank')}My Bank</button>`
    ].join('');
    $('#top').innerHTML = `<div class="brandrow gutter"><a class="brand" href="#home" data-go="home">ZDub Learning Hub <small>one bite a day</small></a><span class="spacer"></span><span class="chip streak" id="streakchip"></span><span class="chip" id="syncchip"></span></div><nav class="rail gutter" aria-label="Topics">${rail}</nav>`;
    renderTopStats(); renderSyncChip($('#syncchip'));
    const cur = $('.rail [aria-current="page"]'); if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function renderTopStats() { const el = $('#streakchip'); if (el) { const n = streak(); el.textContent = `${n} day streak`; } }
  const railBtn = (t, active, pins) => `<button data-go="t-${t.id}" ${active === t.id ? 'aria-current="page"' : ''}>${icon(t.icon)}${esc(shortTitle(t))}${pins.has(t.id) ? '<span class="pin-dot" title="Pinned"></span>' : ''}</button>`;
  const shortTitle = t => t.short || t.title.replace(/ \(.*\)$/, '').replace(/ & .*$/, m => t.title.length > 24 ? '' : m);

  /* ---------------- HOME ---------------- */
  function reviewCard(offset = 0) {
    const cards = HUB.reviewCards || []; if (!cards.length) return null;
    const start = new Date(2026, 0, 1); const day = Math.floor((Date.now() - start) / 864e5);
    return cards[((day + offset) % cards.length + cards.length) % cards.length];
  }
  let reviewOffset = 0;
  function renderHome() {
    const s = settings(); const pins = s.pinned.filter(id => TAB[id]);
    const card = reviewCard(reviewOffset);
    const weekAgo = Date.now() - 7 * 864e5;
    const applied = Object.keys(LESSON).map(id => ({ id, st: peekL(id) })).filter(x => x.st && x.st.applied && x.st.applied.trim() && (x.st.appliedAt || x.st.updatedAt) > weekAgo).sort((a, b) => (b.st.appliedAt || 0) - (a.st.appliedAt || 0));
    const doneToday = Object.keys(LESSON).filter(id => { const st = peekL(id); return st && st.done && st.doneAt && todayKey(new Date(st.doneAt)) === todayKey(); }).length;
    const hour = new Date().getHours();
    app.innerHTML = `<div class="col">
      <div class="hero-today">
        <div class="eyebrow">${new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
        <h1>${hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'}, Zach. One bite at a time.</h1>
        <div class="stats">
          <div class="stat"><b>${doneToday}</b><span>done today</span></div>
          <div class="stat"><b>${streak()}</b><span>day streak</span></div>
          <div class="stat"><b>${totalDone()}<small class="muted" style="font-size:15px;font-weight:600">/${totalLessons}</small></b><span>lessons done</span></div>
        </div>
      </div>
      ${card ? `<div class="review"><div class="eyebrow">Daily review · ${esc(card.kind)}</div><h2>${esc(card.title)}</h2><p>${inline(card.text)}</p><div class="row" style="justify-content:space-between"><span class="src">${esc(card.source || '')}</span><button class="btn small" id="nextcard">Another one</button></div></div>` : ''}
      <div class="sec-h"><h2>Your pinned topics</h2><button class="btn small ghost" id="editpins">${icon('pin')} Choose topics</button></div>
      <div id="pinarea">${pins.length ? `<div class="pins">${pins.map(pinCard).join('')}</div>` : '<div class="empty">Pin 3 to 5 topics you are focused on right now. Each one shows its next lesson here.</div>'}</div>
      <div class="sec-h"><h2>What I applied this week</h2><span class="muted" style="font-size:14px">From the "What happened" box on each lesson</span></div>
      ${applied.length ? `<div class="applied">${applied.map(x => { const { l, t } = LESSON[x.id]; return `<div class="item"><div class="eyebrow">${esc(shortTitle(t))} · ${fmtDate(x.st.appliedAt || x.st.updatedAt)}</div><a href="#l-${esc(l.id)}" data-go="l-${esc(l.id)}" style="font-weight:650;text-decoration:none">${esc(l.title)}</a><p>${esc(x.st.applied)}</p></div>`; }).join('')}</div>` : '<div class="empty">Nothing logged yet this week. After you apply a lesson, write what happened in its yellow "Do it today" box and it shows up here.</div>'}
      <div class="sec-h"><h2>All topics</h2></div>
      <div class="alltabs">${TOPICS.map(tabTile).join('')}</div>
      ${BOOKS.length ? `<div class="sec-h"><h2>Book studies</h2><span class="muted" style="font-size:14px">One lesson per chapter. Read the pages, then work the lesson.</span></div><div class="alltabs">${BOOKS.map(tabTile).join('')}</div>` : ''}
    </div>`;
    function tabTile(t) { return `<button class="tabbtn ${s.pinned.includes(t.id) ? 'pinned' : ''}" data-go="t-${t.id}"><span class="ico">${icon(t.icon)}</span><span style="min-width:0"><span class="t">${esc(t.title)}</span><br><span class="s">${doneCount(t)}/${t.lessons.length} ${t.kind === 'book' ? 'chapters' : ''} done</span></span></button>`; }
    const nc = $('#nextcard'); if (nc) nc.onclick = () => { reviewOffset++; renderHome(); };
    $('#editpins').onclick = () => renderPinEditor();
  }
  function pinCard(id) {
    const t = TAB[id]; const nx = nextLesson(t); const d = doneCount(t); const n = t.lessons.length;
    return `<div class="pincard"><div class="head"><span class="ico">${icon(t.icon)}</span><h3>${esc(t.title)}</h3></div>
      <div class="bar"><i style="width:${n ? Math.round(d / n * 100) : 0}%"></i></div>
      <div class="meta"><span>${d}/${n} lessons</span><span>${nx ? (nx.minutes || 10) + ' min read' : 'complete'}</span></div>
      ${nx ? `<div class="eyebrow">Next up</div><div class="next">${esc(nx.title)}</div><div><button class="btn primary small" data-go="l-${esc(nx.id)}">Start lesson ${icon('right')}</button></div>` : `<div class="next">Every lesson in this topic is done. Review it in My Bank or pick a new topic.</div>`}
    </div>`;
  }
  function renderPinEditor() {
    const s = settings();
    $('#pinarea').innerHTML = `<div class="pinedit">${TABS.map(t => `<label><input type="checkbox" value="${t.id}" ${s.pinned.includes(t.id) ? 'checked' : ''}>${esc(t.title)}</label>`).join('')}</div><div class="row" style="margin-top:10px"><button class="btn primary small" id="savepins">Save topics</button><span class="muted" style="font-size:14px">3 to 5 works best. Change them whenever your focus changes.</span></div>`;
    $('#savepins').onclick = () => {
      s.pinned = [...document.querySelectorAll('.pinedit input:checked')].map(i => i.value);
      touch('settings'); renderTop('home'); renderHome(); toast('Topics saved');
    };
  }

  /* ---------------- TAB ---------------- */
  const view = { sub: {} }; // per tab: 'lessons' | tool id | tracker id
  function renderTab(t, lessonId) {
    const nx = nextLesson(t);
    const cur = lessonId ? LESSON[lessonId] : null;
    const l = cur ? cur.l : (nx || t.lessons[0]);
    const sub = lessonId ? 'lessons' : (view.sub[t.id] || 'lessons');
    const extras = [...(t.tools || []).map(x => ({ id: 'tool:' + x.id, title: x.title })), ...(t.trackers || []).map(x => ({ id: 'trk:' + x.id, title: x.title }))];
    const pinned = settings().pinned.includes(t.id);
    const d = doneCount(t);
    app.innerHTML = `
      <div class="tabhead col" style="max-width:${sub === 'lessons' ? '1080px' : '760px'}">
        <div class="eyebrow">${d} of ${t.lessons.length} lessons done</div>
        <div class="titlerow"><span class="ico">${icon(t.icon)}</span><h1>${esc(t.title)}</h1><button class="btn small ghost" id="pintoggle">${icon('pin')} ${pinned ? 'Pinned' : 'Pin to Today'}</button></div>
        <div class="tagline">${esc(t.tagline || '')}</div>
        ${extras.length ? `<div class="subnav"><button aria-pressed="${sub === 'lessons'}" data-sub="lessons">Lessons</button>${extras.map(x => `<button aria-pressed="${sub === x.id}" data-sub="${x.id}">${esc(x.title)}</button>`).join('')}</div>` : ''}
      </div>
      <div id="tabbody"></div>`;
    $('#pintoggle').onclick = () => { const s = settings(); s.pinned = pinned ? s.pinned.filter(x => x !== t.id) : [...s.pinned, t.id]; touch('settings'); renderTop(t.id); renderTab(t, lessonId); toast(pinned ? 'Unpinned' : 'Pinned to Today'); };
    app.querySelectorAll('[data-sub]').forEach(b => b.onclick = () => { view.sub[t.id] = b.dataset.sub; if (lessonId) { location.hash = 't-' + t.id; } else renderTab(t); });
    const body = $('#tabbody');
    if (sub.startsWith('tool:')) { const tl = t.tools.find(x => 'tool:' + x.id === sub); return tl.type === 'flashcards' ? renderFlashcards(body, t, tl) : tl.type === 'gallery' ? renderGallery(body, t, tl) : renderWorkshop(body, t, tl); }
    if (sub.startsWith('trk:')) return renderTracker(body, t, t.trackers.find(x => 'trk:' + x.id === sub));
    if (!l) { body.innerHTML = '<div class="col empty">Lessons for this topic are coming soon.</div>'; return; }
    body.innerHTML = `<div class="tabgrid"><aside class="toc-wrap">${tocHtml(t, l.id)}</aside><div style="min-width:0">${!lessonId && t.intro && d === 0 ? `<div class="prose small muted" style="margin-bottom:14px">${md(t.intro)}</div>` : ''}<article class="lesson" id="lesson"></article></div></div>`;
    const toc = $('details.toc'); if (window.matchMedia('(min-width: 1080px)').matches) toc.open = true;
    renderLesson($('#lesson'), t, l);
  }
  function tocHtml(t, curId) {
    const parts = t.parts || [];
    const groups = parts.map(p => ({ p, ls: t.lessons.filter(l => l.part === p.id) }));
    const orphans = t.lessons.filter(l => !parts.some(p => p.id === l.part));
    if (orphans.length) groups.push({ p: { title: 'More' }, ls: orphans });
    let n = 0;
    return `<details class="toc"><summary><span>Contents</span><span class="muted" style="font:12px var(--f-mono)">${doneCount(t)}/${t.lessons.length}</span></summary><ol>${groups.map(g => `<li><div class="part">${esc(g.p.title)}</div><ol>${g.ls.map(l => { n++; return `<li><a href="#l-${esc(l.id)}" data-go="l-${esc(l.id)}" ${l.id === curId ? 'aria-current="true"' : ''}><span class="tick ${isDone(l.id) ? 'on' : ''}"></span><span>${esc(l.title)}</span></a></li>`; }).join('')}</ol></li>`).join('')}</ol></details>`;
  }

  /* ---------------- LESSON ---------------- */
  function renderLesson(el, t, l) {
    const idx = t.lessons.indexOf(l); const st = L(l.id);
    const part = (t.parts || []).find(p => p.id === l.part);
    const prev = t.lessons[idx - 1], next = t.lessons[idx + 1];
    const ex = l.example || {};
    const td = l.today || {};
    el.innerHTML = `
      <section class="lhead" data-sec="intro">
        <div class="eyebrow">${part ? esc(part.title) + ' · ' : ''}${t.kind === 'book' && l.chapter != null ? (typeof l.chapter === 'number' ? 'Chapter ' + l.chapter : esc(l.chapter)) : 'Lesson ' + (idx + 1) + ' of ' + t.lessons.length} · ${l.minutes || 10} min${l.date ? ' · call ' + esc(fmtDate(l.date + 'T12:00')) : ''}</div>
        <h1>${esc(l.title)}</h1>
        ${(l.tags || []).length ? `<div class="tags">${l.tags.map(g => `<span class="tag ${tagClass(g)}">${esc(g === 'Platform fact (re-check)' ? 'Platform fact · re-check' : g)}</span>`).join('')}</div>` : ''}
        <div class="row"><button class="btn listen-btn" id="listenbtn" aria-label="Listen to this lesson">${icon('headphones')} Listen <span class="muted" style="font:12px var(--f-mono)">· ${Listen.minutes(t, l)} min</span></button>${Listen.isApple ? `<button class="btn ghost small" id="speakbtn" aria-label="Open a Speak Screen view to hear this lesson in your iPhone's Premium voice">${icon('book')} Premium voice (Speak Screen)</button>` : ''}</div>
        ${l.pages ? `<div class="readalong">${icon('book')}<div><b>Read along:</b> ${l.chapterTitle ? `${typeof l.chapter === 'number' ? 'Chapter ' + l.chapter + ', ' : ''}“${esc(l.chapterTitle)}”, ` : ''}${l.pdfPages ? `book page${/[–-]/.test(l.pages) ? 's' : ''} ${esc(l.pages)}, which is <b>PDF page${/[–-]/.test(l.pdfPages) ? 's' : ''} ${esc(l.pdfPages)}</b> in your copy of <i>${esc(t.title)}</i>` : `page${/[–-]/.test(l.pages) ? 's' : ''} ${esc(l.pages)} in your PDF of <i>${esc(t.title)}</i>`}. Read it first, then work through this lesson.</div></div>` : ''}
        <div class="source">${(l.source || []).map(s => `<span><b>${esc(s.doc)}</b>${s.section ? ' · ' + esc(s.section) : ''}${s.who ? ' · ' + esc(s.who) : ''}</span>`).join('')}${(l.alsoIn || []).length ? `<span>Also covered in: ${esc(l.alsoIn.join('; '))}</span>` : ''}</div>
      </section>
      <section data-sec="idea">
        <div class="h-label">The idea</div>
        ${(l.quotes || []).length ? `<div class="quotes">${l.quotes.map(q => `<figure class="pull"><blockquote>${esc(q.text)}</blockquote><figcaption>${esc(bookAuthor(t, l))}${q.page ? ', p. ' + esc(q.page) : ''}</figcaption></figure>`).join('')}</div>` : ''}
        <div class="prose">${md(l.idea)}</div>
        ${(l.keyPoints || []).length ? `<div class="keypoints"><div class="eyebrow">Key points</div><ul>${l.keyPoints.map(k => `<li>${inline(k)}</li>`).join('')}</ul></div>` : ''}
        ${l.table ? tableHtml(l.table) : ''}
      </section>
      ${l.why ? `<section data-sec="why"><div class="h-label">Why it matters for ZDub</div><p class="why">${inline(l.why)}</p></section>` : ''}
      ${(ex.body || ex.after) ? `<section data-sec="example"><div class="h-label">Example${ex.title ? '' : ''}</div>${ex.title ? `<h3 style="font-size:19px;font-weight:700;margin-bottom:10px">${esc(ex.title)}</h3>` : ''}
        ${(ex.before || ex.after) ? `<div class="ex-grid">${ex.before ? `<div class="ex before"><div class="eyebrow">Before</div><div class="prose">${md(ex.before)}</div></div>` : ''}${ex.after ? `<div class="ex after"><div class="eyebrow">After</div><div class="prose">${md(ex.after)}</div></div>` : ''}</div>` : ''}
        ${ex.body ? `<div class="prose small">${md(ex.body)}</div>` : ''}</section>` : ''}
      ${(l.examples || []).length ? `<section data-sec="examples"><div class="h-label">Examples from the book · ${l.examples.length}</div><div class="ex-list">${l.examples.map(x => exampleCard(t, x)).join('')}</div></section>` : ''}
      <section class="workbook" data-sec="workbook"><div class="h-label">Your turn · workbook</div>${(l.practice || []).map((p, pi) => practiceHtml(l, p, pi)).join('')}</section>
      <section class="today" data-sec="today"><div class="h-label">Do it today${td.suggested ? ' · suggested' : ''}</div>
        <div class="prose">${md(td.task)}</div>
        <div class="meta">${td.output ? `<span>Output: ${esc(td.output)}</span>` : ''}${td.minutes ? `<span>${esc(td.minutes)} min</span>` : ''}</div>
        <div class="field" style="margin-top:14px"><label for="ap-${l.id}">What happened when I applied it</label><textarea id="ap-${l.id}" data-k="applied" placeholder="What did you make or try? What happened? What will you change?">${esc(st.applied || '')}</textarea></div>
      </section>
      ${(l.check || []).length ? `<section data-sec="check"><div class="h-label">Quick check</div><div class="check">${l.check.map((c, ci) => `<div class="q"><div class="qt">${ci + 1}. ${inline(c.q)}</div><input type="text" id="qc-${l.id}-${ci}" data-k="c${ci}" placeholder="Answer from memory first…" value="${esc(st.checks['c' + ci] || '')}"><details><summary>Show answer</summary><p>${inline(c.a)}</p></details></div>`).join('')}</div></section>` : ''}
      <section><div class="h-label">My notes</div><textarea id="nt-${l.id}" data-k="notes" placeholder="Anything worth remembering, questions for a mentor, ideas for a client…">${esc(st.notes || '')}</textarea></section>
      <section class="lfoot">
        <div class="row">${prev ? `<button class="btn small" data-go="l-${esc(prev.id)}">${icon('left')} Previous</button>` : ''}${next ? `<button class="btn small" data-go="l-${esc(next.id)}">Next ${icon('right')}</button>` : ''}</div>
        <div class="row">${st.done ? `<span class="done-state">Done ${esc(fmtDate(st.doneAt))}</span><button class="btn small ghost" id="undone">Mark not done</button>` : `<button class="btn good" id="markdone">${icon('check')} Mark lesson done</button>`}</div>
      </section>`;
    el.dataset.lid = l.id;
    $('#listenbtn', el).onclick = () => Listen.start(t, l);
    const sb = $('#speakbtn', el); if (sb) sb.onclick = () => Listen.reader(t, l);
    Listen.sync();
    el.querySelectorAll('.exc').forEach(card => bindExample(card, t));
    // bind inputs
    el.querySelectorAll('textarea, input[type="text"]').forEach(inp => {
      autosize(inp);
      let tmr;
      inp.addEventListener('input', () => {
        autosize(inp); clearTimeout(tmr);
        tmr = setTimeout(() => {
          const k = inp.dataset.k, s2 = L(l.id);
          if (k === 'applied') { s2.applied = inp.value; s2.appliedAt = Date.now(); }
          else if (k === 'notes') s2.notes = inp.value;
          else if (k.startsWith('c')) s2.checks[k] = inp.value;
          else s2.answers[k] = inp.value;
          touch('l_' + l.id);
        }, 500);
      });
    });
    el.querySelectorAll('.rubric input').forEach(cb => cb.onchange = () => { L(l.id).rubric[cb.dataset.k] = cb.checked; touch('l_' + l.id); });
    el.querySelectorAll('[data-fb]').forEach(b => b.onclick = () => {
      const pi = +b.dataset.fb; const box = $(`#fb-${l.id}-${pi}`);
      flushInputs(el, l);
      askClaude(box, practicePrompt(l, l.practice[pi], pi), text => { L(l.id).feedback['p' + pi] = text; touch('l_' + l.id); });
    });
    el.querySelectorAll('[data-cp]').forEach(b => b.onclick = async () => { flushInputs(el, l); const pi = +b.dataset.cp; const pr = practicePrompt(l, l.practice[pi], pi); if (await copyText(pr)) toast('Prompt copied. Paste it into Claude.'); else showCopyFallback($(`#fb-${l.id}-${pi}`), pr); });
    const md1 = $('#markdone', el); if (md1) md1.onclick = () => {
      flushInputs(el, l); const s2 = L(l.id); s2.done = true; s2.doneAt = Date.now(); touch('l_' + l.id);
      toast(next ? 'Lesson done. Nice work.' : 'Topic complete!');
      renderTop(t.id);
      location.hash = next && !isDone(next.id) ? 'l-' + next.id : 't-' + t.id;
      if (!next) renderTab(t, l.id);
    };
    const ud = $('#undone', el); if (ud) ud.onclick = () => { const s2 = L(l.id); s2.done = false; s2.doneAt = null; touch('l_' + l.id); renderTab(t, l.id); };
  }
  function flushInputs(el, l) {
    const s2 = L(l.id);
    el.querySelectorAll('textarea[data-k], input[data-k]').forEach(inp => {
      const k = inp.dataset.k;
      if (k === 'applied') { if ((s2.applied || '') !== inp.value) { s2.applied = inp.value; s2.appliedAt = Date.now(); } }
      else if (k === 'notes') s2.notes = inp.value; else if (k.startsWith('c')) s2.checks[k] = inp.value; else s2.answers[k] = inp.value;
    });
    touch('l_' + l.id);
  }
  function practiceHtml(l, p, pi) {
    const st = L(l.id);
    return `<div class="task">
      <div class="prompt">${inline(p.prompt)}</div>
      ${p.fields.map((f, fi) => `<div class="field"><label for="pf-${l.id}-${pi}-${fi}">${esc(f)}</label><textarea id="pf-${l.id}-${pi}-${fi}" data-k="p${pi}_${fi}">${esc(st.answers[`p${pi}_${fi}`] || '')}</textarea></div>`).join('')}
      ${(p.rubric || []).length ? `<div class="rubric"><div class="eyebrow">Self-check</div>${p.rubric.map((r, ri) => `<label><input type="checkbox" id="rb-${l.id}-${pi}-${ri}" data-k="p${pi}_r${ri}" ${st.rubric[`p${pi}_r${ri}`] ? 'checked' : ''}>${inline(r)}</label>`).join('')}</div>` : ''}
      ${p.model ? `<details class="reveal"><summary>Show a strong example answer</summary><div class="prose small">${md(p.model)}</div></details>` : ''}
      <div class="row"><button class="btn primary small" data-fb="${pi}">${icon('wand')} Get feedback</button><button class="btn small ghost" data-cp="${pi}">${icon('copy')} Copy prompt</button></div>
      <div id="fb-${l.id}-${pi}" ${st.feedback['p' + pi] ? '' : 'hidden'}>${st.feedback['p' + pi] ? `<div class="feedback"><div class="eyebrow">Last feedback</div><div class="prose">${md(st.feedback['p' + pi])}</div></div>` : ''}</div>
    </div>`;
  }
  function tableHtml(tb) {
    if (!tb || !tb.rows) return '';
    return `${tb.title ? `<h3 style="font-size:16px;font-weight:700;margin-top:16px">${esc(tb.title)}</h3>` : ''}<div class="tablewrap"><table>${tb.head ? `<thead><tr>${tb.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${tb.rows.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  function autosize(el) { if (el.tagName !== 'TEXTAREA') return; el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight + 2, 600) + 'px'; }

  /* ---------------- AD WORKSHOP (tool) ---------------- */
  function renderWorkshop(body, t, tool) {
    const prefix = 'w_' + tool.id + '__';
    const list = Object.keys(S.docs).filter(k => k.startsWith(prefix)).map(k => ({ k, d: S.docs[k] })).sort((a, b) => (b.d.updatedAt || 0) - (a.d.updatedAt || 0));
    view.ws = view.ws || {};
    let curKey = view.ws[tool.id];
    if (!curKey || !S.docs[curKey]) curKey = list[0] ? list[0].k : null;
    const mode = view.wsMode || 'build';
    const w = curKey ? S.docs[curKey] : null;
    body.innerHTML = `<div class="col stack">
      <div class="panel">
        <div><div class="eyebrow">Tool</div><h2>${esc(tool.title)}</h2></div>
        <div class="prose small">${md(tool.intro)}</div>
        <div class="subnav" style="margin:0"><button aria-pressed="${mode === 'build'}" data-mode="build">Write an ad</button>${tool.restructure ? `<button aria-pressed="${mode === 'restructure'}" data-mode="restructure">Rewrite in a new structure</button>` : ''}</div>
        <div class="row">
          ${list.length ? `<label class="eyebrow" for="wspick">Draft</label><select id="wspick" style="padding:8px;border-radius:8px;border:1px solid var(--line);background:var(--sheet);max-width:100%">${list.map(x => `<option value="${esc(x.k)}" ${x.k === curKey ? 'selected' : ''}>${esc(x.d.title || 'Untitled')} · ${fmtDate(x.d.updatedAt)}</option>`).join('')}</select>` : ''}
          <button class="btn small primary" id="wsnew">New draft</button>
        </div>
      </div>
      <div id="wsbody"></div></div>`;
    body.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { view.wsMode = b.dataset.mode; renderWorkshop(body, t, tool); });
    $('#wsnew').onclick = () => { const k = prefix + Date.now().toString(36); S.docs[k] = { title: 'New ad · ' + new Date().toLocaleDateString(), inputs: {}, sections: {}, corrections: {}, feedback: {}, restructure: {}, updatedAt: Date.now() }; touch(k); view.ws[tool.id] = k; renderWorkshop(body, t, tool); };
    const pick = $('#wspick'); if (pick) pick.onchange = () => { view.ws[tool.id] = pick.value; renderWorkshop(body, t, tool); };
    const wb = $('#wsbody');
    if (!w) { wb.innerHTML = '<div class="empty">Start a new draft. Fill the inputs for one business (PMT is a good first one), then write the ad one section at a time.</div>'; return; }
    view.ws[tool.id] = curKey;
    const save = () => touch(curKey);
    const bindField = (inp, setter) => { autosize(inp); let tm; inp.addEventListener('input', () => { autosize(inp); clearTimeout(tm); tm = setTimeout(() => { setter(inp.value); save(); }, 500); }); };
    const inputsText = () => tool.inputs.map(i => `- ${i.label}: ${(w.inputs[i.id] || '').trim() || '(blank)'}`).join('\n');
    if (mode === 'restructure' && tool.restructure) {
      const r = tool.restructure; w.restructure = w.restructure || {};
      wb.innerHTML = `<div class="panel"><div class="prose small">${md(r.intro)}</div>${r.fields.map(f => `<div class="field"><label for="rs-${f.id}">${esc(f.label)}</label><textarea id="rs-${f.id}" data-f="${f.id}">${esc(w.restructure[f.id] || '')}</textarea></div>`).join('')}
        <div class="row"><button class="btn primary small" id="rsgo">${icon('wand')} Generate new inputs</button></div><div id="rsout" ${w.restructureOut ? '' : 'hidden'}>${w.restructureOut ? `<div class="feedback"><div class="eyebrow">New inputs</div><div class="prose">${md(w.restructureOut)}</div></div>` : ''}</div></div>`;
      wb.querySelectorAll('textarea[data-f]').forEach(ta => bindField(ta, v => { w.restructure[ta.dataset.f] = v; }));
      $('#rsgo').onclick = () => {
        wb.querySelectorAll('textarea[data-f]').forEach(ta => { w.restructure[ta.dataset.f] = ta.value; }); save();
        const pr = `${COACH}\n\nJOB: Zach has an existing ad and a reference ad written in a different structure he wants to test. Generate a NEW, complete Inputs list for the existing ad that covers everything required to rewrite it in the reference ad's structure. Use these input headings:\n${tool.inputs.map(i => '- ' + i.label).join('\n')}\nThen add "Structure map": the reference ad's sections in order, each with one line on what it does and what the rewrite should put there.\n\nEXISTING AD:\n${w.restructure.existing || '(blank)'}\n\nREFERENCE AD (new structure):\n${w.restructure.reference || '(blank)'}\n\nNOTES:\n${w.restructure.notes || '(none)'}\n\nKeep it tight and specific. Plain text with bullets.`;
        askClaude($('#rsout'), pr, txt => { w.restructureOut = txt; save(); }, 'New inputs');
      };
      return;
    }
    wb.innerHTML = `<div class="panel">
      <div class="field"><label for="wstitle">Draft name</label><input type="text" id="wstitle" value="${esc(w.title || '')}"></div>
      <div><div class="eyebrow" style="margin-bottom:8px">Step 1 · Inputs</div><div class="inputs-grid">${tool.inputs.map(i => `<div class="field"><label for="wi-${i.id}">${esc(i.label)}</label><textarea id="wi-${i.id}" data-i="${i.id}" style="min-height:60px">${esc(w.inputs[i.id] || '')}</textarea>${i.help ? `<div class="help">${esc(i.help)}</div>` : ''}</div>`).join('')}</div></div>
      <div class="row"><button class="btn small" id="wsinputsfb">${icon('wand')} Check my inputs</button></div><div id="fb-inputs" ${w.feedback.inputs ? '' : 'hidden'}>${w.feedback.inputs ? `<div class="feedback"><div class="eyebrow">Last feedback</div><div class="prose">${md(w.feedback.inputs)}</div></div>` : ''}</div>
    </div>
    ${tool.sections.map((sec, si) => `<div class="panel ws-section">
      <div class="eyebrow">Step ${si + 2} · Section ${si + 1} of ${tool.sections.length}</div>
      <h3>${esc(sec.label)}</h3>
      ${sec.help ? `<div class="prose small">${md(sec.help)}</div>` : ''}
      ${(sec.checklist || []).length ? `<ul class="checklist">${sec.checklist.map(c => `<li>${inline(c)}</li>`).join('')}</ul>` : ''}
      <div class="field"><label for="ws-${sec.id}">My ${esc(sec.label.toLowerCase())}</label><textarea id="ws-${sec.id}" data-s="${sec.id}">${esc(w.sections[sec.id] || '')}</textarea></div>
      <div class="row"><button class="btn primary small" data-sfb="${si}">${icon('wand')} Get feedback on this section</button></div>
      <div id="fb-s-${sec.id}" ${w.feedback[sec.id] ? '' : 'hidden'}>${w.feedback[sec.id] ? `<div class="feedback"><div class="eyebrow">Last feedback</div><div class="prose">${md(w.feedback[sec.id])}</div></div>` : ''}</div>
      <div class="field"><label for="wc-${sec.id}">Corrections to carry forward</label><textarea id="wc-${sec.id}" data-c="${sec.id}" style="min-height:56px" placeholder="What did you fix here that later sections should remember? e.g. 'Say beginner-friendly, not easy'">${esc(w.corrections[sec.id] || '')}</textarea></div>
    </div>`).join('')}
    <div class="panel"><div class="eyebrow">Finished ad</div><div class="row"><button class="btn small" id="wscopy">${icon('copy')} Copy full ad</button></div></div>`;
    bindField($('#wstitle'), v => { w.title = v; });
    wb.querySelectorAll('textarea[data-i]').forEach(ta => bindField(ta, v => { w.inputs[ta.dataset.i] = v; }));
    wb.querySelectorAll('textarea[data-s]').forEach(ta => bindField(ta, v => { w.sections[ta.dataset.s] = v; }));
    wb.querySelectorAll('textarea[data-c]').forEach(ta => bindField(ta, v => { w.corrections[ta.dataset.c] = v; }));
    const flushWs = () => { wb.querySelectorAll('textarea[data-i]').forEach(ta => w.inputs[ta.dataset.i] = ta.value); wb.querySelectorAll('textarea[data-s]').forEach(ta => w.sections[ta.dataset.s] = ta.value); wb.querySelectorAll('textarea[data-c]').forEach(ta => w.corrections[ta.dataset.c] = ta.value); save(); };
    $('#wsinputsfb').onclick = () => { flushWs(); askClaude($('#fb-inputs'), `${COACH}\n\nHe is filling the Inputs list before writing a direct-response ad section by section (hook, lead, body, close). Review the inputs: flag anything vague, missing or weak, and for each weak one suggest a sharper version. Under 220 words, bullets.\n\nINPUTS:\n${inputsText()}`, txt => { w.feedback.inputs = txt; save(); }, 'Inputs check'); };
    wb.querySelectorAll('[data-sfb]').forEach(b => b.onclick = () => {
      flushWs(); const si = +b.dataset.sfb; const sec = tool.sections[si];
      const earlier = tool.sections.slice(0, si).map(s => `### ${s.label}\n${(w.sections[s.id] || '').trim() || '(not written)'}${w.corrections[s.id] ? `\nCorrections Zach made: ${w.corrections[s.id]}` : ''}`).join('\n\n');
      const pr = `${COACH}\n\nHe is writing a direct-response ad section by section (${tool.sections.map(s => s.label).join(', ')}). Give feedback on the ${sec.label.toUpperCase()} only.\n\nINPUTS:\n${inputsText()}\n\nWHAT A STRONG ${sec.label.toUpperCase()} DOES:\n${plain(sec.help || '')}\n${(sec.checklist || []).map(c => '- ' + c).join('\n')}\n\nEARLIER SECTIONS + CORRECTIONS HE MADE (apply these lessons, don't repeat old mistakes):\n${earlier || '(this is the first section)'}\n\nHIS ${sec.label.toUpperCase()}:\n${(w.sections[sec.id] || '').trim() || '(blank: write two strong options for him instead)'}\n\nRespond in under 250 words: a score out of 10, what works, the most important fixes (specific), then 2 improved versions he can choose from. Keep his voice.`;
      askClaude($(`#fb-s-${sec.id}`), pr, txt => { w.feedback[sec.id] = txt; save(); }, sec.label + ' feedback');
    });
    $('#wscopy').onclick = async () => { flushWs(); const txt = tool.sections.map(s => `${s.label.toUpperCase()}\n${w.sections[s.id] || ''}`).join('\n\n'); if (await copyText(txt)) toast('Ad copied'); else toast('Copy blocked here. Select the text instead.'); };
  }

  /* ---------------- VISUAL EXAMPLES (book campaigns) ----------------
     Each example: what it is, an annotated wireframe (static work) or numbered beats (films/campaigns),
     its elements, a pointer to the real page, and a "Make one like this" builder. Drafts: doc x_<exampleId>. */
  function wireframe(x) {
    const L = x.layout; if (!L || !(L.boxes || []).length) return '';
    const [aw, ah] = String(L.aspect || '4:5').split(':').map(Number); const W = 400, H = Math.round(400 * (ah || 5) / (aw || 4));
    const boxes = L.boxes.map(b => {
      const bx = b.x / 100 * W, by = b.y / 100 * H, bw = Math.max(8, b.w / 100 * W), bh = Math.max(8, b.h / 100 * H);
      const fs = Math.max(9, Math.min(15, bh / 2.6, bw / Math.max(4, String(b.label).length * 0.62)));
      return `<g><rect class="wf-box" x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" rx="4"></rect>
        ${bh > 14 && bw > 30 ? `<text class="wf-label" x="${(bx + bw / 2).toFixed(1)}" y="${(by + bh / 2 + fs / 3).toFixed(1)}" font-size="${fs.toFixed(1)}" text-anchor="middle">${esc(String(b.label).slice(0, Math.floor(bw / (fs * 0.6))))}</text>` : ''}
        <circle class="wf-badge" cx="${(bx + 11).toFixed(1)}" cy="${(by + 11).toFixed(1)}" r="10"></circle><text class="wf-badge-t" x="${(bx + 11).toFixed(1)}" y="${(by + 15).toFixed(1)}" text-anchor="middle">${esc(b.n)}</text></g>`;
    }).join('');
    return `<figure class="wf"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Layout of ${esc(x.title)}: ${esc(L.boxes.map(b => b.n + ' ' + b.label).join(', '))}"><rect class="wf-frame" x="1" y="1" width="${W - 2}" height="${H - 2}" rx="8"></rect>${boxes}</svg><figcaption>Layout sketch (${esc(L.aspect)}), not to scale</figcaption></figure>`;
  }
  function beatsHtml(x) { return (x.beats || []).length ? `<ol class="beats">${x.beats.map(b => `<li><span class="beat-n">${esc(b.n || '')}</span><span>${inline(b.label)}${b.t ? ` <span class="muted">(${esc(b.t)})</span>` : ''}</span></li>`).join('')}</ol>` : ''; }
  function exampleCard(t, x) {
    return `<article class="exc" data-ex="${esc(x.id)}">
      <div class="exc-head"><div><div class="eyebrow">${esc([x.format, x.brand, x.agency, x.year].filter(Boolean).join(' · '))}</div><h3>${esc(x.title)}</h3></div>
        <span class="exc-page">${icon('book')} PDF page ${esc(x.pdfPage)}</span></div>
      <div class="exc-grid">
        <div class="exc-visual">${x.layout ? wireframe(x) : beatsHtml(x)}</div>
        <div class="exc-body">
          <p class="exc-what">${inline(x.what)}</p>
          <p class="exc-idea"><b>The idea:</b> ${inline(x.idea)}</p>
          <ol class="exc-els">${(x.elements || []).map(e => `<li><span class="beat-n">${esc(e.n)}</span><div><b>${esc(e.name)}.</b> ${inline(e.detail)}${e.principle ? `<div class="exc-pr">${inline(e.principle)}</div>` : ''}</div></li>`).join('')}</ol>
        </div>
      </div>
      <div class="exc-foot"><span class="muted" style="font-size:13.5px">See the real one on PDF page ${esc(x.pdfPage)} of your copy.</span><button class="btn small primary" data-make>${icon('wand')} Make one like this</button></div>
      <div class="exc-builder" hidden></div>
    </article>`;
  }
  const EX = () => { const m = {}; TABS.forEach(t => t.lessons.forEach(l => (l.examples || []).forEach(x => { m[x.id] = { x, l, t }; }))); return m; };
  let EXMAP = null;
  function bindExample(card, t) {
    const id = card.dataset.ex; EXMAP = EXMAP || EX(); const ref = EXMAP[id]; if (!ref) return;
    const btn = card.querySelector('[data-make]'); const box = card.querySelector('.exc-builder');
    btn.onclick = () => { box.hidden = !box.hidden; btn.innerHTML = box.hidden ? `${icon('wand')} Make one like this` : 'Hide builder'; if (!box.hidden && !box.dataset.ready) { box.dataset.ready = '1'; renderBuilder(box, ref.x, ref.l); } };
  }
  function renderBuilder(box, x, l) {
    const key = 'x_' + x.id; const doc = S.docs[key] || (S.docs[key] = { target: 'pmt', other: '', drafts: {}, updatedAt: 0 });
    const targets = { pmt: 'PMT (Pacific Motorcycle Training)', zdub: 'ZDub Media', other: 'Another client' };
    const tk = doc.target === 'other' ? 'other:' + (doc.other || '').trim().toLowerCase() : doc.target;
    const d = doc.drafts[tk] || { fields: {}, output: '' };
    const r = x.recreate || {};
    box.innerHTML = `<div class="builder">
      <div class="eyebrow">Make your own version</div>
      <p class="muted" style="margin:0;font-size:14.5px">${inline(r.brief || '')}</p>
      <div class="row" role="radiogroup" aria-label="Who is it for">${Object.entries(targets).map(([k, v]) => `<label class="pill-radio"><input type="radio" name="tg-${esc(x.id)}" value="${k}" ${doc.target === k ? 'checked' : ''}> ${esc(v)}</label>`).join('')}</div>
      ${doc.target === 'other' ? `<div class="field"><label for="oth-${esc(x.id)}">Client name and what they sell</label><input type="text" id="oth-${esc(x.id)}" data-other value="${esc(doc.other || '')}" placeholder="e.g. Rocklin roofer, storm repair and replacements"></div>` : ''}
      ${(r.fields || []).map(f => `<div class="field"><label for="bf-${esc(x.id)}-${esc(f.id)}">${esc(f.label)}</label><textarea id="bf-${esc(x.id)}-${esc(f.id)}" data-bf="${esc(f.id)}" placeholder="${esc(f.hint || '')}" style="min-height:56px">${esc(d.fields[f.id] || '')}</textarea></div>`).join('')}
      <details class="reveal"><summary>How to build it, step by step</summary><div><ol class="steps">${(r.steps || []).map(s => `<li>${inline(s)}</li>`).join('')}</ol></div></details>
      <div class="row"><button class="btn primary small" data-draft>${icon('wand')} Draft my version with Claude</button><button class="btn small ghost" data-copy>${icon('copy')} Copy prompt</button></div>
      <div data-out ${d.output ? '' : 'hidden'}>${d.output ? `<div class="feedback"><div class="eyebrow">Your draft</div><div class="prose">${md(d.output)}</div></div>` : ''}</div>
    </div>`;
    const save = () => { doc.updatedAt = Date.now(); touch(key); };
    const curKey = () => doc.target === 'other' ? 'other:' + (doc.other || '').trim().toLowerCase() : doc.target;
    const draft = () => doc.drafts[curKey()] || (doc.drafts[curKey()] = { fields: {}, output: '' });
    box.querySelectorAll('input[type=radio]').forEach(rb => rb.onchange = () => { doc.target = rb.value; save(); renderBuilder(box, x, l); });
    const oth = box.querySelector('[data-other]'); if (oth) { let tm; oth.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { doc.other = oth.value; save(); }, 500); }; oth.onchange = () => { doc.other = oth.value; save(); renderBuilder(box, x, l); }; }
    box.querySelectorAll('textarea[data-bf]').forEach(ta => { autosize(ta); let tm; ta.oninput = () => { autosize(ta); clearTimeout(tm); tm = setTimeout(() => { draft().fields[ta.dataset.bf] = ta.value; save(); }, 500); }; });
    const flush = () => { box.querySelectorAll('textarea[data-bf]').forEach(ta => { draft().fields[ta.dataset.bf] = ta.value; }); if (oth) doc.other = oth.value; save(); };
    const prompt = () => {
      flush();
      const who = doc.target === 'pmt' ? 'Pacific Motorcycle Training (PMT), a motorcycle safety and licensing school in the Sacramento area (beginner riders, M1 license, returning riders). Ad rules: never say "coach", "cheap", "easy", "discount" or "guaranteed", and never promise passing.' : doc.target === 'zdub' ? 'ZDub Media, Zach\'s local-business marketing agency in the Sacramento region (Meta ads, ad creative, landing pages, follow-up for local service businesses).' : `${doc.other || 'a local client'} (a client of ZDub Media in the Sacramento region).`;
      return `${COACH}\n\nHe is studying this example from Miles Young's "Ogilvy on Advertising in the Digital Age" and wants to make his own version of its pattern.\n\nEXAMPLE: ${x.title}${x.brand ? ' (' + [x.brand, x.agency, x.year].filter(Boolean).join(', ') + ')' : ''}, ${x.format}.\nWhat it is: ${x.what}\nThe idea: ${x.idea}\nElements that make it work:\n${(x.elements || []).map(e => `${e.n}. ${e.name}: ${e.detail}`).join('\n')}\n${x.beats ? 'Beats:\n' + x.beats.map(b => `${b.n || '-'}. ${b.label}`).join('\n') + '\n' : ''}${x.layout ? 'Layout (percent of frame): ' + x.layout.boxes.map(b => `${b.n} ${b.label} at x${b.x} y${b.y} w${b.w} h${b.h}`).join('; ') + ` (aspect ${x.layout.aspect})\n` : ''}\nPATTERN TO BORROW: ${(x.recreate || {}).brief || ''}\n\nMAKE IT FOR: ${who}\n\nHIS INPUTS (blank = you fill it in with your best idea):\n${(r.fields || []).map(f => `- ${f.label}: ${(draft().fields[f.id] || '').trim() || '(blank)'}`).join('\n')}\n\nWrite his version, ready to produce:\n1. The concept in one sentence.\n2. Every element, numbered to match the original's elements, with the exact copy or content for each.\n3. ${x.layout ? 'A layout plan (what goes where, sizes, colors) for a Meta feed ad in 4:5 and a 9:16 Story version.' : 'A beat-by-beat plan or shot list for a 15-30 second vertical video (what we see, what we hear, on-screen text).'}\n4. One AI image or video prompt for the main visual (photoreal, no fake people presented as real customers).\n5. Build steps in Canva or CapCut (5-7 steps).\nKeep it specific to the business. Plain text with short headings and bullets, under 450 words.`;
    };
    box.querySelector('[data-draft]').onclick = () => { const out = box.querySelector('[data-out]'); askClaude(out, prompt(), txt => { draft().output = txt; save(); }, 'Your draft'); };
    box.querySelector('[data-copy]').onclick = async () => { const pr = prompt(); if (await copyText(pr)) toast('Prompt copied. Paste it into Claude.'); else showCopyFallback(box.querySelector('[data-out]'), pr); };
  }
  const gv = {}; // gallery view state per tab
  function renderGallery(body, t, tool) {
    const all = []; t.lessons.forEach(l => (l.examples || []).forEach(x => all.push({ x, l })));
    const v = gv[t.id] || (gv[t.id] = { fmt: 'All', i: 0 });
    const fmts = ['All', ...new Set(all.map(a => a.x.format))];
    const list = all.filter(a => v.fmt === 'All' || a.x.format === v.fmt);
    if (v.i >= list.length) v.i = 0;
    const cur = list[v.i];
    body.innerHTML = `<div class="col stack fc-wrap" style="max-width:860px">
      <div class="panel">
        <div><div class="eyebrow">${all.length} examples from the book</div><h2>${esc(tool.title)}</h2></div>
        ${tool.intro ? `<div class="prose small">${md(tool.intro)}</div>` : ''}
        <div class="fc-tags" role="group" aria-label="Format">${fmts.map(f => `<button class="fc-tag" aria-pressed="${f === v.fmt}" data-fmt="${esc(f)}">${esc(f)} <span>${f === 'All' ? all.length : all.filter(a => a.x.format === f).length}</span></button>`).join('')}</div>
      </div>
      ${cur ? `<div class="row" style="justify-content:space-between"><button class="btn small" data-step="-1" ${list.length < 2 ? 'disabled' : ''}>${icon('left')} Previous</button><span class="muted" style="font:13px var(--f-mono)">${v.i + 1} of ${list.length}</span><button class="btn small" data-step="1" ${list.length < 2 ? 'disabled' : ''}>Next ${icon('right')}</button></div>
      ${exampleCard(t, cur.x)}
      <div class="muted" style="font-size:14px">From the lesson: <a href="#l-${esc(cur.l.id)}" data-go="l-${esc(cur.l.id)}">${esc(cur.l.title)}</a></div>` : '<div class="empty">The examples are still being added.</div>'}
    </div>`;
    body.querySelectorAll('[data-fmt]').forEach(b => b.onclick = () => { v.fmt = b.dataset.fmt; v.i = 0; renderGallery(body, t, tool); });
    body.querySelectorAll('[data-step]').forEach(b => b.onclick = () => { v.i = (v.i + Number(b.dataset.step) + list.length) % list.length; renderGallery(body, t, tool); window.scrollTo(0, 0); });
    body.querySelectorAll('.exc').forEach(card => bindExample(card, t));
  }

  /* ---------------- FLASHCARDS (memory drill) ----------------
     Cards move up a box each "Got it" (0 new/again → 3 mastered) and drop to 0 on "Again".
     The deck always shows the weakest cards first. Progress is stored per card, keyed by a hash of its front. */
  const cardKey = c => { let h = 5381; const s = String(c.front); for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return 'c' + (h >>> 0).toString(36); };
  const fc = {}; // per tool view state: { tag, order, i, flipped }
  function renderFlashcards(body, t, tool) {
    const key = `f_${t.id}__${tool.id}`;
    const doc = S.docs[key] || (S.docs[key] = { cards: {}, updatedAt: 0 });
    const v = fc[key] || (fc[key] = { tag: 'All', order: null, i: 0, flipped: false });
    const tags = ['All', ...new Set(tool.cards.map(c => c.tag).filter(Boolean))];
    const box = c => (doc.cards[cardKey(c)] || {}).box || 0;
    const pool = tool.cards.filter(c => v.tag === 'All' || c.tag === v.tag);
    const mastered = pool.filter(c => box(c) >= 3).length, learning = pool.filter(c => box(c) > 0 && box(c) < 3).length;
    if (!v.order || v.order.tag !== v.tag) {
      const shuffled = pool.slice().sort(() => Math.random() - 0.5).sort((a, b) => box(a) - box(b));
      v.order = { tag: v.tag, list: shuffled }; v.i = 0; v.flipped = false;
    }
    const list = v.order.list; const c = list[v.i % Math.max(1, list.length)];
    const pct = pool.length ? Math.round(mastered / pool.length * 100) : 0;
    body.innerHTML = `<div class="col stack fc-wrap">
      <div class="panel">
        <div><div class="eyebrow">${pool.length} cards</div><h2>${esc(tool.title)}</h2></div>
        ${tool.intro ? `<div class="prose small">${md(tool.intro)}</div>` : ''}
        <div class="fc-tags" role="group" aria-label="Deck">${tags.map(g => `<button class="fc-tag" aria-pressed="${g === v.tag}" data-tag="${esc(g)}">${esc(g)} <span>${g === 'All' ? tool.cards.length : tool.cards.filter(x => x.tag === g).length}</span></button>`).join('')}</div>
        <div class="fc-stats"><div class="bar" aria-hidden="true"><i style="width:${pct}%"></i></div><span><b>${mastered}</b> mastered · ${learning} learning · ${pool.length - mastered - learning} new</span></div>
      </div>
      ${c ? `<div class="fc-card ${v.flipped ? 'flipped' : ''}" id="fcCard">
        <div class="fc-meta"><span class="tag">${esc(c.tag || 'Card')}</span><span>Card ${v.i % list.length + 1} of ${list.length} · ${['new', 'learning', 'learning', 'mastered'][Math.min(3, box(c))]}</span></div>
        <div class="fc-front">${md(c.front)}</div>
        ${v.flipped ? `<div class="fc-back"><div class="eyebrow">Answer</div><div class="prose">${md(c.back)}</div>${c.ref ? `<div class="fc-ref">${esc(c.ref)}</div>` : ''}</div>` : ''}
        <div class="row fc-actions">${v.flipped
          ? `<button class="btn" id="fcAgain">Again</button><button class="btn good" id="fcGot">${icon('check')} Got it</button>`
          : `<button class="btn primary" id="fcFlip">Show answer</button><span class="muted" style="font-size:13.5px">Say it out loud first.</span>`}</div>
      </div>` : '<div class="empty">No cards in this deck.</div>'}
      <div class="row"><button class="btn small ghost" id="fcShuffle">Shuffle</button><button class="btn small ghost" id="fcReset">Reset progress for this deck</button></div>
    </div>`;
    body.querySelectorAll('[data-tag]').forEach(b => b.onclick = () => { v.tag = b.dataset.tag; v.order = null; renderFlashcards(body, t, tool); });
    const flip = () => { v.flipped = true; renderFlashcards(body, t, tool); const g = $('#fcGot'); if (g) g.focus(); };
    const mark = got => {
      const k = cardKey(c); const st = doc.cards[k] || { box: 0, seen: 0 };
      st.box = got ? Math.min(3, (st.box || 0) + 1) : 0; st.seen = (st.seen || 0) + 1; st.last = Date.now();
      doc.cards[k] = st; touch(key); bumpDay();
      if (!got) { list.splice(v.i % list.length, 1); list.splice(Math.min(list.length, v.i % (list.length + 1) + 4), 0, c); }
      else v.i = (v.i + 1) % list.length;
      v.flipped = false; renderFlashcards(body, t, tool);
    };
    const fl = $('#fcFlip'); if (fl) fl.onclick = flip;
    const cd = $('#fcCard'); if (cd && !v.flipped) cd.onclick = e => { if (!e.target.closest('button')) flip(); };
    const ag = $('#fcAgain'); if (ag) ag.onclick = () => mark(false);
    const gt = $('#fcGot'); if (gt) gt.onclick = () => mark(true);
    $('#fcShuffle').onclick = () => { v.order = null; renderFlashcards(body, t, tool); };
    const rs = $('#fcReset'); rs.onclick = () => {
      if (!rs.dataset.armed) { rs.dataset.armed = '1'; rs.textContent = 'Tap again to reset this deck'; return; }
      pool.forEach(x => { delete doc.cards[cardKey(x)]; }); touch(key); v.order = null; renderFlashcards(body, t, tool); toast('Deck reset');
    };
    document.onkeydown = e => {
      if (!document.getElementById('fcCard') || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || '')) return;
      if (e.key === ' ' && !v.flipped) { e.preventDefault(); flip(); }
      else if (v.flipped && (e.key === '1' || e.key === 'ArrowLeft')) mark(false);
      else if (v.flipped && (e.key === '2' || e.key === 'ArrowRight' || e.key === 'Enter')) mark(true);
    };
  }

  /* ---------------- TRACKERS ---------------- */
  function renderTracker(body, t, trk) {
    const key = `t_${t.id}__${trk.id}`;
    const doc = S.docs[key] || (S.docs[key] = { entries: [], updatedAt: 0 });
    const weekAgo = Date.now() - 7 * 864e5;
    const thisWeek = doc.entries.filter(e => e.at > weekAgo).length;
    body.innerHTML = `<div class="col stack"><div class="panel">
      <div><div class="eyebrow">Habit tracker${trk.goal ? ' · goal: ' + esc(trk.goal) : ''}</div><h2>${esc(trk.title)}</h2></div>
      <div class="stats"><div class="stat"><b>${thisWeek}</b><span>last 7 days</span></div><div class="stat"><b>${doc.entries.length}</b><span>all time</span></div></div>
      <form id="trkform" class="stack">${trk.fields.map((f, i) => `<div class="field"><label for="tf-${i}">${esc(f)}</label><textarea id="tf-${i}" style="min-height:56px"></textarea></div>`).join('')}<div><button class="btn primary small" type="submit">Add entry</button></div></form>
    </div>
    <div class="entries">${doc.entries.slice().reverse().map(e => `<div class="entry"><div class="eyebrow"><span>${fmtDate(e.at)}</span><button class="btn small ghost" data-del="${esc(e.id)}">Delete</button></div><dl>${trk.fields.map((f, i) => e.values[i] ? `<dt>${esc(f)}</dt><dd>${esc(e.values[i])}</dd>` : '').join('')}</dl></div>`).join('') || '<div class="empty">No entries yet.</div>'}</div></div>`;
    $('#trkform').onsubmit = ev => {
      ev.preventDefault();
      const values = trk.fields.map((f, i) => $('#tf-' + i).value.trim());
      if (!values.some(Boolean)) { toast('Write something first'); return; }
      doc.entries.push({ id: Date.now().toString(36), at: Date.now(), values }); touch(key); bumpDay(); renderTracker(body, t, trk); toast('Entry added');
    };
    body.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
      if (b.dataset.armed) { doc.entries = doc.entries.filter(e => e.id !== b.dataset.del); touch(key); renderTracker(body, t, trk); }
      else { b.dataset.armed = '1'; b.textContent = 'Tap again to delete'; }
    });
  }

  /* ---------------- BANK ---------------- */
  function renderBank(q = '') {
    const ql = q.trim().toLowerCase();
    const groups = TABS.map(t => ({ t, ls: t.lessons.filter(l => { const st = peekL(l.id); if (!st) return false; const has = st.done || st.applied || st.notes || Object.values(st.answers || {}).some(Boolean); if (!has) return false; if (!ql) return true; return (l.title + ' ' + JSON.stringify(st)).toLowerCase().includes(ql); }) })).filter(g => g.ls.length);
    const workshops = Object.keys(S.docs).filter(k => k.startsWith('w_')).map(k => S.docs[k]);
    app.innerHTML = `<div class="col">
      <div class="tabhead"><div class="eyebrow">${totalDone()} lessons done · ${streak()} day streak</div><h1>My Bank</h1><div class="tagline">Every lesson you've finished or worked on, with what you wrote.</div></div>
      <input type="search" id="banksearch" placeholder="Search your lessons, answers and notes" value="${esc(q)}" aria-label="Search my bank">
      <div id="bankbody">${groups.length ? groups.map(g => `<div class="bank-tab"><h2><span class="ico">${icon(g.t.icon)}</span>${esc(g.t.title)} <span class="muted" style="font:12px var(--f-mono)">${doneCount(g.t)}/${g.t.lessons.length}</span></h2>${g.ls.map(l => bankLesson(l)).join('')}</div>`).join('') : `<div class="empty" style="margin-top:16px">${ql ? 'Nothing matches that search.' : 'Finished lessons land here with your answers, feedback and notes. Start with a pinned topic on Today.'}</div>`}
      ${(() => { EXMAP = EXMAP || EX(); const xd = Object.keys(S.docs).filter(k => k.startsWith('x_') && EXMAP[k.slice(2)]).map(k => ({ ref: EXMAP[k.slice(2)], d: S.docs[k] })).filter(o => Object.values(o.d.drafts || {}).some(dr => dr.output || Object.values(dr.fields || {}).some(Boolean))); return xd.length && !ql ? `<div class="bank-tab"><h2><span class="ico">${icon('spark')}</span>Ad Lab versions</h2>${xd.map(o => `<details class="banklesson"><summary><b>${esc(o.ref.x.title)}</b><span class="muted" style="font:12px var(--f-mono)">${fmtDate(o.d.updatedAt)}</span></summary><div class="body">${Object.entries(o.d.drafts).filter(([, dr]) => dr.output || Object.values(dr.fields || {}).some(Boolean)).map(([who, dr]) => `<div class="answer"><div class="eyebrow">For ${esc(who.replace(/^other:/, '') === 'pmt' ? 'PMT' : who === 'zdub' ? 'ZDub Media' : who.replace(/^other:/, '') || 'a client')}</div>${dr.output ? `<div class="prose small">${md(dr.output)}</div>` : `<p>${esc(Object.values(dr.fields).filter(Boolean).join(' · '))}</p>`}</div>`).join('')}<div><button class="btn small" data-go="l-${esc(o.ref.l.id)}">Open lesson ${icon('right')}</button></div></div></details>`).join('')}</div>` : ''; })()}
      ${workshops.length && !ql ? `<div class="bank-tab"><h2><span class="ico">${icon('pen')}</span>Ad Workshop drafts</h2>${workshops.map(w => `<details class="banklesson"><summary><b>${esc(w.title || 'Untitled')}</b><span class="muted" style="font:12px var(--f-mono)">${fmtDate(w.updatedAt)}</span></summary><div class="body">${Object.entries(w.sections || {}).filter(([, v]) => v).map(([k, v]) => `<div class="answer"><div class="eyebrow">${esc(k)}</div><p>${esc(v)}</p></div>`).join('') || '<span class="muted">No sections written yet.</span>'}</div></details>`).join('')}</div>` : ''}
      </div>
      <div class="sec-h"><h2>Backup</h2></div>
      <div class="panel"><p class="muted" style="margin:0;font-size:14.5px">${sync.db ? 'Your progress syncs to your Claude account on this page.' : 'Progress is saved in this browser.'} You can also copy a backup and restore it on another device or page.</p>
        <div class="row"><button class="btn small" id="bkcopy">${icon('copy')} Copy backup</button><button class="btn small ghost" id="bkshow">Restore from backup</button></div>
        <div id="bkarea" hidden><div class="field"><label for="bkin">Paste a backup here</label><textarea id="bkin"></textarea></div><div class="row" style="margin-top:8px"><button class="btn small primary" id="bkgo">Restore and merge</button></div></div>
      </div>
    </div>`;
    const sb = $('#banksearch'); let tm; sb.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { renderBank(sb.value); const s2 = $('#banksearch'); s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }, 250); };
    $('#bkcopy').onclick = async () => { const data = JSON.stringify({ app: 'zdub-learning-hub', v: 1, docs: S.docs }); if (await copyText(data)) toast('Backup copied'); else { $('#bkarea').hidden = false; $('#bkin').value = data; $('#bkin').select(); toast('Select all and copy.'); } };
    $('#bkshow').onclick = () => { $('#bkarea').hidden = false; };
    $('#bkgo').onclick = () => {
      try {
        const data = JSON.parse($('#bkin').value); if (!data.docs) throw 0; let n = 0;
        for (const [k, d] of Object.entries(data.docs)) { if (!S.docs[k] || (d.updatedAt || 0) > (S.docs[k].updatedAt || 0)) { S.docs[k] = d; n++; if (sync.db) pushDoc(k); } }
        saveLocal(); toast(`Restored ${n} item${n === 1 ? '' : 's'}`); renderTop('bank'); renderBank();
      } catch (e) { toast('That backup could not be read. Paste the whole text.'); }
    };
  }
  function bankLesson(l) {
    const st = peekL(l.id);
    const answers = (l.practice || []).flatMap((p, pi) => p.fields.map((f, fi) => ({ f, v: st.answers[`p${pi}_${fi}`] }))).filter(x => x.v);
    const fbs = Object.values(st.feedback || {}).filter(Boolean);
    return `<details class="banklesson"><summary><b>${esc(l.title)}</b><span class="muted" style="font:12px var(--f-mono)">${st.done ? 'done ' + fmtDate(st.doneAt) : 'in progress'}</span></summary><div class="body">
      ${answers.map(a => `<div class="answer"><div class="eyebrow">${esc(a.f)}</div><p>${esc(a.v)}</p></div>`).join('')}
      ${st.applied ? `<div class="answer" style="border-color:var(--hi-line)"><div class="eyebrow">What happened when I applied it</div><p>${esc(st.applied)}</p></div>` : ''}
      ${st.notes ? `<div class="answer"><div class="eyebrow">Notes</div><p>${esc(st.notes)}</p></div>` : ''}
      ${fbs.length ? `<details class="reveal"><summary>Coach feedback (${fbs.length})</summary><div class="prose small">${fbs.map(md).join('<hr>')}</div></details>` : ''}
      <div><button class="btn small" data-go="l-${esc(l.id)}">Open lesson ${icon('right')}</button></div>
    </div></details>`;
  }

  /* ---------------- REFERENCE ---------------- */
  function renderReference(q = '') {
    const R = HUB.ref; const ql = q.trim().toLowerCase();
    const hit = b => !ql || JSON.stringify(b).toLowerCase().includes(ql);
    const secs = R.sections.map(s => ({ s, blocks: (s.blocks || []).filter(hit) })).filter(x => !ql || x.blocks.length || (x.s.title + x.s.intro).toLowerCase().includes(ql));
    app.innerHTML = `<div class="col" style="max-width:980px">
      <div class="tabhead"><div class="eyebrow">Look things up · not daily lessons</div><h1>Reference</h1></div>
      <input type="search" id="refsearch" placeholder="Search mentors, disagreements, laws, formulas, glossary…" value="${esc(q)}" aria-label="Search reference">
      <nav class="refnav">${R.sections.map(s => `<a href="#reference" data-ref="${esc(s.id)}">${esc(s.title)}</a>`).join('')}</nav>
      ${secs.map(({ s, blocks }) => `<section class="refsec" id="ref-${esc(s.id)}"><h2>${esc(s.title)}</h2>${s.intro ? `<div class="prose small muted">${md(s.intro)}</div>` : ''}${blocks.map(refBlock).join('')}</section>`).join('') || '<div class="empty">Nothing matches that search.</div>'}
    </div>`;
    const sb = $('#refsearch'); let tm; sb.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { renderReference(sb.value); const s2 = $('#refsearch'); s2.focus(); s2.setSelectionRange(s2.value.length, s2.value.length); }, 250); };
    app.querySelectorAll('[data-ref]').forEach(a => a.onclick = e => { e.preventDefault(); const el = $('#ref-' + a.dataset.ref); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  }
  function refBlock(b) {
    const h = b.title ? `<h3>${esc(b.title)}</h3>` : '';
    if (b.type === 'table') return `<div class="refblock">${h}${tableHtml(b)}</div>`;
    if (b.type === 'list') return `<div class="refblock">${h}<ol class="reflist">${b.items.map(i => `<li>${inline(i)}</li>`).join('')}</ol></div>`;
    if (b.type === 'cards') return `<div class="refblock">${h}<div class="cards">${b.items.map(c => `<div class="card">${c.meta ? `<div class="eyebrow">${esc(c.meta)}</div>` : ''}<h4>${esc(c.title)}</h4><div class="prose">${md(c.body)}</div></div>`).join('')}</div></div>`;
    return `<div class="refblock">${h}<div class="prose small">${md(b.body)}</div></div>`;
  }

  /* ---------------- LISTEN (read aloud) ----------------
     Turns a lesson into a spoken script (sections announced, tables read row by row, symbols spelled out)
     and plays it with the device's built-in voices. Prefers Premium/Enhanced voices when installed. */
  const Listen = (function () {
    const synth = window.speechSynthesis;
    const NOVELTY = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Ralph|Kathy|Grandma|Grandpa|Eddy|Flo|Reed|Rocko|Sandy|Shelley)\b/i;
    const pref = { get: (k, d) => { try { const v = localStorage.getItem('zdub-listen-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set: (k, v) => { try { localStorage.setItem('zdub-listen-' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } } };
    const st = { q: [], i: 0, playing: false, lessonId: null, tabId: null, timer: null, wake: null, gen: 0 };
    const SEC_LABEL = { intro: 'Intro', idea: 'The idea', why: 'Why it matters', example: 'Example', examples: 'Examples from the book', workbook: 'Workbook', today: 'Do it today', check: 'Quick check', end: 'End' };
    const ABBR = [[/\bCPL\b/g, 'cost per lead'], [/\bCPA\b/g, 'cost per acquisition'], [/\bCAC\b/g, 'customer acquisition cost'], [/\bROAS\b/g, 'return on ad spend'], [/\bCTA\b/g, 'call to action'], [/\bCTAs\b/g, 'calls to action'], [/\bCTR\b/g, 'click-through rate'], [/\bGHL\b/g, 'GoHighLevel'], [/\bCBO\b/g, 'campaign budget optimization'], [/\bCAPI\b/g, 'Conversions A P I'], [/\bVOC\b/g, 'voice of customer'], [/\bUGC\b/g, 'U G C'], [/\bSOP\b/g, 'S O P'], [/\bSOPs\b/g, 'S O Ps'], [/\bVSL\b/g, 'V S L'], [/\bPMT\b/g, 'P M T'], [/\bZDub\b/g, 'Z Dub'], [/\bROI\b/g, 'R O I'], [/\bDMs\b/g, 'D Ms'], [/\bDM\b/g, 'D M'], [/\be\.g\.,?/gi, 'for example,'], [/\bi\.e\.,?/gi, 'that is,'], [/\bvs\.?(?=\s)/gi, 'versus'], [/\bw\//gi, 'with '], [/\bApprox\.?/gi, 'approximately']];
    function speakable(s) {
      let t = String(s == null ? '' : s);
      t = t.replace(/\*\*|__|`/g, '').replace(/(^|\s)\*(\S)/g, '$1$2').replace(/(\S)\*(?=\s|$|[.,;:!?])/g, '$1').replace(/^#+\s*/gm, '').replace(/^>\s?/gm, '');
      t = t.replace(/\$(\d+(?:\.\d+)?)\s?[kK]\b/g, (m, n) => '$' + (parseFloat(n) * 1000).toLocaleString('en-US'));
      t = t.replace(/\$(\d+(?:\.\d+)?)\s?[mM]\b/g, (m, n) => '$' + n + ' million');
      t = t.replace(/(\d)\s?[–—-]\s?(\$?\d)/g, '$1 to $2');
      t = t.replace(/(\d)k\b/g, '$1 thousand');
      t = t.replace(/\/(mo|month)\b/gi, ' a month').replace(/\/(wk|week)\b/gi, ' a week').replace(/\/(day)\b/gi, ' a day').replace(/\/(yr|year)\b/gi, ' a year').replace(/\/(hr|hour)\b/gi, ' an hour');
      t = t.replace(/(\d)\s?[x×]\s?(\d)/g, '$1 by $2').replace(/(\d)\s?[x×]\s?(\d)/g, '$1 by $2').replace(/(\d)x\b/g, '$1 times').replace(/\s×\s/g, ' times ').replace(/\s÷\s/g, ' divided by ').replace(/\s=\s/g, ' equals ');
      t = t.replace(/[→⟶➜]/g, ', then ').replace(/←/g, ' from ').replace(/[≈~](?=\s?\$?\d)/g, 'about ').replace(/\s&\s/g, ' and ').replace(/\s\+\s/g, ' and ').replace(/(\d)\+/g, '$1 plus').replace(/#(\d)/g, 'number $1');
      ABBR.forEach(([re, w]) => { t = t.replace(re, w); });
      t = t.replace(/\s*\((?:Recall\s)?[DL]?\d+\.\d+(?:,\s*[DL]?\d+\.\d+)*\)/g, '');
      t = t.replace(/\b(?:fnd|per|cw|off|adc|cp|soc|meta|fun|sal|gc|ops|mind)-0?(\d+)\b/g, 'lesson $1');
      t = t.replace(/([A-Za-z])\/([A-Za-z])/g, '$1 or $2');
      t = t.replace(/\s*[—–]\s*/g, ', ').replace(/\s*·\s*/g, '. ').replace(/[“”]/g, '"').replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').replace(/,\s*,/g, ',').trim();
      return t;
    }
    function blocks(src) {
      const out = []; let para = [];
      const flush = () => { if (para.length) { out.push(para.join(' ')); para = []; } };
      String(src || '').replace(/\r/g, '').split('\n').forEach(raw => {
        const line = raw.trim(); let m;
        if (!line) { flush(); return; }
        if ((m = line.match(/^[-•]\s+(.*)/))) { flush(); out.push(m[1]); return; }
        if ((m = line.match(/^(\d+)[.)]\s+(.*)/))) { flush(); out.push(m[1] + '. ' + m[2]); return; }
        if ((m = line.match(/^#{2,4}\s+(.*)/))) { flush(); out.push(m[1] + '.'); return; }
        para.push(line.replace(/^>\s?/, ''));
      });
      flush();
      return out;
    }
    const end = s => /[.!?:]["'”’)]*$/.test(s) ? s : s + '.';
    function script(t, l) {
      const S = []; const add = (sec, text, pause) => { const s = speakable(text); if (s) S.push({ sec, text: end(s), pause }); };
      const idx = t.lessons.indexOf(l); const part = (t.parts || []).find(p => p.id === l.part);
      if (part) add('intro', part.title.replace(/\s*·\s*/, '. ').replace(/\s*\(Ch [^)]*\)/, ''));
      if (t.kind === 'book' && l.chapter != null) add('intro', `${typeof l.chapter === 'number' ? 'Chapter ' + l.chapter : l.chapter}${l.chapterTitle && l.chapterTitle !== l.chapter ? ', ' + l.chapterTitle : ''}. ${l.pdfPages ? 'Book pages ' + l.pages + ', P D F pages ' + l.pdfPages : 'Pages ' + (l.pages || '')}. About ${l.minutes || 10} minutes.`);
      else add('intro', `Lesson ${idx + 1} of ${t.lessons.length}. About ${l.minutes || 10} minutes.`);
      add('intro', l.title, 0.6);
      add('idea', 'The idea.', 0.3);
      (l.quotes || []).forEach((q, qi) => add('idea', (qi === 0 ? 'In his words: ' : 'And: ') + q.text, 0.5));
      blocks(l.idea).forEach(b => add('idea', b));
      if ((l.keyPoints || []).length) { add('idea', 'Key points.', 0.3); l.keyPoints.forEach(k => add('idea', k)); }
      if (l.table && l.table.rows) {
        add('idea', l.table.title ? 'Table: ' + l.table.title : 'Here is the table.', 0.3);
        l.table.rows.forEach(r => add('idea', r.map((c, i) => (l.table.head && l.table.head[i] ? l.table.head[i] + ': ' : '') + end(String(c))).join(' '), 0.4));
      }
      if (l.why) { add('why', 'Why it matters for Z Dub.', 0.3); add('why', l.why); }
      const ex = l.example || {};
      if (ex.body || ex.after) {
        add('example', ex.title ? 'Example. ' + ex.title : 'Example.', 0.3);
        if (ex.before) { add('example', 'Before.'); blocks(ex.before).forEach(b => add('example', b)); }
        if (ex.after) { add('example', 'After.'); blocks(ex.after).forEach(b => add('example', b)); }
        blocks(ex.body).forEach(b => add('example', b));
      }
      (l.examples || []).forEach((x, xi) => {
        add('examples', (xi === 0 ? 'Examples from the book. ' : 'Next example. ') + x.title + (x.brand || x.year ? ', ' + [x.brand, x.year].filter(Boolean).join(', ') : '') + '. ' + (x.format || '') + '.', 0.3);
        add('examples', x.what); add('examples', 'The idea: ' + x.idea);
        (x.elements || []).forEach(e => add('examples', `Element ${e.n}, ${e.name}. ${e.detail}`));
      });
      if (pref.get('workbook', true)) {
        (l.practice || []).forEach((p, pi) => {
          add('workbook', pi === 0 ? 'Your turn. Workbook.' : 'Next exercise.', 0.3);
          add('workbook', p.prompt);
          add('workbook', 'Fill in: ' + p.fields.map(f => String(f).replace(/[:.]+$/, '')).join('; '));
          if ((p.rubric || []).length) { add('workbook', 'Self check.'); p.rubric.forEach(r => add('workbook', r)); }
        });
        const td = l.today || {};
        if (td.task) { add('today', 'Do it today.', 0.3); blocks(td.task).forEach(b => add('today', b)); if (td.output) add('today', 'Output: ' + td.output); }
        if ((l.check || []).length) {
          add('check', 'Quick check. Try to answer each one before the answer plays.', 0.3);
          l.check.forEach((c, ci) => { add('check', `Question ${ci + 1}. ${c.q}`, 3.5); add('check', 'Answer. ' + c.a, 0.8); });
        }
      }
      add('end', 'End of lesson. When you have applied it, mark it done.');
      return S;
    }
    // split long items into sentence chunks (iOS and Chrome cut off long utterances)
    function chunk(items) {
      const q = [];
      items.forEach(it => {
        const sents = it.text.match(/[^.!?]+[.!?]+["')]?|[^.!?]+$/g) || [it.text];
        let buf = '';
        sents.forEach(snt => {
          if ((buf + snt).length > 220 && buf) { q.push({ sec: it.sec, text: buf.trim(), pause: 0.15 }); buf = ''; }
          buf += snt;
        });
        if (buf.trim()) q.push({ sec: it.sec, text: buf.trim(), pause: it.pause == null ? 0.25 : it.pause });
      });
      return q;
    }
    function minutes(t, l) { const chars = script(t, l).reduce((n, s) => n + s.text.length, 0); return Math.max(1, Math.round(chars / 15 / 60 / (pref.get('rate', 1) || 1))); }
    function voices() { try { return synth ? synth.getVoices().filter(v => /^en/i.test(v.lang) && !NOVELTY.test(v.name)) : []; } catch (e) { return []; } }
    function score(v) {
      const n = (v.name + ' ' + (v.voiceURI || '')).toLowerCase(); let s = 0;
      if (/premium/.test(n)) s += 100; if (/enhanced/.test(n)) s += 60; if (/natural|neural|online/.test(n)) s += 50;
      if (/^en[-_]us/i.test(v.lang)) s += 10; if (/\b(ava|zoe|evan|nathan|noelle|samantha|allison|tom|susan|jenny|aria|guy|serena|daniel)\b/.test(n)) s += 8;
      if (/google us english/.test(n)) s += 20; if (v.localService === false) s += 2;
      return s;
    }
    function bestVoice() {
      const vs = voices(); if (!vs.length) return null;
      const saved = pref.get('voice', ''); const hit = vs.find(v => v.name === saved); if (hit) return hit;
      return vs.slice().sort((a, b) => score(b) - score(a))[0];
    }
    const hasGoodVoice = () => voices().some(v => /premium|enhanced|natural|neural/i.test(v.name + ' ' + (v.voiceURI || '')));
    const voiceLabel = v => v ? v.name.replace(/^(Microsoft|Google)\s+/, '') : 'Default voice';

    function bar() {
      let el = document.getElementById('player');
      if (el) return el;
      el = document.createElement('div'); el.id = 'player'; el.className = 'player'; el.hidden = true;
      el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Lesson audio player');
      el.innerHTML = `<div class="pl-inner">
        <div class="pl-prog"><i id="plProg"></i></div>
        <div class="pl-row">
          <button class="pl-ico" id="plPrev" aria-label="Back one section">${icon('back')}</button>
          <button class="pl-play" id="plPlay" aria-label="Pause">${icon('pause')}</button>
          <button class="pl-ico" id="plNext" aria-label="Skip to next section">${icon('fwd')}</button>
          <div class="pl-text"><div class="pl-sec" id="plSec"></div><div class="pl-now" id="plNow"></div></div>
          <button class="pl-ico" id="plSet" aria-label="Voice and speed settings" aria-expanded="false">${icon('sliders')}</button>
          <button class="pl-ico" id="plClose" aria-label="Stop and close player">${icon('x')}</button>
        </div>
        <div class="pl-settings" id="plSettings" hidden>
          <div class="pl-grid">
            <label class="field"><span>Voice</span><select id="plVoice"></select></label>
            <label class="field"><span>Speed</span><select id="plRate">${[0.8, 0.9, 1, 1.1, 1.25, 1.4, 1.6, 1.8, 2].map(r => `<option value="${r}">${r}×</option>`).join('')}</select></label>
          </div>
          <label class="pl-check"><input type="checkbox" id="plWb"> Also read the workbook, Do it today and quick check</label>
          <label class="pl-check"><input type="checkbox" id="plAuto"> When a lesson ends, keep going to the next one</label>
          <label class="pl-check"><input type="checkbox" id="plFollow"> Scroll the page to follow along</label>
          <p class="pl-tip" id="plTip"></p>
          ${isApple ? '<div><button class="btn small" id="plReader" style="background:transparent;color:inherit">Use my iPhone Premium voice instead</button></div>' : ''}
        </div></div>`;
      document.body.appendChild(el);
      const $p = s => el.querySelector(s);
      $p('#plPlay').onclick = () => (st.playing ? pause() : resume());
      $p('#plPrev').onclick = () => jump(-1);
      $p('#plNext').onclick = () => jump(1);
      $p('#plClose').onclick = stop;
      $p('#plSet').onclick = () => { const s = $p('#plSettings'); s.hidden = !s.hidden; $p('#plSet').setAttribute('aria-expanded', String(!s.hidden)); if (!s.hidden) fillVoices(); };
      $p('#plRate').value = String(pref.get('rate', 1));
      $p('#plRate').onchange = e => { pref.set('rate', +e.target.value); restartChunk(); };
      $p('#plVoice').onchange = e => { pref.set('voice', e.target.value); restartChunk(); };
      $p('#plWb').checked = pref.get('workbook', true);
      $p('#plWb').onchange = e => { pref.set('workbook', e.target.checked); if (st.lessonId) { const cur = st.q[st.i]; rebuild(); const k = st.q.findIndex(x => x.sec === (cur && cur.sec)); st.i = k < 0 ? Math.min(st.i, st.q.length - 1) : k; restartChunk(); } };
      $p('#plAuto').checked = pref.get('auto', false);
      $p('#plAuto').onchange = e => pref.set('auto', e.target.checked);
      $p('#plFollow').checked = pref.get('follow', true);
      $p('#plFollow').onchange = e => pref.set('follow', e.target.checked);
      const rb = $p('#plReader'); if (rb) rb.onclick = () => { const L0 = LESSON[st.lessonId]; if (L0) reader(L0.t, L0.l); };
      if (synth && 'onvoiceschanged' in synth) synth.addEventListener('voiceschanged', fillVoices);
      return el;
    }
    function fillVoices() {
      const sel = document.getElementById('plVoice'); if (!sel) return;
      const vs = voices().sort((a, b) => score(b) - score(a)); const cur = bestVoice();
      sel.innerHTML = vs.length ? vs.map(v => `<option value="${esc(v.name)}">${esc(voiceLabel(v))}${/premium|enhanced/i.test(v.name + v.voiceURI) && !/premium|enhanced/i.test(v.name) ? ' (enhanced)' : ''}</option>`).join('') : '<option value="">Default voice</option>';
      if (cur) sel.value = cur.name;
      const tip = document.getElementById('plTip');
      const apple = /iPhone|iPad|Macintosh/.test(navigator.userAgent);
      tip.innerHTML = (isApple ? '<b>No sound?</b> Turn off Silent mode and turn the volume up. <b>Only basic voices listed?</b> iPhone apps don\'t share Premium voices with web pages. Tap the button below to hear the lesson in your Premium voice with Speak Screen. ' : '') + (hasGoodVoice() ? 'Using the best voice on this device. On iPhone, keep this page open with the screen on while it plays.'
        : apple ? '<b>Want a better voice?</b> On iPhone: Settings → Accessibility → Read &amp; Speak (or Spoken Content) → Voices → English → download a <b>Premium</b> voice such as Ava or Zoe. Then reload this page.'
        : 'Tip: voices named Natural, Neural or Enhanced sound best. Pick one above if your device has it.');
    }
    // iPhone mutes web speech and Web Audio when Silent mode is on. Playing a silent looping <audio>
    // (and asking for the "playback" audio session where supported) tells iOS this is real media playback,
    // so speech is heard even with the ringer switch on silent. Must start inside the tap.
    const Unlock = (function () {
      let el = null; let src = null;
      function silentWav() {
        const n = 8000, b = new Uint8Array(44 + n), dv = new DataView(b.buffer);
        const w = (o, str) => { for (let i = 0; i < str.length; i++) b[o + i] = str.charCodeAt(i); };
        w(0, 'RIFF'); dv.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
        dv.setUint32(24, 8000, true); dv.setUint32(28, 8000, true); dv.setUint16(32, 1, true); dv.setUint16(34, 8, true); w(36, 'data'); dv.setUint32(40, n, true); b.fill(128, 44);
        let bin = ''; for (let i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]);
        return 'data:audio/wav;base64,' + btoa(bin);
      }
      return {
        on() {
          try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* not supported */ }
          try {
            if (!el) { src = src || silentWav(); el = new Audio(src); el.loop = true; el.preload = 'auto'; el.setAttribute('playsinline', ''); el.setAttribute('aria-hidden', 'true'); }
            const pr = el.play(); if (pr && pr.catch) pr.catch(() => {});
          } catch (e) { /* ignore */ }
        },
        off() { try { if (el) el.pause(); } catch (e) { /* ignore */ } }
      };
    })();
    const isApple = /iPhone|iPad|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    const NOSOUND = 'No sound? Turn off Silent mode (the bell switch or Control Center) and turn the volume up, then tap play again.';
    function note(msg) { const el = document.getElementById('plNow'); if (el) el.textContent = msg; }
    function rebuild() { const L0 = LESSON[st.lessonId]; st.q = chunk(script(L0.t, L0.l)); }
    function start(t, l) {
      if (!synth || typeof window.SpeechSynthesisUtterance !== 'function') { toast("This browser can't read aloud. Open the page in Safari or Chrome."); return; }
      Unlock.on();
      bar(); cancelSpeech(true);
      st.heard = false; st.fails = 0;
      if (isApple && !pref.get('silentHint', false)) { pref.set('silentHint', true); toast('If you hear nothing, turn off Silent mode and turn the volume up.'); }
      st.lessonId = l.id; st.tabId = t.id; rebuild(); st.i = 0; st.playing = true;
      document.body.classList.add('has-player'); document.getElementById('player').hidden = false;
      document.getElementById('plSettings').hidden = true;
      keepAwake(true); speak();
    }
    function speak() {
      if (!st.playing) return;
      if (st.i >= st.q.length) return finished();
      const item = st.q[st.i]; const gen = ++st.gen;
      paint(item);
      const u = new SpeechSynthesisUtterance(item.text);
      const v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
      u.rate = pref.get('rate', 1) || 1; u.pitch = 1;
      const t0 = Date.now(); let begun = false;
      u.onstart = () => { begun = true; st.heard = true; st.fails = 0; };
      u.onend = () => {
        if (gen !== st.gen || !st.playing) return;
        // an utterance that "ends" instantly without ever starting means the voice engine isn't speaking
        if (!begun && Date.now() - t0 < 60) { st.fails = (st.fails || 0) + 1; if (st.fails >= 3) { pause(); note("Your phone's voice isn't responding here. " + NOSOUND + ' If it still says nothing, open this page in Safari.'); return; } }
        st.i++; st.timer = setTimeout(speak, Math.round((item.pause || 0.2) * 1000 / Math.max(0.8, u.rate)));
      };
      u.onerror = e => {
        if (gen !== st.gen) return;
        const code = e && e.error;
        if (code === 'interrupted' || code === 'canceled') return;
        if (code === 'not-allowed') { pause(); note('Tap play to start the voice.'); return; }
        u.onend();
      };
      try { synth.speak(u); } catch (e) { /* ignore */ }
      clearTimeout(st.watch);
      if (!st.heard) st.watch = setTimeout(() => { if (st.playing && !st.heard && gen === st.gen) note(NOSOUND); }, 4000);
    }
    function cancelSpeech(soft) {
      st.gen++; clearTimeout(st.timer); clearTimeout(st.watch);
      // iOS Safari can drop a speak() that follows cancel() right away, so only cancel when something is queued
      try { if (synth && (!soft || synth.speaking || synth.pending)) synth.cancel(); } catch (e) { /* ignore */ }
    }
    function pause() { st.playing = false; cancelSpeech(); setPlayIcon(); keepAwake(false); Unlock.off(); }
    function resume() { if (!st.q.length) return; if (st.i >= st.q.length) st.i = 0; Unlock.on(); st.playing = true; st.heard = false; st.fails = 0; setPlayIcon(); keepAwake(true); speak(); }
    function restartChunk() { if (st.playing) { cancelSpeech(); speak(); } }
    function jump(dir) {
      if (!st.q.length) return;
      const cur = st.q[Math.min(st.i, st.q.length - 1)].sec; let k = st.i;
      if (dir > 0) { while (k < st.q.length && st.q[k].sec === cur) k++; }
      else {
        let s0 = k; while (s0 > 0 && st.q[s0 - 1].sec === cur) s0--;
        if (st.i - s0 > 1 || s0 === 0) k = s0; else { k = s0 - 1; const prev = st.q[k].sec; while (k > 0 && st.q[k - 1].sec === prev) k--; }
      }
      st.i = Math.max(0, Math.min(k, st.q.length)); cancelSpeech();
      if (st.playing) speak(); else if (st.i < st.q.length) paint(st.q[st.i]);
    }
    function finished() {
      const L0 = LESSON[st.lessonId];
      const next = L0 && L0.t.lessons[L0.i + 1];
      if (pref.get('auto', false) && next) {
        if (location.hash === '#l-' + L0.l.id) location.hash = 'l-' + next.id;
        st.lessonId = next.id; rebuild(); st.i = 0; speak(); return;
      }
      st.playing = false; setPlayIcon(); keepAwake(false); Unlock.off();
      document.getElementById('plNow').textContent = 'Lesson finished.'; document.getElementById('plProg').style.width = '100%';
      highlight(null);
    }
    function stop() { pause(); st.q = []; st.lessonId = null; highlight(null); const el = document.getElementById('player'); if (el) el.hidden = true; document.body.classList.remove('has-player'); }
    function setPlayIcon() { const b = document.getElementById('plPlay'); if (!b) return; b.innerHTML = icon(st.playing ? 'pause' : 'play'); b.setAttribute('aria-label', st.playing ? 'Pause' : 'Play'); }
    function paint(item) {
      setPlayIcon();
      const L0 = LESSON[st.lessonId];
      document.getElementById('plSec').textContent = (L0 ? L0.l.title + ' · ' : '') + (SEC_LABEL[item.sec] || '');
      document.getElementById('plNow').textContent = item.text;
      document.getElementById('plProg').style.width = (100 * st.i / Math.max(1, st.q.length)) + '%';
      highlight(item.sec);
    }
    let lastSec = null;
    function highlight(sec) {
      document.querySelectorAll('.lesson [data-sec].speaking').forEach(e => e.classList.remove('speaking'));
      const shown = document.getElementById('lesson');
      if (!sec || !st.lessonId || !shown || shown.dataset.lid !== st.lessonId) { lastSec = null; return; }
      const el = shown.querySelector(`[data-sec="${sec === 'end' ? 'today' : sec}"]`);
      if (!el) return;
      el.classList.add('speaking');
      if (sec !== lastSec && pref.get('follow', true)) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      lastSec = sec;
    }
    // re-apply highlight after the lesson re-renders (only if the playing lesson is on screen)
    function sync() { if (st.lessonId && st.q[st.i]) { lastSec = st.q[st.i].sec; highlight(st.q[st.i].sec); } }
    async function keepAwake(on) {
      try {
        if (on && navigator.wakeLock && !st.wake) { st.wake = await navigator.wakeLock.request('screen'); st.wake.addEventListener('release', () => { st.wake = null; }); }
        else if (!on && st.wake) { await st.wake.release(); st.wake = null; }
      } catch (e) { st.wake = null; }
    }
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && st.playing) keepAwake(true); });
    if (synth) { try { synth.getVoices(); } catch (e) { /* ignore */ } }
    // Speak Screen view: iPhone apps only expose basic voices to web pages, but iOS Speak Screen
    // (two-finger swipe down from the top) reads the screen in the Premium voice chosen in Settings.
    // This view shows only the lesson's spoken script so Speak Screen reads it cleanly.
    function reader(t, l) {
      if (st.playing) pause();
      let ov = document.getElementById('reader');
      if (!ov) { ov = document.createElement('div'); ov.id = 'reader'; ov.className = 'reader'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'rdTitle'); document.body.appendChild(ov); }
      const showHelp = !pref.get('readerHelpSeen', false);
      const items = script(t, l);
      const heads = /^(The idea|Key points|Here is the table|Table:|Why it matters|Examples from the book|Next example|Example|Before|After|Your turn|Next exercise|Self check|Do it today|Quick check|End of lesson)/;
      const meta = items.filter(it => it.sec === 'intro').slice(0, -1).map(it => esc(it.text)).join(' ');
      const body = items.filter(it => it.sec !== 'intro').map(it => heads.test(it.text) ? `<h3>${esc(it.text)}</h3>` : `<p>${esc(it.text)}</p>`).join('');
      ov.innerHTML = `<div class="rd-bar"><button class="btn small" id="rdDone">Done</button></div>
        <div class="rd-in">
          <div class="rd-help" id="rdHelp" ${showHelp ? '' : 'hidden'} aria-hidden="${showHelp ? 'false' : 'true'}">
            <p><b>Hear this in your Premium voice</b></p>
            <ol>
              <li>One time: Settings → Accessibility → Spoken Content (Read &amp; Speak on newer iOS). Turn on <b>Speak Screen</b>. Under <b>Voices → English</b>, pick the Premium voice you downloaded.</li>
              <li>Swipe down from the very top of the screen with <b>two fingers</b>. iPhone starts reading this page and scrolls as it goes.</li>
              <li>Use the small Speak Screen controller to pause, skip or change speed. Turn off Silent mode if you hear nothing.</li>
            </ol>
            <label class="pl-check"><input type="checkbox" id="rdWb" ${pref.get('workbook', true) ? 'checked' : ''}> Include the workbook, Do it today and quick check</label>
            <div class="row" style="margin-top:8px"><button class="btn small primary" id="rdGot">Got it, hide these steps</button></div>
          </div>
          <p class="rd-meta">${meta}</p>
          <h2 id="rdTitle">${esc(l.title)}</h2>
          <div class="rd-text">${body}</div>
          ${showHelp ? '' : '<p class="rd-foot"><button class="btn small ghost" id="rdHow" aria-label="How to use Speak Screen">How this works</button></p>'}
        </div>`;
      ov.hidden = false;
      ['top', 'app', 'player'].forEach(id => { const e = document.getElementById(id); if (e) { e.setAttribute('aria-hidden', 'true'); e.inert = true; } });
      document.body.style.overflow = 'hidden'; ov.scrollTop = 0;
      const close = () => { ov.hidden = true; ['top', 'app', 'player'].forEach(id => { const e = document.getElementById(id); if (e) { e.removeAttribute('aria-hidden'); e.inert = false; } }); document.body.style.overflow = ''; const b = document.getElementById('speakbtn'); if (b) b.focus(); };
      ov.querySelector('#rdDone').onclick = close;
      const got = ov.querySelector('#rdGot'); if (got) got.onclick = () => { pref.set('readerHelpSeen', true); reader(t, l); };
      const how = ov.querySelector('#rdHow'); if (how) how.onclick = () => { pref.set('readerHelpSeen', false); reader(t, l); };
      const wb = ov.querySelector('#rdWb'); if (wb) wb.onchange = () => { pref.set('workbook', wb.checked); const pw = document.getElementById('plWb'); if (pw) pw.checked = wb.checked; reader(t, l); };
      ov.querySelector('#rdDone').focus();
    }
    document.addEventListener('keydown', e => { const ov = document.getElementById('reader'); if (e.key === 'Escape' && ov && !ov.hidden) ov.querySelector('#rdDone').click(); });
    return { start, stop, sync, minutes, script, speakable, reader, isApple };
  })();
  window.ZDubListen = Listen;

  /* ---------------- routing ---------------- */
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    let active = 'home';
    if (h.startsWith('l-') && LESSON[h.slice(2)]) { const { t } = LESSON[h.slice(2)]; active = t.id; renderTop(active); renderTab(t, h.slice(2)); }
    else if (h.startsWith('t-') && TAB[h.slice(2)]) { active = h.slice(2); renderTop(active); renderTab(TAB[active]); }
    else if (h === 'reference' && HUB.ref) { active = 'reference'; renderTop(active); renderReference(); }
    else if (h === 'bank') { active = 'bank'; renderTop(active); renderBank(); }
    else { renderTop('home'); renderHome(); }
    window.scrollTo(0, 0);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-go]'); if (!a) return;
    e.preventDefault();
    const target = a.dataset.go;
    if (('#' + target) === location.hash || (target === 'home' && !location.hash)) route(); else location.hash = target;
  });
  window.addEventListener('hashchange', route);

  loadLocal();
  route();
  startSync();
})();
