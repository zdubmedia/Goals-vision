/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-dark="true"]'],
  theme: {
    extend: {
      colors: {
        page: v('page'),
        surface: v('surface'),
        surface2: v('surface-2'),
        ink: v('ink'),
        ink2: v('ink-2'),
        muted: v('muted'),
        line: v('line'),
        navy: v('navy'),
        navydeep: v('navy-deep'),
        accent: v('accent'),
        accentink: v('accent-ink'),
        gold: v('gold'),
        good: v('good'),
        goodink: v('good-ink'),
        warn: v('warn'),
        bad: v('bad'),
        badink: v('bad-ink'),
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        display: ['"Bebas Neue"', '"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgb(16 24 40 / 0.06), 0 1px 3px rgb(16 24 40 / 0.04)',
      },
    },
  },
  plugins: [],
};
