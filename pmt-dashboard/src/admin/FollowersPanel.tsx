import { useState, type ReactNode } from 'react';
import { api, fileUrl } from '../api';
import { sanitize } from '../dashboard/sections/Insights';
import { fmtDate, fmtRange } from '../lib/dates';
import readXlsxFile from 'read-excel-file/browser';
import { readFollowerFiles, type ReadResult } from '../lib/followerPack';
import { applyFollowerReport } from '../lib/followerReport';
import { PLATFORM_LABEL, seedFollowers } from '../lib/followers';
import { fmtDateTime, int, money } from '../lib/format';
import type { FollowerAd, FollowerCampaign, FollowerCount, FollowerPage } from '../lib/types';
import { Icon } from '../ui/Icon';
import { Badge, Button, Card, cx, Field, inputClass, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { compressImage, newId } from './files';
import { RichEditor } from './RichEditor';

export function FollowersPanel() {
  const { state, save, toast } = useAdmin();
  const saved = state.followers ?? seedFollowers();
  const [f, setF] = useState<FollowerCampaign>(() => structuredClone(saved));
  // Bumped to reload the text boxes after Undo.
  const [resetKey, setResetKey] = useState(0);
  const dirty = JSON.stringify(f) !== JSON.stringify(saved);
  const set = (patch: Partial<FollowerCampaign>) => setF((x) => ({ ...x, ...patch }));
  const short = state.settings.clientShortName;

  const saveAll = async () => {
    const next: FollowerCampaign = {
      ...f,
      history: withCounts(f),
      whyHtml: sanitize(f.whyHtml),
      nextHtml: sanitize(f.nextHtml),
      updatedAt: new Date().toISOString(),
    };
    if (await save((st) => ({ ...st, followers: { ...next, enabled: st.followers?.enabled ?? false } }), 'Follower numbers saved.')) setF(structuredClone(next));
  };

  const setShown = async (enabled: boolean) => {
    if (
      await save(
        (st) => ({ ...st, followers: { ...(st.followers ?? saved), enabled } }),
        enabled ? `${short} can now see the follower dashboard.` : `Hidden from ${short}.`,
      )
    ) {
      setF((x) => ({ ...x, enabled }));
    }
  };

  const updAd = (i: number, patch: Partial<FollowerAd>) => set({ ads: f.ads.map((a, j) => (j === i ? { ...a, ...patch } : a)) });
  const updPage = (i: number, patch: Partial<FollowerPage>) => set({ pages: f.pages.map((p, j) => (j === i ? { ...p, ...patch } : p)) });

  const addImages = async (i: number, files: File[]) => {
    try {
      const keys: string[] = [];
      for (const file of files) keys.push((await api.uploadFile(await compressImage(file, 1600), 'image/jpeg')).key);
      setF((x) => ({ ...x, ads: x.ads.map((a, j) => (j === i ? { ...a, imageKeys: [...(a.imageKeys ?? []), ...keys] } : a)) }));
      toast('Image added. Press Save when you’re done.');
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Upload failed.', 'error');
    }
  };

  return (
    <>
      <PanelTitle title="Follower ads">
        The numbers behind the Follower ads tab. Once a week, upload the report CSV below (the guide says how to pull it), check the numbers, and press Save. You can also
        type numbers in by hand.
      </PanelTitle>

      <Card className={f.enabled ? '!border-good/60' : '!border-warn/70'}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 font-semibold">
              {f.enabled ? (
                <Badge tone="good" icon="eye">
                  {short} can see it
                </Badge>
              ) : (
                <Badge tone="neutral" icon="eyeOff">
                  Hidden from {short}
                </Badge>
              )}
            </p>
            <p className="mt-1 text-sm text-ink2">
              {f.enabled
                ? `${short}'s link opens on the Follower ads tab, with a Website ads tab next to it.`
                : `Check it on the Dashboard tab first. While it's hidden, ${short} only sees the website ads.`}
            </p>
          </div>
          <Button variant={f.enabled ? 'secondary' : 'primary'} icon={f.enabled ? 'eyeOff' : 'eye'} onClick={() => void setShown(!f.enabled)}>
            {f.enabled ? `Hide from ${short}` : `Show to ${short}`}
          </Button>
        </div>
      </Card>

      <div className="sticky top-14 z-30 -mx-2 flex items-center justify-end gap-2 rounded-lg px-2 py-2 backdrop-blur">
        <span className="mr-auto text-xs text-muted">Last saved {fmtDateTime(saved.updatedAt)}</span>
        {dirty && <span className="text-sm text-ink2">Unsaved changes</span>}
        <Button
          disabled={!dirty}
          onClick={() => {
            setF(structuredClone(saved));
            setResetKey((k) => k + 1);
          }}
        >
          Undo
        </Button>
        <Button variant="primary" icon="check" disabled={!dirty} onClick={() => void saveAll()}>
          Save
        </Button>
      </div>

      <ReportUpload
        f={f}
        onApply={(next) => {
          setF(next);
          toast('Numbers filled in from the report. Check them, then press Save.');
        }}
      />

      <Group title="Campaign">
        <Field label="Name (report title)" className="sm:col-span-2">
          <input className={inputClass} value={f.name} onChange={(e) => set({ name: e.target.value })} />
        </Field>
        <Field label="Start date">
          <input type="date" className={inputClass} value={f.start} onChange={(e) => e.target.value && set({ start: e.target.value })} />
        </Field>
        <Field label="Numbers through" hint="The last day the numbers below cover.">
          <input type="date" className={inputClass} value={f.asOf} onChange={(e) => e.target.value && set({ asOf: e.target.value })} />
        </Field>
        <Field label="Ranges" hint="Separate with commas." className="sm:col-span-2">
          <input
            className={inputClass}
            value={f.locations.join(', ')}
            onChange={(e) =>
              set({
                locations: e.target.value
                  .split(',')
                  .map((x) => x.trim())
                  .filter(Boolean),
              })
            }
          />
        </Field>
        <Field label="Where the ads run" className="sm:col-span-2">
          <input className={inputClass} value={f.areaNote} onChange={(e) => set({ areaNote: e.target.value })} />
        </Field>
        <Num
          label="Campaign spend ($)"
          value={f.adSpend ?? null}
          step={0.01}
          onChange={(v) => set({ adSpend: v })}
          hint="Ads Manager campaign total. Leave empty to add up the ads below."
        />
        <Num
          label="People reached by the ads"
          value={f.adReach ?? null}
          onChange={(v) => set({ adReach: v })}
          hint="Ads Manager, campaign total (reach can't be added up across ads)."
        />
        <Field label="Followers counted on" hint="The day the “followers now” totals were read.">
          <input type="date" className={inputClass} value={f.countedOn ?? f.asOf} onChange={(e) => e.target.value && set({ countedOn: e.target.value })} />
        </Field>
      </Group>

      <Card>
        <h2 className="text-base font-semibold">The ads</h2>
        <p className="mt-1 text-sm text-ink2">
          From Meta Ads Manager, each ad's totals since the start date. “Name in Ads Manager” must match exactly for uploads to find the ad.
        </p>
        <ul className="mt-3 space-y-3">
          {f.ads.map((a, i) => (
            <li key={a.id} className="rounded-lg border border-line p-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
                <Field label="Name PMT sees" className="col-span-2 sm:col-span-3">
                  <input className={inputClass} value={a.name} onChange={(e) => updAd(i, { name: e.target.value })} />
                </Field>
                <Field label="Name in Ads Manager" className="col-span-2 sm:col-span-3">
                  <input className={inputClass} value={a.metaName ?? ''} onChange={(e) => updAd(i, { metaName: e.target.value })} />
                </Field>
                <Num label="Spent ($)" value={a.spend} step={0.01} onChange={(v) => updAd(i, { spend: v ?? 0 })} />
                <Num label="Instagram follows" value={a.follows} onChange={(v) => updAd(i, { follows: v ?? 0 })} />
                <Num label="Results (profile + Page visits)" value={a.profileVisits} onChange={(v) => updAd(i, { profileVisits: v ?? 0 })} />
                <Num label="Impressions" value={a.views} onChange={(v) => updAd(i, { views: v ?? 0 })} />
                <Num label="Reach" value={a.reach ?? null} onChange={(v) => updAd(i, { reach: v })} />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {(a.imageKeys ?? []).map((k) => (
                  <span key={k} className="relative">
                    <img src={fileUrl(k, { kind: 'admin' }) ?? undefined} alt="" className="h-14 w-14 rounded-md object-cover" />
                    <button
                      type="button"
                      aria-label="Remove image"
                      onClick={() => updAd(i, { imageKeys: (a.imageKeys ?? []).filter((x) => x !== k) })}
                      className="focus-ring absolute -right-1.5 -top-1.5 rounded-full bg-ink px-1.5 text-xs font-bold text-page"
                    >
                      ×
                    </button>
                  </span>
                ))}
                <label className="focus-ring inline-flex cursor-pointer items-center rounded-md border border-line px-2.5 py-1 text-xs font-semibold hover:bg-surface2">
                  Add ad image
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="sr-only"
                    onChange={(e) => {
                      const list = [...(e.target.files ?? [])];
                      e.target.value = '';
                      if (list.length) void addImages(i, list);
                    }}
                  />
                </label>
                <Button size="sm" icon="trash" className="ml-auto" onClick={() => set({ ads: f.ads.filter((_, j) => j !== i) })}>
                  Remove ad
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Button
          icon="plus"
          className="mt-3"
          onClick={() => set({ ads: [...f.ads, { id: newId('fad'), name: 'New ad', spend: 0, follows: 0, profileVisits: 0, views: 0 }] })}
        >
          Add an ad
        </Button>
      </Card>

      {f.pages.map((p, i) => (
        <Card key={p.platform}>
          <h2 className="text-base font-semibold">{PLATFORM_LABEL[p.platform]}</h2>
          <p className="mt-1 text-sm text-ink2">
            From Business Suite Insights, with the dates set from the start date to “Numbers through”. Leave a box empty if you don't have it.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Num label={`Followers on ${fmtDate(f.start)}`} value={p.startFollowers} onChange={(v) => updPage(i, { startFollowers: v ?? 0 })} />
            <Num label="Followers now (lifetime)" value={p.nowFollowers} onChange={(v) => updPage(i, { nowFollowers: v ?? 0 })} />
            <Num label="Follows" value={p.follows} onChange={(v) => updPage(i, { follows: v ?? 0 })} />
            <Num label="Unfollows" value={p.unfollows} onChange={(v) => updPage(i, { unfollows: v })} />
            <Num label={p.platform === 'facebook' ? 'Page visits' : 'Profile visits'} value={p.visits ?? null} onChange={(v) => updPage(i, { visits: v })} />
            <Num label={p.platform === 'facebook' ? 'Viewers' : 'Reach'} value={p.reach} onChange={(v) => updPage(i, { reach: v })} />
            <Num label="Views" value={p.views} onChange={(v) => updPage(i, { views: v })} />
            <Num label="Content interactions" value={p.interactions} onChange={(v) => updPage(i, { interactions: v })} />
            <Num label="Conversations started" value={p.messagers} onChange={(v) => updPage(i, { messagers: v })} />
          </div>
          <Field label="Top cities (one per line: city, then %)" className="mt-3" hint="From Insights → Audience → Top cities. Leave empty to hide.">
            <textarea
              className={inputClass}
              rows={4}
              value={p.topCities.map((c) => `${c.city} ${Math.round(c.share * 1000) / 10}%`).join('\n')}
              onChange={(e) => updPage(i, { topCities: parseCities(e.target.value) })}
            />
          </Field>
        </Card>
      ))}

      <Card>
        <h2 className="text-base font-semibold">Followers over time</h2>
        <p className="mt-1 text-sm text-ink2">
          Saving adds the start and “Numbers through” counts here automatically. The growth line shows on the dashboard once there are 3 dates.
        </p>
        <ul className="mt-3 divide-y divide-line text-sm">
          {withCounts(f).map((h) => (
            <li key={h.date} className="flex items-center justify-between gap-3 py-1.5">
              <span>{fmtDate(h.date, true)}</span>
              <span className="tabular text-ink2">
                Instagram {h.instagram} · Facebook {h.facebook}
              </span>
              <Button
                size="sm"
                icon="trash"
                disabled={h.date === f.start || h.date === f.asOf}
                onClick={() => set({ history: f.history.filter((x) => x.date !== h.date) })}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">What people are asking</h2>
        <p className="mt-1 text-sm text-ink2">Short summaries of questions in messages and comments. No names.</p>
        <ul className="mt-3 space-y-2">
          {f.questions.map((q, i) => (
            <li key={i} className="flex gap-2">
              <input className={inputClass} value={q} onChange={(e) => set({ questions: f.questions.map((x, j) => (j === i ? e.target.value : x)) })} />
              <Button size="sm" icon="trash" onClick={() => set({ questions: f.questions.filter((_, j) => j !== i) })}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <Button icon="plus" className="mt-3" onClick={() => set({ questions: [...f.questions, ''] })}>
          Add a question
        </Button>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">Why followers matter</h2>
        <p className="mt-1 text-sm text-ink2">The value points {short} reads next to the “what it takes to pay for the ads” box.</p>
        <div className="mt-3">
          <RichEditor key={`why-${resetKey}`} html={f.whyHtml} onChange={(whyHtml) => set({ whyHtml })} label="Why followers matter" />
        </div>
        <div className="mt-3 sm:w-72">
          <Num
            label="Price of Basic + Intermediate + ARC Level 1 ($)"
            value={f.ladderPrice}
            onChange={(v) => set({ ladderPrice: v ?? 0 })}
            hint="Used for “if they keep training” in the value table."
          />
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">Next steps</h2>
        <div className="mt-3">
          <RichEditor key={`next-${resetKey}`} html={f.nextHtml} onChange={(nextHtml) => set({ nextHtml })} label="Next steps" />
        </div>
      </Card>

      {dirty && <Note tone="warn">You have unsaved changes. Press Save at the top.</Note>}
    </>
  );
}

/** History with the start and latest counts filled in from the page numbers. */
function withCounts(f: FollowerCampaign): FollowerCount[] {
  const count = (pick: (p: FollowerPage) => number) => (platform: FollowerPage['platform']) => {
    const p = f.pages.find((x) => x.platform === platform);
    return p ? pick(p) : 0;
  };
  const startOf = count((p) => p.startFollowers);
  const nowOf = count((p) => p.nowFollowers);
  const rows = new Map(f.history.map((h) => [h.date, h]));
  rows.set(f.start, { date: f.start, instagram: startOf('instagram'), facebook: startOf('facebook') });
  const countedOn = f.countedOn ?? f.asOf;
  rows.set(countedOn, { date: countedOn, instagram: nowOf('instagram'), facebook: nowOf('facebook') });
  return [...rows.values()].filter((h) => h.date >= f.start && h.date <= countedOn).sort((a, b) => (a.date < b.date ? -1 : 1));
}

function ReportUpload({ f, onApply }: { f: FollowerCampaign; onApply: (next: FollowerCampaign) => void }) {
  const [res, setRes] = useState<ReadResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  const read = async (list: File[]) => {
    if (!list.length) return;
    setBusy(true);
    try {
      const files = await Promise.all(list.map(async (file) => ({ name: file.name, bytes: new Uint8Array(await file.arrayBuffer()) })));
      setRes(await readFollowerFiles(files, readWorkbook));
    } catch {
      setRes({ report: null, warnings: [], errors: ['Those files could not be opened.'], used: [], skipped: [] });
    } finally {
      setBusy(false);
    }
  };
  const r = res?.report ?? null;
  const ig = r?.pages.instagram;
  const fb = r?.pages.facebook;
  const newAds = r ? r.ads.filter((a) => !f.ads.some((x) => (x.metaName ?? '').toLowerCase() === a.metaName.toLowerCase())) : [];
  const warnings = r
    ? [
        ...res!.warnings,
        ...(r.periodStart !== f.start
          ? [
              `The report starts ${fmtDate(r.periodStart, true)}, but the campaign starts ${fmtDate(f.start, true)}. Pull it from the campaign start so the totals cover the whole campaign.`,
            ]
          : []),
      ]
    : [];

  return (
    <Card>
      <h2 className="text-base font-semibold">Upload the weekly report</h2>
      <p className="mt-1 max-w-3xl text-sm text-ink2">
        Drop in what Claude gives you: the data pack <strong>.zip</strong>, its <strong>.json</strong> or <strong>.csv</strong> files, the <strong>Excel</strong>{' '}
        workbook, or the one-file CSV from the guide. Several files at once is fine. PDFs and screenshots are accepted but skipped, because their numbers are already in
        the data files. Nothing changes for PMT until you press Save.
      </p>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          void read([...e.dataTransfer.files]);
        }}
        className={cx(
          'mt-3 flex cursor-pointer flex-col items-center gap-1 rounded-lg border-2 border-dashed px-4 py-6 text-center',
          over ? 'border-accent bg-accent/5' : 'border-line hover:border-accent',
        )}
      >
        <Icon name="upload" className="h-6 w-6 text-ink2" />
        <span className="font-semibold">{busy ? 'Reading…' : 'Drop the report files here, or tap to choose'}</span>
        <span className="text-xs text-muted">.zip · .json · .csv · .xlsx (PDFs and pictures are skipped)</span>
        <input
          type="file"
          multiple
          accept=".zip,.json,.csv,.xlsx,.pdf,image/*,application/zip,application/json,text/csv"
          className="sr-only"
          disabled={busy}
          onChange={(e) => {
            const list = [...(e.target.files ?? [])];
            e.target.value = '';
            void read(list);
          }}
        />
      </label>
      <p className="mt-2 flex flex-wrap gap-3 text-sm">
        <a className="font-semibold text-accentink underline" href="/report-kit/follower-report-guide.md" download>
          Download the report guide
        </a>
        <a className="font-semibold text-accentink underline" href="/report-kit/follower-report-template.csv" download>
          Download the one-file CSV template
        </a>
      </p>

      {res && !r && (
        <div className="mt-3">
          <Note tone="warn">
            <strong className="font-semibold">Nothing could be used.</strong> {res.errors.join(' ')}
          </Note>
        </div>
      )}
      {r && res && (
        <div className="mt-4 rounded-lg border border-line p-3">
          <p className="text-sm font-semibold">Found:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <strong>Dates:</strong> {fmtRange({ start: r.periodStart, end: r.periodEnd })}
            </li>
            {r.totals && (
              <li>
                <strong>Follower ads:</strong> {r.ads.length} ads, {money(r.totals.spend)} spent, {int(r.totals.reach)} people reached, {int(r.totals.results)} page
                visits, {int(r.totals.igFollows)} Instagram follows
              </li>
            )}
            {(['instagram', 'facebook'] as const).map((p) => {
              const t = p === 'instagram' ? ig : fb;
              const now = r.followers[p];
              const start = r.startFollowers?.[p];
              return t || now ? (
                <li key={p}>
                  <strong>{PLATFORM_LABEL[p]}:</strong> {t ? `${int(t.newFollows)} new follows` : 'no page totals'}
                  {start !== undefined ? `, ${int(start)} followers at the start` : ''}
                  {now ? `, ${int(now.total)} on ${fmtDate(now.date)}` : ''}
                  {t?.conversations != null ? `, ${int(t.conversations)} messaged` : ''}
                </li>
              ) : null;
            })}
            {r.daily.length > 0 && (
              <li>
                <strong>Follows per day:</strong> {r.daily.length} days ({fmtRange({ start: r.daily[0].date, end: r.daily[r.daily.length - 1].date }, false)})
                {r.baseline ? `, with no ads ${fmtRange(r.baseline, false)} to compare against` : ''}
              </li>
            )}
            {r.otherCampaigns?.map((c) => (
              <li key={c.name}>
                <strong>Not counted:</strong> {c.name} ({money(c.spend)}
                {c.detail ? `, ${c.detail}` : ''}), not a follower ad
              </li>
            ))}
            {newAds.length > 0 && (
              <li>
                <strong>New ads to add:</strong> {newAds.map((a) => a.metaName).join(', ')}
              </li>
            )}
          </ul>
          <p className="mt-2 text-xs text-muted">
            Read: {res.used.join(', ') || 'none'}
            {res.skipped.length > 0 && <> · Skipped: {res.skipped.join(', ')}</>}
          </p>
          {warnings.map((w) => (
            <div key={w} className="mt-2">
              <Note tone="warn">{w}</Note>
            </div>
          ))}
          <div className="mt-3 flex gap-2">
            <Button
              variant="primary"
              icon="check"
              onClick={() => {
                onApply(applyFollowerReport(f, r, () => newId('fad')));
                setRes(null);
              }}
            >
              Use these numbers
            </Button>
            <Button onClick={() => setRes(null)}>Cancel</Button>
          </div>
        </div>
      )}
    </Card>
  );
}

/** Every sheet of an Excel workbook, as raw rows. */
async function readWorkbook(bytes: Uint8Array) {
  const sheets = await readXlsxFile(new Blob([bytes as Uint8Array<ArrayBuffer>]));
  return sheets.map((s) => ({ sheet: s.sheet, data: s.data as unknown[][] }));
}

function parseCities(text: string): FollowerPage['topCities'] {
  return text.split('\n').flatMap((line) => {
    const m = /^(.*?)[\s,]+(\d+(?:\.\d+)?)\s*%?\s*$/.exec(line.trim());
    return m && m[1] ? [{ city: m[1].trim(), share: Number(m[2]) / 100 }] : [];
  });
}

function Num({ label, value, onChange, step = 1, hint }: { label: string; value: number | null; onChange: (v: number | null) => void; step?: number; hint?: string }) {
  return (
    <Field label={label} hint={hint}>
      <input
        type="number"
        min={0}
        step={step}
        inputMode="decimal"
        className={inputClass}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value.trim() === '' ? null : Math.max(0, Number(e.target.value)))}
      />
    </Field>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-4">{children}</div>
    </Card>
  );
}
