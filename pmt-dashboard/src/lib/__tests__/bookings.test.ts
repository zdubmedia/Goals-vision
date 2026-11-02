import { describe, expect, it } from 'vitest';
import { bookingPeriod, capacityOf, groupClasses, rulesFrom, soldBetween, snapshotsFor, summarizeBookings } from '../bookings';
import { DEFAULT_SETTINGS, seedClasses } from '../seed';

const { classes, snapshots } = seedClasses();
const settings = DEFAULT_SETTINGS;
const PERIOD = { start: '2026-10-06', end: '2026-10-23' };
const summary = summarizeBookings(classes, snapshots, settings, PERIOD, '2026-10-23');

describe('Capacity rules', () => {
  const cap = (id: string) => capacityOf(classes.find((c) => c.id === id)!, classes, rulesFrom(settings));
  it('uses 12 seats by default', () => expect(cap('wd-1010-am')).toBe(12));
  it('caps a Basic class at 10 when an Intermediate class shares the range', () => {
    expect(cap('wd-1024-am')).toBe(10);
    expect(cap('wd-1024-pm')).toBe(10);
    expect(cap('wd-1121-am')).toBe(10);
    expect(cap('wd-1121-pm')).toBe(10);
  });
  it('sells IRC and 1DPC as 6 seats each', () => {
    expect(cap('wd-1024-irc')).toBe(6);
    expect(cap('wd-1024-1dpc')).toBe(6);
  });
  it('lets a capacity be overridden', () => {
    const c = { ...classes[0], capacityOverride: 14 };
    expect(capacityOf(c, classes, rulesFrom(settings))).toBe(14);
  });
});

describe('Seats sold Oct 6–23 (expected values from the brief)', () => {
  it('39 seats in total', () => expect(summary.soldInPeriod).toBe(39));
  it('by location: Woodland 19, Eureka 12, Cloverdale 8', () => {
    expect(summary.byLocation).toEqual({ Woodland: 19, Eureka: 12, Cloverdale: 8 });
  });
  it('≈ $16,575 at $425 a seat', () => expect(summary.revenue).toBe(16575));
  it('32 seats were already booked before the campaign', () => expect(summary.bookedBeforeTracking).toBe(32));

  it('running total by date', () => {
    const byDate = Object.fromEntries(summary.running.map((r) => [r.date.slice(5), r.total]));
    // The brief lists 10/7 = 8 and 10/8 = 9, but there are no 10/8 screenshots:
    // as entered, both "10/7" and "10/7 eve" readings land on Oct 7, which gives 9.
    expect(byDate['10-07']).toBe(9);
    expect(byDate['10-09']).toBe(16);
    expect(byDate['10-10']).toBe(17);
    expect(byDate['10-13']).toBe(18);
    expect(byDate['10-14']).toBe(22);
    expect(byDate['10-15']).toBe(23);
    expect(byDate['10-16']).toBe(24);
    expect(byDate['10-17']).toBe(29);
    expect(byDate['10-23']).toBe(39);
  });

  it('a class that dropped off the page keeps its last known value and is flagged', () => {
    const s = summary.statuses.find((x) => x.cls.id === 'cd-1024-pm')!;
    expect(s.latestSeatsLeft).toBe(7);
    expect(s.soldInPeriod).toBe(3);
    expect(s.droppedOff).toBe(true);
  });

  it('sub-periods add up to the whole period', () => {
    const snaps = snapshotsFor('eu-1024-am', snapshots);
    const whole = soldBetween(snaps, '2026-10-06', '2026-10-23');
    const parts = soldBetween(snaps, '2026-10-06', '2026-10-13') + soldBetween(snaps, '2026-10-14', '2026-10-23');
    expect(whole).toBe(8);
    expect(parts).toBe(whole);
  });

  it('"since launch" bookings start at the pre-launch screenshots', () => {
    expect(bookingPeriod({ start: '2026-10-07', end: '2026-10-23' }, settings)).toEqual(PERIOD);
    expect(bookingPeriod({ start: '2026-10-17', end: '2026-10-23' }, settings).start).toBe('2026-10-17');
  });

  it('filters by location', () => {
    const eu = summarizeBookings(classes, snapshots, settings, PERIOD, '2026-10-23', ['Eureka']);
    expect(eu.soldInPeriod).toBe(12);
  });
});

describe('Class grouping and "normal" comparison', () => {
  const groups = groupClasses(summary.statuses);
  it('shows IRC + 1DPC as one 12-seat Intermediate class', () => {
    const g = groups.find((x) => x.kind === 'Intermediate' && x.startDate === '2026-10-24')!;
    expect(g.capacity).toBe(12);
    expect(g.members.map((m) => m.cls.format).sort()).toEqual(['1DPC', 'IRC']);
    expect(g.booked).toBe(2 + 3);
  });
  it('a sold-out afternoon class beats the usual half-full afternoon', () => {
    const s = summary.statuses.find((x) => x.cls.id === 'wd-1024-pm')!;
    expect(s.soldOut).toBe(true);
    expect(s.normal?.seats).toBe(5);
    expect(s.vsNormal).toBe('above');
  });
  it('classes far from their date are still "selling"', () => {
    const s = summary.statuses.find((x) => x.cls.id === 'wd-1205-am')!;
    expect(s.vsNormal).toBe('selling');
  });
});
