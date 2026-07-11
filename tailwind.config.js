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
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'mockup-scroll': 'mockupScroll 20s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
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
