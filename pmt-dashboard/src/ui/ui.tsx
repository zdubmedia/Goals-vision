import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { GLOSSARY, type TermKey } from '../lib/glossary';
import { deltaPct } from '../lib/format';
import { toCsv } from '../lib/tabular';
import { Icon, type IconName } from './Icon';

export function cx(...c: (string | false | null | undefined)[]): string {
  return c.filter(Boolean).join(' ');
}

// ---------- Tooltip / info popover ----------

/** An "i" button that explains a number in plain words (hover, focus or tap). */
export function InfoTip({ term, children, label }: { term?: TermKey; children?: ReactNode; label?: string }) {
  const t = term ? GLOSSARY[term] : null;
  const body = children ?? (
    <>
      <span className="block">{t?.plain}</span>
      {'technical' in (t ?? {}) && (t as { technical?: string }).technical && (
        <span className="mt-1.5 block text-xs text-muted">Meta calls this: {(t as { technical?: string }).technical}</span>
      )}
    </>
  );
  return <Popover label={label ?? `What is ${t?.label ?? 'this'}?`} content={body} />;
}

export function Popover({ label, content, trigger }: { label: string; content: ReactNode; trigger?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const id = useId();

  useLayoutEffect(() => {
    if (!open || !btn.current) return;
    const r = btn.current.getBoundingClientRect();
    const width = Math.min(288, window.innerWidth - 24);
    const left = Math.max(12, Math.min(r.left + r.width / 2 - width / 2, window.innerWidth - width - 12));
    const below = r.bottom + 8;
    setPos({ top: below + 160 > window.innerHeight && r.top > 180 ? r.top - 8 : below, left });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent && e.key !== 'Escape') return;
      if (e instanceof MouseEvent && btn.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    window.addEventListener('keydown', close);
    window.addEventListener('mousedown', close);
    window.addEventListener('scroll', close, true);
    return () => {
      window.removeEventListener('keydown', close);
      window.removeEventListener('mousedown', close);
      window.removeEventListener('scroll', close, true);
    };
  }, [open]);

  const above = pos && btn.current && pos.top < btn.current.getBoundingClientRect().top;
  return (
    <>
      <button
        ref={btn}
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="no-print focus-ring inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-muted hover:text-ink"
      >
        {trigger ?? <Icon name="info" className="h-3.5 w-3.5" />}
      </button>
      {open &&
        pos &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            style={{ top: pos.top, left: pos.left, width: Math.min(288, window.innerWidth - 24), transform: above ? 'translateY(-100%)' : undefined }}
            className="pointer-events-none fixed z-[100] rounded-lg border border-line bg-surface px-3 py-2.5 text-left text-[13px] font-normal normal-case leading-snug tracking-normal text-ink2 shadow-lg"
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
}

// ---------- Layout ----------

export function Section({
  id,
  title,
  subtitle,
  actions,
  hiddenForClient,
  children,
}: {
  id: string;
  title: string;
  subtitle?: ReactNode;
  actions?: ReactNode;
  hiddenForClient?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cx('scroll-mt-28', hiddenForClient && 'opacity-60')}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div className="min-w-0">
          <h2 id={`${id}-title`} className="speedlines font-display text-[26px] leading-none tracking-wide text-ink sm:text-[30px]">
            {title}
          </h2>
          {subtitle && <p className="mt-1.5 max-w-3xl text-sm text-ink2">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hiddenForClient && <Badge tone="neutral" icon="eyeOff">Hidden from PMT</Badge>}
          {actions}
        </div>
      </div>
      {children}
    </section>
  );
}

export function Card({ className, children, pad = true }: { className?: string; children: ReactNode; pad?: boolean }) {
  return <div className={cx('print-break-avoid rounded-xl border border-line bg-surface shadow-card', pad && 'p-4 sm:p-5', className)}>{children}</div>;
}

export function Note({ children, tone = 'info' }: { children: ReactNode; tone?: 'info' | 'warn' }) {
  return (
    <p className={cx('flex items-start gap-2 rounded-lg px-3 py-2 text-[13px] leading-snug', tone === 'warn' ? 'bg-warn/15 text-ink' : 'bg-surface2 text-ink2')}>
      <Icon name={tone === 'warn' ? 'alert' : 'info'} className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export type Tone = 'good' | 'warn' | 'bad' | 'neutral' | 'accent' | 'gold';

export function Badge({ tone = 'neutral', icon, children }: { tone?: Tone; icon?: IconName; children: ReactNode }) {
  const styles: Record<Tone, string> = {
    good: 'bg-good/10 text-goodink ring-good/30',
    warn: 'bg-warn/20 text-ink ring-warn/50',
    bad: 'bg-bad/10 text-badink ring-bad/30',
    neutral: 'bg-surface2 text-ink2 ring-line',
    accent: 'bg-accent/10 text-accentink ring-accent/30',
    gold: 'bg-gold/20 text-ink ring-gold/50',
  };
  return (
    <span className={cx('inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset', styles[tone])}>
      {icon && <Icon name={icon} className="h-3 w-3" />}
      {children}
    </span>
  );
}

/** Change vs. the previous period, colored by whether up is good. */
export function Delta({ value, upIsGood = true, vs }: { value: number | null; upIsGood?: boolean; vs: string }) {
  if (value === null || !Number.isFinite(value)) return null;
  const flat = Math.abs(value) < 0.005;
  const good = flat ? null : value > 0 === upIsGood;
  return (
    <span className="inline-flex items-center gap-1 text-xs">
      <span className={cx('inline-flex items-center gap-0.5 font-semibold', good === null ? 'text-ink2' : good ? 'text-goodink' : 'text-badink')}>
        {!flat && <Icon name={value > 0 ? 'up' : 'down'} className="h-3 w-3" />}
        {deltaPct(value)}
      </span>
      <span className="text-muted">vs {vs}</span>
    </span>
  );
}

// ---------- Controls ----------

export function Seg<T extends string>({
  value,
  options,
  onChange,
  label,
  size = 'md',
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
  size?: 'sm' | 'md';
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex max-w-full overflow-x-auto rounded-lg border border-line bg-surface2 p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={cx(
            'focus-ring whitespace-nowrap rounded-md font-semibold transition-colors',
            size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-[13px]',
            value === o.value ? 'bg-surface text-ink shadow-sm ring-1 ring-line' : 'text-ink2 hover:text-ink',
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Button({
  children,
  onClick,
  variant = 'secondary',
  icon,
  type = 'button',
  disabled,
  size = 'md',
  className,
  title,
}: {
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  icon?: IconName;
  type?: 'button' | 'submit';
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  title?: string;
}) {
  const v = {
    primary: 'bg-accent text-white hover:brightness-95 shadow-sm',
    secondary: 'bg-surface text-ink ring-1 ring-inset ring-line hover:bg-surface2',
    ghost: 'text-ink2 hover:bg-surface2 hover:text-ink',
    danger: 'bg-surface text-badink ring-1 ring-inset ring-bad/40 hover:bg-bad/10',
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={!children ? title : undefined}
      className={cx(
        'focus-ring inline-flex items-center justify-center gap-1.5 rounded-md font-semibold transition disabled:cursor-not-allowed disabled:opacity-50',
        size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-2 text-sm',
        v,
        className,
      )}
    >
      {icon && <Icon name={icon} className={size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'} />}
      {children}
    </button>
  );
}

// ---------- Overlays ----------

export function Modal({ open, onClose, title, children, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className={cx('w-[calc(100vw-24px)] rounded-xl border border-line bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/50', wide ? 'max-w-4xl' : 'max-w-lg')}
    >
      {open && (
        <div className="flex max-h-[85vh] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
            <h2 className="text-base font-semibold">{title}</h2>
            <Button variant="ghost" size="sm" icon="close" onClick={onClose} title="Close" />
          </div>
          <div className="overflow-y-auto px-5 py-4">{children}</div>
        </div>
      )}
    </dialog>
  );
}

export function Drawer({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div className="no-print fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <aside role="dialog" aria-modal="true" aria-label={title} className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-2xl tracking-wide">{title}</h2>
          <Button variant="ghost" size="sm" icon="close" onClick={onClose} title="Close" />
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
      </aside>
    </div>,
    document.body,
  );
}

// ---------- Table ----------

export interface Column<T> {
  key: string;
  label: string;
  term?: TermKey;
  render: (row: T) => ReactNode;
  sort?: (row: T) => number | string | null;
  csv?: (row: T) => string | number | null;
  align?: 'left' | 'right';
  className?: string;
}

export function downloadText(filename: string, text: string, type = 'text/csv') {
  const blob = new Blob([text], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function SortTable<T>({
  rows,
  columns,
  rowKey,
  initialSort,
  highlight,
  csvName,
  caption,
  footer,
  minWidth = 640,
}: {
  rows: T[];
  columns: Column<T>[];
  rowKey: (r: T) => string;
  initialSort?: { key: string; dir: 'asc' | 'desc' };
  highlight?: (r: T) => boolean;
  csvName?: string;
  caption: string;
  footer?: ReactNode;
  minWidth?: number;
}) {
  const [sort, setSort] = useState(initialSort ?? null);
  const sorted = useMemo(() => {
    if (!sort) return rows;
    const col = columns.find((c) => c.key === sort.key);
    if (!col?.sort) return rows;
    return [...rows].sort((a, b) => {
      const x = col.sort!(a);
      const y = col.sort!(b);
      if (x === null) return 1;
      if (y === null) return -1;
      const r = x < y ? -1 : x > y ? 1 : 0;
      return sort.dir === 'asc' ? r : -r;
    });
  }, [rows, columns, sort]);

  const exportCsv = () => {
    const headers = columns.map((c) => c.label);
    const data = sorted.map((r) => columns.map((c) => (c.csv ? c.csv(r) : String(c.render(r) ?? ''))));
    downloadText(`${csvName}.csv`, toCsv(headers, data));
  };

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table className="w-full border-collapse text-sm" style={{ minWidth }}>
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-line">
              {columns.map((c) => {
                const active = sort?.key === c.key;
                return (
                  <th
                    key={c.key}
                    scope="col"
                    aria-sort={active ? (sort!.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                    className={cx('whitespace-nowrap px-2 py-2 text-xs font-semibold text-muted first:pl-0 last:pr-0', c.align === 'right' ? 'text-right' : 'text-left')}
                  >
                    <span className={cx('inline-flex items-center gap-1', c.align === 'right' && 'flex-row-reverse')}>
                      {c.sort ? (
                        <button
                          type="button"
                          className="focus-ring inline-flex items-center gap-1 rounded hover:text-ink"
                          onClick={() => setSort({ key: c.key, dir: active && sort!.dir === 'desc' ? 'asc' : 'desc' })}
                        >
                          {c.label}
                          <Icon name="chevron" className={cx('h-3 w-3 transition', active ? 'opacity-100' : 'opacity-30', active && sort!.dir === 'asc' && 'rotate-180')} />
                        </button>
                      ) : (
                        c.label
                      )}
                      {c.term && <InfoTip term={c.term} />}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={rowKey(r)} className={cx('border-b border-line/70 last:border-0', highlight?.(r) && 'bg-gold/10')}>
                {columns.map((c) => (
                  <td key={c.key} className={cx('tabular px-2 py-2.5 align-middle first:pl-0 last:pr-0', c.align === 'right' ? 'text-right' : 'text-left', c.className)}>
                    {c.render(r)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {footer}
        </table>
      </div>
      {csvName && (
        <div className="no-print mt-3 flex justify-end">
          <Button size="sm" variant="ghost" icon="download" onClick={exportCsv}>
            Download CSV
          </Button>
        </div>
      )}
    </div>
  );
}

// ---------- Forms (admin) ----------

export function Field({ label, hint, children, className }: { label: string; hint?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <label className={cx('block', className)}>
      <span className="mb-1 block text-xs font-semibold text-ink2">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

export const inputClass =
  'focus-ring block w-full rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm text-ink placeholder:text-muted disabled:opacity-60';

export function Swatch({ color, className }: { color: string; className?: string }) {
  return <span aria-hidden className={cx('inline-block h-2.5 w-2.5 shrink-0 rounded-full', className)} style={{ background: color }} />;
}
