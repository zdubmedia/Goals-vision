// Brings data saved by an older version of the dashboard up to date.

import { FIRST_SEED_QUESTIONS, SEED_QUESTIONS, seedFollowers } from './followers';
import { DEFAULT_SETTINGS } from './seed';
import { SECTION_KEYS, type AppState } from './types';

export function upgradeState(s: AppState): AppState {
  const settings = { ...s.settings };
  if (settings.profitMargin === undefined) {
    settings.profitMargin = DEFAULT_SETTINGS.profitMargin;
    // Added together with the margin: sign-ups can't be traced to the ads yet, so start conservative.
    settings.adCreditShare = DEFAULT_SETTINGS.adCreditShare;
  }
  settings.sections = { ...settings.sections };
  for (const k of SECTION_KEYS) if (settings.sections[k] === undefined) settings.sections[k] = true;
  let followers = s.followers ?? seedFollowers();
  // The real questions replace the first placeholders, unless those were already edited.
  if (JSON.stringify(followers.questions) === JSON.stringify(FIRST_SEED_QUESTIONS)) followers = { ...followers, questions: SEED_QUESTIONS };
  return { ...s, settings, resources: s.resources ?? [], followers };
}
