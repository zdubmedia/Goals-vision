import { useState } from 'react';
import { fileUrl } from '../../api';
import { fmtDate } from '../../lib/dates';
import { fileSize, resourceKind, resourceLabel } from '../../lib/resources';
import type { Resource } from '../../lib/types';
import { Icon } from '../../ui/Icon';
import { Card, cx, Modal, Note, Section } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

const linkClass = 'focus-ring inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold';

export function ResourcesSection({ state, access, mode, hidden }: SectionProps & { hidden: boolean }) {
  const [open, setOpen] = useState<Resource | null>(null);
  const files = state.resources;
  if (!files.length && mode === 'client') return null;

  return (
    <Section
      id="files"
      title={`Files from ${state.settings.agencyName}`}
      subtitle="Ad layouts, guides and other files to look through or download."
      hiddenForClient={hidden}
    >
      {!files.length ? (
        <Note>No files yet. Add them in the “Files for PMT” tab.</Note>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((r) => {
            const kind = resourceKind(r);
            const url = fileUrl(r.key, access);
            const thumb = kind === 'image' ? url : kind === 'video' ? fileUrl(r.posterKey, access) : null;
            const viewInPage = kind === 'image' || kind === 'video';
            return (
              <Card key={r.id} pad={false} className="flex flex-col overflow-hidden">
                <button
                  type="button"
                  onClick={() => (viewInPage ? setOpen(r) : url && window.open(url, '_blank', 'noopener'))}
                  className="focus-ring group relative block aspect-[16/9] w-full overflow-hidden bg-surface2"
                  aria-label={`Open ${r.title}`}
                >
                  {thumb ? (
                    <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
                  ) : (
                    <span className="flex h-full w-full flex-col items-center justify-center gap-1 text-ink2">
                      <Icon name={kind === 'video' ? 'video' : 'file'} className="h-10 w-10" />
                      <span className="text-xs font-semibold uppercase tracking-wide">{resourceLabel(r)}</span>
                    </span>
                  )}
                  {kind === 'video' && thumb && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full bg-black/60 p-3 text-white">
                        <Icon name="video" className="h-6 w-6" />
                      </span>
                    </span>
                  )}
                </button>
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-semibold leading-snug">{r.title}</p>
                  {r.description && <p className="mt-1 whitespace-pre-line text-sm text-ink2">{r.description}</p>}
                  <p className="mt-2 text-xs text-muted">
                    {resourceLabel(r)} · {fileSize(r.size)} · added {fmtDate(r.addedAt.slice(0, 10))}
                  </p>
                  {url && (
                    <div className="no-print mt-auto flex flex-wrap gap-2 pt-3">
                      {kind !== 'doc' &&
                        (viewInPage ? (
                          <button type="button" onClick={() => setOpen(r)} className={cx(linkClass, 'bg-accent text-white hover:brightness-105')}>
                            <Icon name="eye" /> View
                          </button>
                        ) : (
                          <a href={url} target="_blank" rel="noopener" className={cx(linkClass, 'bg-accent text-white hover:brightness-105')}>
                            <Icon name="external" /> Open
                          </a>
                        ))}
                      <a href={`${url}&dl=1`} download={r.fileName} className={cx(linkClass, 'border border-line text-ink hover:bg-surface2')}>
                        <Icon name="download" /> Download
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.title ?? ''} wide>
        {open &&
          (resourceKind(open) === 'video' ? (
            <video
              src={fileUrl(open.key, access) ?? undefined}
              poster={fileUrl(open.posterKey, access) ?? undefined}
              controls
              playsInline
              preload="metadata"
              className="mx-auto max-h-[75vh] w-full rounded-lg bg-black"
            />
          ) : (
            <img src={fileUrl(open.key, access) ?? undefined} alt={open.title} className="mx-auto max-h-[75vh] w-auto rounded-lg" />
          ))}
      </Modal>
    </Section>
  );
}
