import { useState } from 'react';
import { fileUrl } from '../../api';
import { derive, type EntityRow } from '../../lib/ads';
import { int, money, pct } from '../../lib/format';
import { adSetLocation } from '../../lib/model';
import type { Creative } from '../../lib/types';
import { Badge, Card, Modal, Note, Section, Swatch } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function CreativesSection({ m, state, colors, access, hidden }: SectionProps & { hidden: boolean }) {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const rowsByAd = new Map(m.adRows.map((r) => [r.key, r]));
  const rowsByAdSet = new Map(m.adSetRows.map((r) => [r.key, r]));
  const creatives: { c: Creative; row: EntityRow | null }[] = state.creatives
    .filter((c) => !m.adSets || m.adSets.includes(c.adSet))
    .map((c) => ({ c, row: rowsByAd.get(c.adName) ?? rowsByAdSet.get(c.adSet) ?? null }));
  // Ads in the data without creative details still get a card.
  for (const r of m.adRows) {
    if (!state.creatives.some((c) => c.adName === r.key)) creatives.push({ c: { adName: r.key, adSet: r.adSet, headline: '', primaryText: '' }, row: r });
  }
  const ranked = creatives.sort((a, b) => (cpv(a.row) ?? Infinity) - (cpv(b.row) ?? Infinity));

  return (
    <Section id="ads" title="The ads" subtitle="Every ad that ran, ranked by cost per website visit (cheapest first)." hiddenForClient={hidden}>
      {!ranked.length ? (
        <Note>No ads to show yet.</Note>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ranked.map(({ c, row }, i) => {
            const loc = adSetLocation(c.adSet, state);
            const li = state.settings.locations.findIndex((l) => l.name === loc);
            const src = fileUrl(c.imageKey, access);
            return (
              <Card key={c.adName} pad={false} className="flex flex-col overflow-hidden">
                <div className="relative aspect-[4/3] bg-navy sm:aspect-square">
                  {src ? (
                    <button type="button" className="focus-ring block h-full w-full" onClick={() => setZoom({ src, alt: c.headline || c.adName })}>
                      <img src={src} alt={`Ad: ${c.headline || c.adName}`} className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ) : (
                    <div className="flex h-full flex-col justify-end bg-gradient-to-br from-navy to-navydeep p-4">
                      <p className="font-display text-2xl leading-[1.05] tracking-wide text-white">{c.headline || c.adName}</p>
                      <p className="mt-2 text-[11px] text-white/60">Ad image not added yet</p>
                    </div>
                  )}
                  <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">#{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="flex items-center gap-1.5 text-xs text-ink2">
                    <Swatch color={li >= 0 ? colors.loc[li % colors.loc.length] : colors.mutedMark} />
                    {loc ?? 'No location'} · {c.adName}
                  </p>
                  {c.headline && <p className="mt-1.5 font-semibold leading-snug">“{c.headline}”</p>}
                  {c.primaryText && <PrimaryText text={c.primaryText} />}
                  <dl className="mt-auto grid grid-cols-2 gap-x-3 gap-y-2 pt-4 text-sm">
                    <Stat k="Website visits" v={int(row?.metrics.results)} strong />
                    <Stat k="Cost / visit" v={money(cpv(row))} strong />
                    <Stat k="Click rate" v={pct(row ? derive(row.metrics).linkCtr : null, 2)} />
                    <Stat k="Spend" v={money(row?.metrics.spend)} />
                  </dl>
                  {i === 0 && ranked.length > 1 && (
                    <div className="mt-3">
                      <Badge tone="gold" icon="star">
                        Lowest cost per visit
                      </Badge>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
      <Modal open={!!zoom} onClose={() => setZoom(null)} title={zoom?.alt ?? ''} wide>
        {zoom && <img src={zoom.src} alt={zoom.alt} className="mx-auto max-h-[70vh] w-auto rounded-lg" />}
      </Modal>
    </Section>
  );
}

function cpv(row: EntityRow | null): number | null {
  return row ? derive(row.metrics).costPerResult : null;
}

function Stat({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div>
      <dt className="text-xs text-muted">{k}</dt>
      <dd className={strong ? 'tabular text-base font-semibold' : 'tabular text-ink2'}>{v}</dd>
    </div>
  );
}

function PrimaryText({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const long = text.length > 110;
  return (
    <div className="mt-1.5 text-[13px] leading-snug text-ink2">
      <p className="whitespace-pre-line">{open || !long ? text : `${text.slice(0, 105)}…`}</p>
      {long && (
        <button type="button" className="focus-ring mt-1 rounded text-xs font-semibold text-accentink" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'Show less' : 'Read the full ad text'}
        </button>
      )}
    </div>
  );
}
