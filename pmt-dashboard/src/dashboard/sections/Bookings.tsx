import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { fileUrl } from '../../api';
import { classTitle, groupClasses, type ClassGroup, type ClassStatus } from '../../lib/bookings';
import { fmtDate, fmtRange } from '../../lib/dates';
import { fmtSnapTime, int, money } from '../../lib/format';
import type { SeatSnapshot } from '../../lib/types';
import { Icon } from '../../ui/Icon';
import { Badge, Card, cx, InfoTip, Modal, Note, Section, Swatch } from '../../ui/ui';
import type { SectionProps } from '../Dashboard';

export function BookingsSection({ m, state, colors, access, mode, hidden }: SectionProps & { hidden: boolean }) {
  const [shot, setShot] = useState<{ src: string; title: string } | null>(null);
  const b = m.bookings;
  const groups = groupClasses(b.statuses);
  const locs = state.settings.locations;
  const asOf = m.bookingRange.end;
  const running = [{ date: m.bookingRange.start, total: 0 }, ...b.running.filter((r) => r.date !== m.bookingRange.start)];

  return (
    <Section
      id="bookings"
      title="Bookings tracker"
      subtitle={
        <>
          Seats sold, worked out from screenshots of the registration pages ("seats left").{' '}
          <strong className="font-semibold text-ink">Estimated bookings, not directly attributed to ads</strong>: they include people who found PMT any other way.
        </>
      }
      hiddenForClient={hidden}
    >
      {!state.classes.length ? (
        <Note>No registration screenshots have been added yet.</Note>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr),minmax(0,1.3fr)]">
            <Card>
              <div className="flex items-start justify-between">
                <p className="flex items-center gap-1 text-[13px] font-semibold text-ink2">
                  Seats sold {fmtRange(m.bookingRange, false)} <InfoTip term="bookings" />
                </p>
                <Badge tone="gold">Estimate</Badge>
              </div>
              <p className="mt-2 text-6xl font-semibold leading-none tracking-tight">{int(b.soldInPeriod)}</p>
              <p className="mt-2 text-sm text-ink2">
                ≈ {money(b.revenue, 0)} in class fees · ≈ {money(m.profitAllSeats, 0)} profit for {state.settings.clientShortName} ({Math.round(m.profitMargin * 1000) / 10}%)
              </p>
              <ul className="mt-4 space-y-2">
                {locs
                  .filter((l) => !m.adSets || (b.byLocation[l.name] ?? 0) > 0 || state.classes.some((c) => c.location === l.name && b.statuses.some((s) => s.cls.id === c.id)))
                  .map((l) => {
                    const i = locs.indexOf(l);
                    const n = b.byLocation[l.name] ?? 0;
                    const max = Math.max(...Object.values(b.byLocation), 1);
                    return (
                      <li key={l.name} className="grid grid-cols-[90px,1fr,32px] items-center gap-2 text-sm">
                        <span className="flex items-center gap-1.5">
                          <Swatch color={colors.loc[i % colors.loc.length]} /> {l.name}
                        </span>
                        <span className="h-2.5 overflow-hidden rounded-full bg-surface2">
                          <span className="block h-full rounded-full" style={{ width: `${(n / max) * 100}%`, background: colors.loc[i % colors.loc.length] }} />
                        </span>
                        <span className="tabular text-right font-semibold">{n}</span>
                      </li>
                    );
                  })}
              </ul>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-ink2">Seats sold since {fmtDate(m.bookingRange.start)}, running total</p>
              <div className="mt-2 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={running} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke={colors.grid} />
                    <XAxis dataKey="date" tickFormatter={(d) => fmtDate(d)} stroke={colors.axis} fontSize={11} tickLine={false} minTickGap={16} />
                    <YAxis stroke={colors.axis} fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Tooltip
                      content={({ active, payload }) =>
                        active && payload?.length ? (
                          <div className="rounded-lg border border-line bg-surface px-3 py-2 text-xs shadow-lg">
                            <p className="text-ink2">By {fmtDate(payload[0].payload.date, true)}</p>
                            <p className="font-semibold text-ink">{int(payload[0].payload.total)} seats sold</p>
                          </div>
                        ) : null
                      }
                    />
                    <Area
                      type="stepAfter"
                      dataKey="total"
                      stroke={colors.accent}
                      strokeWidth={2}
                      fill={colors.accentSoft}
                      dot={{ r: 3.5, fill: colors.accent, stroke: colors.surface, strokeWidth: 2 }}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-1 text-xs text-muted">Dots are the days screenshots were taken. Sales between screenshots show up on the next screenshot.</p>
            </Card>
          </div>

          <ClassTotals groups={groups} locs={locs} colors={colors} range={fmtRange(m.bookingRange, false)} />
          {mode === 'admin' && (
            <details className="no-print group rounded-xl border border-line">
              <summary className="focus-ring flex cursor-pointer list-none flex-wrap items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-ink2 hover:text-ink">
                <Icon name="chevron" className="h-4 w-4 -rotate-90 transition group-open:rotate-0" />
                Every class in detail (seat maps and screenshots)
                <Badge tone="neutral" icon="eyeOff">
                  Only you see this
                </Badge>
              </summary>
              <div className="space-y-4 px-4 pb-4">
              {locs.map((l, li) => {
                const lg = groups.filter((g) => g.location === l.name);
                if (!lg.length) return null;
                return (
                  <div key={l.name}>
                    <h3 className="mb-2 flex items-center gap-2 text-base font-semibold">
                      <Swatch color={colors.loc[li % colors.loc.length]} className="h-3 w-3" /> {l.name}
                      <span className="text-sm font-normal text-muted">· {int(b.byLocation[l.name] ?? 0)} seats sold</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {lg.map((g) => (
                        <ClassCard key={g.key} g={g} asOf={asOf} colors={colors} onShot={(s, title) => setShot({ src: s, title })} access={access} />
                      ))}
                    </div>
                  </div>
                );
              })}
              <Legend colors={colors} />
              </div>
            </details>
          )}
        </div>
      )}
      <Modal open={!!shot} onClose={() => setShot(null)} title={shot?.title ?? ''} wide>
        {shot && <img src={shot.src} alt={shot.title} className="mx-auto max-h-[75vh] w-auto rounded-lg" />}
      </Modal>
    </Section>
  );
}

const TIME_LABEL = { AM: 'Morning', PM: 'Afternoon', '': '' } as const;

/** Seats booked in the period, one line per class. Classes with none booked are left off. */
function ClassTotals({
  groups,
  locs,
  colors,
  range,
}: {
  groups: ClassGroup[];
  locs: SectionProps['state']['settings']['locations'];
  colors: SectionProps['colors'];
  range: string;
}) {
  const booked = groups.filter((g) => g.soldInPeriod > 0);
  return (
    <Card>
      <h3 className="text-base font-semibold">Seats booked by class, {range}</h3>
      {!booked.length ? (
        <p className="mt-2 text-sm text-ink2">No seats were booked in these dates.</p>
      ) : (
        <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {locs.map((l, li) => {
            const lg = booked.filter((g) => g.location === l.name);
            if (!lg.length) return null;
            const total = lg.reduce((n, g) => n + g.soldInPeriod, 0);
            return (
              <div key={l.name}>
                <p className="flex items-center gap-2 border-b border-line pb-1.5 text-sm font-semibold">
                  <Swatch color={colors.loc[li % colors.loc.length]} className="h-3 w-3" /> {l.name}
                  <span className="ml-auto tabular text-ink2">{int(total)} seats</span>
                </p>
                <ul className="divide-y divide-line">
                  {lg.map((g) => {
                    const first = g.members[0].cls;
                    const name = g.kind === 'Intermediate' ? 'Intermediate (IRC + 1DPC)' : first.format === 'eMTC' ? 'Basic · online classroom' : 'Basic · in-person classroom';
                    const when = [fmtRange({ start: g.startDate, end: g.endDate }, false), TIME_LABEL[g.time]].filter(Boolean).join(' · ');
                    const split = g.members.length > 1 ? g.members.map((x) => `${x.cls.format} ${x.soldInPeriod}`).join(' · ') : '';
                    return (
                      <li key={g.key} className="flex items-center justify-between gap-3 py-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-tight">{name}</p>
                          <p className="text-xs text-muted">
                            {when}
                            {split && ` · ${split}`}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          {g.seatsLeft === 0 && <Badge tone="accent">Sold out</Badge>}
                          <span className="tabular text-lg font-semibold">{int(g.soldInPeriod)}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
      <p className="mt-3 text-xs text-muted">Classes with no seats booked in these dates are left off.</p>
    </Card>
  );
}

function Legend({ colors }: { colors: SectionProps['colors'] }) {
  return (
    <p className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink2">
      <span className="inline-flex items-center gap-1.5">
        <Swatch color={colors.before} /> Booked before tracking started
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Swatch color={colors.accent} /> Sold during this period
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Swatch color={colors.mutedMark} /> Sold at another time
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-2.5 w-2.5 rounded-full border border-line bg-surface2" /> Open seat
      </span>
    </p>
  );
}

function NormalBadge({ s }: { s: ClassStatus | ClassGroup }) {
  const st = 'vsNormal' in s ? s : null;
  if (!st || !st.vsNormal) return null;
  if (st.vsNormal === 'selling') return <Badge tone="neutral">Still selling</Badge>;
  const label = st.normal ? `normal is about ${st.normal.seats} of ${st.capacity}` : '';
  if (st.vsNormal === 'above')
    return (
      <span title={label}>
        <Badge tone="good" icon="up">
          Above normal
        </Badge>
      </span>
    );
  if (st.vsNormal === 'at') return <Badge tone="neutral">About normal</Badge>;
  return (
    <span title={label}>
      <Badge tone="warn" icon="down">
        Below normal
      </Badge>
    </span>
  );
}

function ClassCard({
  g,
  asOf,
  colors,
  onShot,
  access,
}: {
  g: ClassGroup;
  asOf: string;
  colors: SectionProps['colors'];
  onShot: (src: string, title: string) => void;
  access: SectionProps['access'];
}) {
  const first = g.members[0];
  const title = g.kind === 'Intermediate' ? 'Intermediate' : classTitle(first.cls);
  const dates = g.startDate === g.endDate ? fmtDate(g.startDate) : fmtRange({ start: g.startDate, end: g.endDate }, false);
  const past = g.endDate < asOf;
  const soldOut = g.seatsLeft === 0;
  const dropped = g.members.some((m) => m.droppedOff);
  const single = g.members.length === 1 ? first : null;

  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold leading-tight">
            {title} · {dates}
          </p>
          <p className="mt-0.5 text-xs text-muted">
            {g.kind === 'Basic' ? (first.cls.format === 'eMTC' ? 'Online classroom + riding' : 'In-person classroom + riding') : 'IRC + 1DPC licensing option'}
            {past && ' · class has run'}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          {soldOut && <Badge tone="accent">Sold out</Badge>}
          {single && <NormalBadge s={single} />}
        </div>
      </div>

      <SeatBar g={g} colors={colors} />
      <p className="mt-1.5 text-sm text-ink2">
        <span className="font-semibold text-ink">
          {g.booked} of {g.capacity}
        </span>{' '}
        booked
        {g.soldInPeriod > 0 && (
          <>
            {' '}
            · <span className="font-semibold text-accentink">+{g.soldInPeriod}</span> this period
          </>
        )}
        {g.seatsLeft !== null && g.seatsLeft > 0 && <> · {g.seatsLeft} left</>}
      </p>
      {g.members[0].capacityReason && single && single.capacity !== 12 && <p className="mt-0.5 text-xs text-muted">{single.capacityReason}.</p>}

      {g.members.length > 1 && (
        <ul className="mt-2 space-y-1 text-xs">
          {g.members.map((s) => (
            <li key={s.cls.id} className="flex items-center justify-between gap-2 rounded-md bg-surface2 px-2 py-1">
              <span className="font-semibold">{s.cls.format === 'IRC' ? 'IRC (already licensed)' : '1DPC (licensing option)'}</span>
              <span className="tabular text-ink2">
                {s.booked} of {s.capacity}
                {s.soldInPeriod > 0 && <span className="font-semibold text-accentink"> · +{s.soldInPeriod}</span>}
              </span>
            </li>
          ))}
        </ul>
      )}

      {dropped && (
        <p className="mt-2 flex items-start gap-1.5 rounded-md bg-warn/15 px-2 py-1.5 text-xs text-ink">
          <Icon name="alert" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Dropped off the registration page. Sold out, or registration closed? Showing the last known count.
        </p>
      )}

      <Timeline members={g.members} access={access} onShot={onShot} title={`${title} · ${dates}`} />
    </Card>
  );
}

function SeatBar({ g, colors }: { g: ClassGroup; colors: SectionProps['colors'] }) {
  const other = Math.max(0, g.booked - g.bookedBeforeTracking - g.soldInPeriod);
  const segs = [
    { n: Math.min(g.bookedBeforeTracking, g.booked), c: colors.before, label: 'booked before tracking' },
    { n: other, c: colors.mutedMark, label: 'sold at another time' },
    { n: g.soldInPeriod, c: colors.accent, label: 'sold this period' },
  ];
  return (
    <div
      className="mt-3 flex h-3 gap-[2px]"
      role="img"
      aria-label={`${g.booked} of ${g.capacity} seats booked: ${segs.map((s) => `${s.n} ${s.label}`).join(', ')}`}
    >
      {Array.from({ length: g.capacity }).map((_, i) => {
        let idx = i;
        let color: string | null = null;
        for (const s of segs) {
          if (idx < s.n) {
            color = s.c;
            break;
          }
          idx -= s.n;
        }
        return (
          <span
            key={i}
            className={cx('h-full flex-1 first:rounded-l-full last:rounded-r-full', !color && 'border border-line bg-surface2')}
            style={color ? { background: color } : undefined}
          />
        );
      })}
    </div>
  );
}

function Timeline({
  members,
  access,
  onShot,
  title,
}: {
  members: ClassStatus[];
  access: SectionProps['access'];
  onShot: (src: string, title: string) => void;
  title: string;
}) {
  const multi = members.length > 1;
  const snaps: (SeatSnapshot & { tag: string })[] = members
    .flatMap((m) => m.snapshots.map((s) => ({ ...s, tag: multi ? m.cls.format : '' })))
    .sort((a, b) => (a.takenAt < b.takenAt ? -1 : 1));
  if (!snaps.length) return null;
  return (
    <details className="group mt-auto pt-3">
      <summary className="focus-ring flex cursor-pointer list-none items-center gap-1 rounded text-xs font-semibold text-ink2 hover:text-ink">
        <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 transition group-open:rotate-0" />
        {snaps.length} screenshot{snaps.length === 1 ? '' : 's'}
      </summary>
      <ol className="mt-2 space-y-1 border-l border-line pl-3">
        {snaps.map((s) => {
          const src = fileUrl(s.imageKey, access);
          return (
            <li key={s.id} className="flex items-center justify-between gap-2 text-xs">
              <span className="text-ink2">
                {fmtSnapTime(s.takenAt)}
                {s.tag && <span className="text-muted"> · {s.tag}</span>}
              </span>
              <span className="flex items-center gap-2">
                <span className="tabular font-semibold">{s.seatsLeft === 0 ? 'Sold out' : `${s.seatsLeft} left`}</span>
                {src && (
                  <button
                    type="button"
                    onClick={() => onShot(src, `${title} — ${fmtSnapTime(s.takenAt)}`)}
                    className="focus-ring inline-flex items-center gap-1 rounded text-accentink hover:underline"
                  >
                    <Icon name="image" className="h-3.5 w-3.5" /> View
                  </button>
                )}
              </span>
            </li>
          );
        })}
      </ol>
    </details>
  );
}
