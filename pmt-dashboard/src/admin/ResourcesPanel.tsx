import { useState } from 'react';
import { api, fileType, fileUrl } from '../api';
import { fmtDate } from '../lib/dates';
import { fileSize, resourceKind, resourceLabel, titleFromFileName } from '../lib/resources';
import type { Resource } from '../lib/types';
import { Icon } from '../ui/Icon';
import { Button, Card, Field, inputClass, Note } from '../ui/ui';
import { PanelTitle, useAdmin } from './AdminApp';
import { newId, videoPoster } from './files';

const ACCEPT = '.pdf,.docx,.pptx,.xlsx,image/jpeg,image/png,image/gif,image/webp,video/mp4,video/quicktime,video/webm';

type Draft = Pick<Resource, 'title' | 'description'>;

export function ResourcesPanel() {
  const { state, save, toast } = useAdmin();
  const [progress, setProgress] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const files = state.resources;
  const dirty = Object.keys(drafts).length > 0;

  const add = async (list: File[]) => {
    const added: Resource[] = [];
    try {
      for (const [i, f] of list.entries()) {
        const label = list.length > 1 ? ` (${i + 1} of ${list.length})` : '';
        setProgress(`Uploading ${f.name}${label} … 0%`);
        const type = fileType(f);
        const poster = type.startsWith('video/') ? await videoPoster(f) : null;
        const posterKey = poster ? (await api.uploadFile(poster, 'image/jpeg')).key : undefined;
        const { key, contentType } = await api.uploadInPieces(f, (p) => setProgress(`Uploading ${f.name}${label} … ${Math.round(p * 100)}%`));
        added.push({
          id: newId('file'),
          title: titleFromFileName(f.name),
          description: '',
          key,
          fileName: f.name,
          contentType,
          size: f.size,
          addedAt: new Date().toISOString(),
          ...(posterKey ? { posterKey } : {}),
        });
      }
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Upload failed.', 'error');
    } finally {
      setProgress(null);
    }
    if (added.length) {
      await save(
        (st) => ({ ...st, resources: [...added, ...st.resources] }),
        `${added.length === 1 ? 'File' : `${added.length} files`} added. PMT can see ${added.length === 1 ? 'it' : 'them'} now.`,
      );
    }
  };

  const draftOf = (r: Resource): Draft => drafts[r.id] ?? { title: r.title, description: r.description };
  const edit = (r: Resource, patch: Partial<Draft>) => setDrafts((d) => ({ ...d, [r.id]: { ...draftOf(r), ...patch } }));

  const saveEdits = async () => {
    const ok = await save(
      (st) => ({ ...st, resources: st.resources.map((r) => (drafts[r.id] ? { ...r, ...drafts[r.id], title: drafts[r.id].title.trim() || r.title } : r)) }),
      'Changes saved.',
    );
    if (ok) setDrafts({});
  };

  const move = (i: number, j: number) =>
    void save((st) => {
      const next = [...st.resources];
      [next[i], next[j]] = [next[j], next[i]];
      return { ...st, resources: next };
    });

  const remove = async (r: Resource) => {
    if (!window.confirm(`Remove “${r.title}”? PMT won’t see it any more.`)) return;
    if (await save((st) => ({ ...st, resources: st.resources.filter((x) => x.id !== r.id) }), 'File removed.')) {
      setDrafts(({ [r.id]: _gone, ...rest }) => rest);
      for (const key of [r.key, r.posterKey]) if (key) void api.deleteFile(key).catch(() => {});
    }
  };

  return (
    <>
      <PanelTitle title="Files for PMT">
        Ad layouts, social ideas guides and anything else you want PMT to have. They show at the bottom of PMT’s dashboard, where PMT can view or download them.
      </PanelTitle>
      {!state.settings.sections.resources && <Note tone="warn">This section is switched off in Settings, so PMT can’t see these files right now.</Note>}

      <Card>
        <label className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-line px-4 py-8 text-center hover:border-accent">
          <Icon name="upload" className="h-7 w-7 text-ink2" />
          <span className="font-semibold">{progress ?? 'Choose files to add'}</span>
          <span className="text-sm text-ink2">PDF, Word, PowerPoint, Excel or images up to 20 MB · videos up to 300 MB</span>
          <input
            type="file"
            multiple
            accept={ACCEPT}
            className="sr-only"
            disabled={!!progress}
            onChange={(e) => {
              const list = [...(e.target.files ?? [])];
              e.target.value = '';
              if (list.length) void add(list);
            }}
          />
        </label>
      </Card>

      {files.length > 0 && (
        <>
          {dirty && (
            <div className="sticky top-14 z-30 -mx-2 flex items-center justify-end gap-2 rounded-lg px-2 py-2 backdrop-blur">
              <span className="text-sm text-ink2">Unsaved changes</span>
              <Button onClick={() => setDrafts({})}>Undo</Button>
              <Button variant="primary" icon="check" onClick={() => void saveEdits()}>
                Save changes
              </Button>
            </div>
          )}
          <ul className="space-y-3">
            {files.map((r, i) => {
              const d = draftOf(r);
              const kind = resourceKind(r);
              const thumb = kind === 'image' ? fileUrl(r.key, { kind: 'admin' }) : kind === 'video' ? fileUrl(r.posterKey, { kind: 'admin' }) : null;
              const url = fileUrl(r.key, { kind: 'admin' });
              return (
                <li key={r.id}>
                  <Card className="grid grid-cols-1 gap-4 sm:grid-cols-[120px,minmax(0,1fr),auto]">
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-surface2 text-ink2">
                      {thumb ? <img src={thumb} alt="" className="h-full w-full object-cover" /> : <Icon name={kind === 'video' ? 'video' : 'file'} className="h-8 w-8" />}
                    </div>
                    <div className="space-y-2">
                      <Field label="Title PMT sees">
                        <input className={inputClass} value={d.title} onChange={(e) => edit(r, { title: e.target.value })} />
                      </Field>
                      <Field label="Short description (optional)">
                        <textarea className={inputClass} rows={2} value={d.description} onChange={(e) => edit(r, { description: e.target.value })} />
                      </Field>
                      <p className="text-xs text-muted">
                        {r.fileName} · {resourceLabel(r)} · {fileSize(r.size)} · added {fmtDate(r.addedAt.slice(0, 10))}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-start gap-1.5 sm:flex-col sm:items-stretch">
                      {url && (
                        <a href={url} target="_blank" rel="noopener" className="focus-ring inline-flex items-center justify-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm font-semibold hover:bg-surface2">
                          <Icon name="external" /> Open
                        </a>
                      )}
                      <Button size="sm" icon="up" disabled={i === 0} onClick={() => move(i, i - 1)} title="Move up">
                        Up
                      </Button>
                      <Button size="sm" icon="down" disabled={i === files.length - 1} onClick={() => move(i, i + 1)} title="Move down">
                        Down
                      </Button>
                      <Button size="sm" icon="trash" onClick={() => void remove(r)}>
                        Remove
                      </Button>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
