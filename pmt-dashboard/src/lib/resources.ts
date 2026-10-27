// Files shared with the client: what kind each is and how to describe it.

import type { Resource } from './types';

export type ResourceKind = 'pdf' | 'image' | 'video' | 'doc';

export function resourceKind(r: Pick<Resource, 'contentType'>): ResourceKind {
  if (r.contentType === 'application/pdf') return 'pdf';
  if (r.contentType.startsWith('image/')) return 'image';
  if (r.contentType.startsWith('video/')) return 'video';
  return 'doc';
}

const DOC_LABEL: Record<string, string> = {
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PowerPoint',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel',
};

export function resourceLabel(r: Pick<Resource, 'contentType'>): string {
  const k = resourceKind(r);
  return k === 'pdf' ? 'PDF' : k === 'image' ? 'Image' : k === 'video' ? 'Video' : DOC_LABEL[r.contentType] ?? 'File';
}

export function fileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(bytes < 10 * 1024 * 1024 ? 1 : 0)} MB`;
}

/** A readable title from a file name: "social-ideas_guide.pdf" → "Social ideas guide". */
export function titleFromFileName(name: string): string {
  const base = name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  return base ? base[0].toUpperCase() + base.slice(1) : 'File';
}
