/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        hero: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Warm Charcoal dark theme. The `ink` scale is lightness-inverted from the
        // old light palette so every existing utility keeps its relative meaning:
        // high numbers = brighter (prominent text), low numbers = darker (borders/wells).
        ink: {
          50: '#201b14',   // deep surface
          100: '#2a2419',  // chip / raised fill (bg-ink-100)
          200: '#322a20',  // hairline (border-ink-200)
          300: '#4a3f30',  // stronger border (border-ink-300)
          400: '#94886f',  // dim / decorative text (~5:1, AA)
          500: '#a99e8a',  // muted text (6.8:1)
          600: '#b3a892',  // secondary meta / footer (~7:1)
          700: '#cec4b3',  // body text (10:1)
          800: '#ddd3c1',  // strong body / detail values
          900: '#ece4d6',
          950: '#f2ede3',  // primary text / headings (15:1, AAA)
        },
        accent: {
          DEFAULT: '#c45d3e', // fills, rings, underlines, glows (unchanged from brand)
          light: '#e07a5f',   // accent AS TEXT on dark (6.1:1, AA) + hover/brighten state
          dark: '#9b3a1e',
        },
        surface: {
          DEFAULT: '#1a1611', // page background (the brand's own heading ink)
          raised: '#2e271c',  // cards, inputs, raised plates
          sunken: '#14100b',  // wells, footer, device shelf, recessed CTA bands
        },
        // Semantic status colors, tuned for the dark Warm-Charcoal theme (never the
        // raw light-mode Tailwind pastels). Used as text/icon on translucent fills.
        success: '#8fce9e', // green, ~7:1 on dark fills
        warning: '#f2c14e', // amber, warm sibling of the accent
        danger: '#e6947b',  // desaturated warm red, ~6.5:1 on surface
      },
      borderRadius: {
        // One card radius for the whole editorial system (retires 12/14/16px drift).
        card: '12px',
      },
      boxShadow: {
        // Warm, deep elevation tuned for #1a1611 — default Tailwind shadows are
        // near-invisible on the dark surface.
        card: '0 18px 40px -24px rgba(0, 0, 0, 0.75)',
        raised: '0 24px 50px -26px rgba(0, 0, 0, 0.8)',
        glow: '0 12px 40px -8px rgba(196, 93, 62, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'mockup-scroll': 'mockupScroll 20s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        mockupScroll: {
          '0%, 5%': { transform: 'translateY(0)' },
          '45%, 55%': { transform: 'translateY(var(--scroll-distance, -60%))' },
          '95%, 100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
