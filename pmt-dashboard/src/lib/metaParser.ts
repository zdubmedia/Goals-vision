import { parseDate, type ISODate } from './dates';
import { parseNumber, type Table } from './tabular';
import type { AdRow, BreakdownType, Level } from './types';

export interface MetaParseResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
  level: Level;
  breakdown: BreakdownType;
  daily: boolean;
  start: ISODate;
  end: ISODate;
  rows: AdRow[];
  summary: AdRow | null;
}

const NAME_COLUMNS: Record<Level, string> = {
  campaign: 'Campaign name',
  adset: 'Ad set name',
  ad: 'Ad name',
};

const BREAKDOWN_COLUMNS: [BreakdownType, string[]][] = [
  ['age', ['Age']],
  ['gender', ['Gender']],
  ['placement', ['Placement']],
  ['platform', ['Platform']],
  ['device', ['Impression device']],
  ['region', ['Region']],
];

/** Extra columns that hold real bookings once conversion tracking exists. */
const CONVERSION_PATTERN = /^(website )?(schedules?|purchases?|leads?|registrations completed|complete registration|contacts?)$/i;

export function describeUpload(level: Level, breakdown: BreakdownType, daily: boolean): string {
  const lvl = { campaign: 'Campaign', adset: 'Ad set', ad: 'Ad' }[level];
  const by = breakdown === 'none' ? '' : ` by ${breakdown}`;
  return `${lvl} report${by}${daily ? ', by day' : ''}`;
}

/**
 * Reads a Meta Ads Manager export. Detects the level (campaign / ad set / ad),
 * any breakdown, and whether it is split by day, from the columns present.
 */
export function parseMetaTable(table: Table): MetaParseResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const has = (c: string) => table.headers.includes(c);
  const spendCol = table.headers.find((h) => /^Amount spent \([A-Z]{3}\)$/.test(h));

  const level: Level = has(NAME_COLUMNS.ad) ? 'ad' : has(NAME_COLUMNS.adset) ? 'adset' : 'campaign';
  const daily = has('Day');
  let breakdown: BreakdownType = 'none';
  for (const [type, cols] of BREAKDOWN_COLUMNS) {
    if (cols.every(has)) {
      breakdown = type;
      break;
    }
  }

  const empty: MetaParseResult = { ok: false, errors, warnings, level, breakdown, daily, start: '', end: '', rows: [], summary: null };

  if (!spendCol) errors.push('This file has no "Amount spent (USD)" column. Export it from Meta Ads Manager (Reports → Export table data).');
  if (!has('Impressions') && !has('Results')) errors.push('This file has no "Impressions" or "Results" column, so it does not look like a Meta Ads export.');
  if (!has(NAME_COLUMNS.campaign) && !has(NAME_COLUMNS.adset) && !has(NAME_COLUMNS.ad)) {
    errors.push('This file has no "Campaign name", "Ad set name" or "Ad name" column.');
  }
  if (!daily && !(has('Reporting starts') && has('Reporting ends'))) {
    errors.push('This file has no dates. Include the "Reporting starts" and "Reporting ends" columns (or break it down by Day).');
  }
  if (spendCol && spendCol !== 'Amount spent (USD)') warnings.push(`Spend is in ${spendCol.slice(-4, -1)}, not USD.`);
  if (errors.length) return empty;

  const nameCol = NAME_COLUMNS[level];
  const bdCols = BREAKDOWN_COLUMNS.find(([t]) => t === breakdown)?.[1] ?? [];
  const convCols = table.headers.filter((h) => CONVERSION_PATTERN.test(h));
  const rows: AdRow[] = [];
  let summary: AdRow | null = null;
  const badDates: number[] = [];
  const resultTypes = new Set<string>();

  table.rows.forEach((rec, i) => {
    const str = (c: string) => String(rec[c] ?? '').trim();
    const num = (c: string) => (has(c) ? parseNumber(rec[c]) : null);
    if (Object.values(rec).every((v) => String(v ?? '').trim() === '')) return;

    let start: ISODate | null;
    let end: ISODate | null;
    if (daily) {
      start = end = parseDate(rec['Day']);
    } else {
      start = parseDate(rec['Reporting starts']);
      end = parseDate(rec['Reporting ends']);
    }
    const isSummary = str(nameCol) === '' && str(NAME_COLUMNS.campaign) === '';
    if (!start || !end) {
      // A daily export's summary row has no Day value; it spans the whole file.
      if (!(isSummary && daily)) badDates.push(i + 2);
      if (!isSummary) return;
    }

    const conversions: Record<string, number> = {};
    for (const c of convCols) {
      const v = parseNumber(rec[c]);
      if (v) conversions[c] = v;
    }

    const row: AdRow = {
      level,
      campaign: str(NAME_COLUMNS.campaign),
      adSet: has(NAME_COLUMNS.adset) ? str(NAME_COLUMNS.adset) : '',
      ad: has(NAME_COLUMNS.ad) ? str(NAME_COLUMNS.ad) : '',
      start: start ?? '',
      end: end ?? '',
      daily,
      breakdown,
      breakdownValue: bdCols.map(str).filter(Boolean).join(' · '),
      isSummary,
      spend: spendCol ? parseNumber(rec[spendCol]) ?? 0 : null,
      impressions: num('Impressions'),
      reach: num('Reach'),
      results: num('Results'),
      linkClicks: num('Link clicks'),
      clicksAll: num('Clicks (all)'),
      views: num('Views'),
      ctrAllReported: has('Impressions') ? null : num('CTR (all)'),
      ...(convCols.length ? { conversions } : {}),
      deliveryStatus: str('Delivery status') || undefined,
      resultType: str('Result type') || undefined,
      attribution: str('Attribution setting') || undefined,
    };
    if (row.resultType) resultTypes.add(row.resultType);
    if (isSummary) {
      if (summary) warnings.push(`Row ${i + 2} looks like a second summary row (blank name); it was ignored.`);
      else summary = row;
    } else {
      rows.push(row);
    }
  });

  if (badDates.length) {
    warnings.push(`${badDates.length} row(s) had a date that couldn't be read and were skipped (row ${badDates.slice(0, 5).join(', ')}).`);
  }
  if (!rows.length) {
    errors.push('No data rows were found under the header row.');
    return { ...empty, errors };
  }

  const dates = rows.flatMap((r) => [r.start, r.end]).filter(Boolean).sort();
  const start = dates[0];
  const end = dates[dates.length - 1];
  const sumRow = summary as AdRow | null;
  if (sumRow) {
    sumRow.start = sumRow.start || start;
    sumRow.end = sumRow.end || end;
    const total = rows.reduce((s, r) => s + (r.spend ?? 0), 0);
    const diff = (sumRow.spend ?? 0) - total;
    if (Math.abs(diff) > 0.05) {
      warnings.push(
        diff > 0
          ? `The rows add up to $${total.toFixed(2)}, $${diff.toFixed(2)} less than Meta's total of $${(sumRow.spend ?? 0).toFixed(2)}. Some rows are probably filtered out; the dashboard shows the gap as "Other".`
          : `The rows add up to $${total.toFixed(2)}, which is $${(-diff).toFixed(2)} more than Meta's total of $${(sumRow.spend ?? 0).toFixed(2)}. The dashboard uses Meta's total.`,
      );
    }
  } else {
    warnings.push('No summary (total) row was found. Totals will be added up from the rows; reach will not be added across rows.');
  }
  const nonLpv = [...resultTypes].filter((t) => !/landing page view/i.test(t));
  if (nonLpv.length) warnings.push(`Some rows count results as "${nonLpv.join('", "')}" instead of landing page views.`);

  return { ok: true, errors, warnings, level, breakdown, daily, start, end, rows, summary };
}
