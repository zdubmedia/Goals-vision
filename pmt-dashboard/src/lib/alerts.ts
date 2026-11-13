import { byEntity, dailyAvailableRange, dailySeries, derive, pickDaily, sumMetrics, type EffectiveData } from './ads';
import { addDays, daysBetween, fmtDate, type DateRange } from './dates';
import type { Settings } from './types';

export interface Alert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  detail: string;
}

const STOPPED = /inactive|not delivering|off|paused|completed|ended|archived|deleted|error|rejected/i;

/** Admin-only health checks. The client never sees these. */
export function healthAlerts(data: EffectiveData, settings: Settings, range: DateRange): Alert[] {
  const alerts: Alert[] = [];
  const t = settings.alerts;
  const adSets = byEntity(data, range, 'adset');

  for (const a of adSets) {
    const d = derive(a.metrics);
    if (d.frequency !== null) {
      if (d.frequency > t.frequency) {
        alerts.push({
          id: `freq-${a.key}`,
          severity: 'warning',
          title: `Ad fatigue risk: ${a.key}`,
          detail: `Frequency is ${d.frequency.toFixed(2)} (people saw it ${d.frequency.toFixed(1)} times on average), above ${t.frequency}. Consider fresh creative or a wider audience.`,
        });
      } else if (d.frequency > t.frequency - 0.3) {
        alerts.push({
          id: `freq-watch-${a.key}`,
          severity: 'info',
          title: `Watch frequency: ${a.key}`,
          detail: `Frequency is ${d.frequency.toFixed(2)}, getting close to the ${t.frequency} fatigue line.`,
        });
      }
    }
    if (a.deliveryStatus && STOPPED.test(a.deliveryStatus)) {
      alerts.push({
        id: `stopped-${a.key}`,
        severity: 'critical',
        title: `Not delivering: ${a.key}`,
        detail: `Meta reports the status as "${a.deliveryStatus}".`,
      });
    }
    const budget = settings.adSetBudgets[a.key];
    if (budget && a.metrics.spend !== null) {
      const days = daysBetween(a.range.start, a.range.end);
      const perDay = a.metrics.spend / days;
      if (perDay < budget * t.underspend) {
        alerts.push({
          id: `under-${a.key}`,
          severity: 'warning',
          title: `Underspending: ${a.key}`,
          detail: `Averaging $${perDay.toFixed(2)}/day against a $${budget.toFixed(2)} daily budget (${Math.round((perDay / budget) * 100)}%). Check the audience size, bid or schedule.`,
        });
      }
    }
  }

  // Ad sets that stopped showing up in daily data.
  const dailyAdsets = dailyAvailableRange(data, true);
  if (dailyAdsets) {
    const p = pickDaily(data, 'adset', 'none', dailyAdsets);
    if (p) {
      const last = new Map<string, string>();
      for (const r of p.rows) if ((r.spend ?? 0) > 0 && (last.get(r.adSet) ?? '') < r.start) last.set(r.adSet, r.start);
      for (const [name, day] of last) {
        if (day < addDays(dailyAdsets.end, -1)) {
          alerts.push({
            id: `quiet-${name}`,
            severity: 'warning',
            title: `Stopped spending: ${name}`,
            detail: `No spend since ${fmtDate(day)} (data runs to ${fmtDate(dailyAdsets.end)}). Turned off on purpose? If not, check it in Ads Manager.`,
          });
        }
      }
    }
  }

  // Meta's relevance rankings (newest summary file).
  const ranked = new Map<string, { end: string; conversion?: string; quality?: string }>();
  for (const r of data.rows) {
    if (r.level !== 'adset' || r.isSummary || !r.rankings) continue;
    const cur = ranked.get(r.adSet);
    if (!cur || r.end >= cur.end) ranked.set(r.adSet, { end: r.end, conversion: r.rankings.conversion, quality: r.rankings.quality });
  }
  const lowConv = [...ranked].filter(([, v]) => /bottom|below/i.test(v.conversion ?? ''));
  if (lowConv.length) {
    alerts.push({
      id: 'rank-conversion',
      severity: 'info',
      title: `Conversion rate ranking is low on ${lowConv.length === ranked.size ? 'every ad set' : lowConv.map(([k]) => k).join(', ')}`,
      detail: `Meta ranks it "${lowConv[0][1].conversion}" against ads with the same goal. These ads are optimized for page views, so Meta can't see bookings yet. Once the Pixel is on the registration page, test a campaign optimized for completed registrations.`,
    });
  }
  const lowQuality = [...ranked].filter(([, v]) => /bottom|below/i.test(v.quality ?? ''));
  for (const [k, v] of lowQuality) {
    alerts.push({ id: `rank-quality-${k}`, severity: 'warning', title: `Low quality ranking: ${k}`, detail: `Meta ranks the ad's quality "${v.quality}". Try a new image or clearer headline.` });
  }

  // Cost per visit: last 7 days vs the 7 before.
  const avail = dailyAvailableRange(data);
  if (avail && daysBetween(avail.start, avail.end) >= 14) {
    const end = range.end < avail.end ? range.end : avail.end;
    const recent = { start: addDays(end, -6), end };
    const prior = { start: addDays(end, -13), end: addDays(end, -7) };
    const r = dailySeries(data, recent);
    const p = dailySeries(data, prior);
    if (r && p) {
      const rc = derive(sumMetrics(r.map((x) => x.metrics))).costPerResult;
      const pc = derive(sumMetrics(p.map((x) => x.metrics))).costPerResult;
      if (rc !== null && pc !== null && pc > 0 && rc / pc - 1 > t.costPerVisitRise) {
        alerts.push({
          id: 'cpv-rise',
          severity: 'warning',
          title: 'Cost per website visit is rising',
          detail: `$${rc.toFixed(2)} in ${fmtDate(recent.start)}–${fmtDate(recent.end)} vs $${pc.toFixed(2)} the week before (+${Math.round((rc / pc - 1) * 100)}%). Usually a sign the ads are wearing out — refresh images or headlines.`,
        });
      }
    }
  }
  const order = { critical: 0, warning: 1, info: 2 };
  return alerts.sort((a, b) => order[a.severity] - order[b.severity]);
}
