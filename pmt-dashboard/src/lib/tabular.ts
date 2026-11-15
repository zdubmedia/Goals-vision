import Papa from 'papaparse';

/** A parsed spreadsheet: header names plus one record per data row. */
export interface Table {
  headers: string[];
  rows: Record<string, unknown>[];
}

export function cleanHeader(h: unknown): string {
  return String(h ?? '')
    .replace(/^﻿/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tableFromCsv(text: string): Table {
  const res = Papa.parse<string[]>(text.replace(/^﻿/, ''), { skipEmptyLines: 'greedy' });
  return tableFromRows(res.data);
}

/**
 * Builds a table from raw rows (CSV cells or spreadsheet cells). Business
 * Suite files sometimes start with a title line, so the header row is the
 * first row with at least two non-empty cells.
 */
export function tableFromRows(raw: unknown[][]): Table {
  const headerIdx = raw.findIndex((r) => r.filter((c) => c !== null && c !== undefined && String(c).trim() !== '').length >= 2);
  if (headerIdx < 0) return { headers: [], rows: [] };
  const headers = raw[headerIdx].map(cleanHeader);
  const rows = raw.slice(headerIdx + 1).map((r) => {
    const rec: Record<string, unknown> = {};
    headers.forEach((h, i) => {
      if (h) rec[h] = r[i] ?? '';
    });
    return rec;
  });
  return { headers: headers.filter(Boolean), rows };
}

/** Parses '1,234', '$4.03', '4.03%' and spreadsheet numbers. Empty → null. */
export function parseNumber(v: unknown): number | null {
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  if (!s || s === '-' || s === '—') return null;
  const n = Number(s.replace(/[$,%\s]/g, ''));
  return Number.isFinite(n) ? n : null;
}

export function toCsv(headers: string[], rows: (string | number | null | undefined)[][]): string {
  return Papa.unparse({ fields: headers, data: rows.map((r) => r.map((c) => (c === null || c === undefined ? '' : c))) });
}
