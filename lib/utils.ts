import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** SEO-friendly slug from title (e.g. "Oldway's Dairy Management" → "oldways-dairy-management") */
export function slugify(text: string): string {
  if (!text || typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/'/g, '')       // remove apostrophes (Oldway's → oldways)
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Canonical slug for project URLs (SEO). Safe for client – no Firebase. */
export function getProjectSlug(project: { slug?: string; title?: string; id?: string } | null): string {
  if (!project) return '';
  return project.slug || (project.title ? slugify(project.title) : '') || project.id || '';
}
