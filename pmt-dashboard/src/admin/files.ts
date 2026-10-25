import { readSheet } from 'read-excel-file/browser';
import { tableFromCsv, tableFromRows, type Table } from '../lib/tabular';

export const SHEET_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export function isSpreadsheet(file: File): boolean {
  return /\.xlsx$/i.test(file.name) || file.type === SHEET_TYPE;
}

/** Reads a CSV or Excel (.xlsx) file into a table. */
export async function readTable(file: File): Promise<Table> {
  if (isSpreadsheet(file)) {
    const rows = await readSheet(file);
    return tableFromRows(rows as unknown[][]);
  }
  if (/\.xls$/i.test(file.name)) throw new Error('Old .xls files can’t be read. In Ads Manager, export as .csv or .xlsx instead.');
  return tableFromCsv(await file.text());
}

/** Shrinks a photo/screenshot to a sensible size before uploading (keeps it readable). */
export async function compressImage(file: File, maxDim = 2000, quality = 0.86): Promise<Blob> {
  if (!file.type.startsWith('image/')) throw new Error('That file is not an image.');
  if (file.type === 'image/gif') return file;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDim / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', quality));
  if (!blob) throw new Error('Could not process that image.');
  return blob;
}

export function newId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
}

/** Local time as 'YYYY-MM-DDTHH:mm' for a datetime-local input. */
export function nowLocal(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

/** Best guess at when a screenshot was taken, from the file's own date. */
export function fileTime(file: File): string {
  return nowLocal(new Date(file.lastModified || Date.now()));
}
