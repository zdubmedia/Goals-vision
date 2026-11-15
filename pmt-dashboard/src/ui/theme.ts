import { useEffect, useState, useSyncExternalStore } from 'react';

export type ThemePref = 'light' | 'dark' | 'system';

function readPref(): ThemePref {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch {
    return 'system';
  }
}

function apply(pref: ThemePref) {
  const dark = pref === 'dark' || (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.dark = dark ? 'true' : 'false';
}

export function useThemePref(): [ThemePref, (p: ThemePref) => void] {
  const [pref, setPref] = useState<ThemePref>(readPref);
  useEffect(() => {
    apply(pref);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => pref === 'system' && apply('system');
    mq.addEventListener('change', onChange);
    // Printing / PDF always uses the light theme.
    let wasDark = false;
    const before = () => {
      wasDark = document.documentElement.dataset.dark === 'true';
      document.documentElement.dataset.dark = 'false';
    };
    const after = () => wasDark && (document.documentElement.dataset.dark = 'true');
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      mq.removeEventListener('change', onChange);
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, [pref]);
  return [
    pref,
    (p) => {
      try {
        if (p === 'system') localStorage.removeItem('theme');
        else localStorage.setItem('theme', p);
      } catch {
        /* private mode: the choice just isn't remembered */
      }
      setPref(p);
    },
  ];
}

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-dark'] });
  return () => obs.disconnect();
}

export function useIsDark(): boolean {
  return useSyncExternalStore(subscribe, () => document.documentElement.dataset.dark === 'true');
}

export interface ChartColors {
  loc: string[];
  accent: string;
  accentSoft: string;
  mutedMark: string;
  before: string;
  grid: string;
  axis: string;
  surface: string;
  ink: string;
  ink2: string;
}

/** Chart colors for the current theme, read from the CSS tokens. */
export function useChartColors(): ChartColors {
  const dark = useIsDark();
  const [c, setC] = useState<ChartColors>(() => read());
  useEffect(() => setC(read()), [dark]);
  return c;
}

function read(): ChartColors {
  const s = getComputedStyle(document.documentElement);
  const v = (n: string) => s.getPropertyValue(n).trim();
  const rgb = (n: string) => `rgb(${v(n).split(' ').join(',')})`;
  return {
    loc: [v('--c-loc-1'), v('--c-loc-2'), v('--c-loc-3')],
    accent: v('--c-accent'),
    accentSoft: v('--c-accent-soft'),
    mutedMark: v('--c-muted-mark'),
    before: v('--c-before'),
    grid: v('--c-grid'),
    axis: v('--c-axis'),
    surface: v('--c-surface'),
    ink: rgb('--ink'),
    ink2: rgb('--ink-2'),
  };
}
