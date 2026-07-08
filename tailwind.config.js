// Tailwind v4 reads design tokens from the @theme block in src/index.css.
// This file is kept for documentation / editor tooling parity with the spec.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gp-black': '#0D0D0D',
        'gp-dark': '#161616',
        'gp-card': '#1E1E1E',
        'gp-border': '#2A2A2A',
        'gp-text': '#FFFFFF',
        'gp-muted': '#888888',
        'gp-accent': '#E8A020',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
    },
  },
  plugins: [],
};
