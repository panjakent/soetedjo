import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        textColor: 'var(--text-color)',
        borderColor: 'var(--border-color)',
      },
      fontFamily: {
        AveriaSerifLibre: [
          'var(--font-averia-serif-libre)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
