/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '75%': '75%',
      '48': '48rem',
    },
    extend: {
      backgroundImage: {
        "banner": "url('../../public/banner.svg')",
        "candy": "url('../../public/candy.png')"
      },
      colors: {
        "primary-background": "hsl(var(--color-primary-background) / <alpha-value>)",
        "secondary-background": "hsl(var(--color-secondary-background) / <alpha-value>)",
        "tertiary-background": "hsl(var(--color-tertiary-background) / <alpha-value>)",
        "primary-text": "hsl(var(--color-primary-text) / <alpha-value>)",
        "secondary-text": "hsl(var(--color-secondary-text) / <alpha-value>)",
        "secondary": "hsl(var(--color-secondary) / <alpha-value>)",
        "accent": "hsl(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        "inter": "var(--font-inter)",
        "irish-grover": "var(--font-irish-grover)"
      },
      screens: {
        lg: "1201px",
        "small-min": { 'raw': '(min-width: 451px)' },
        "small-max": { 'raw': '(max-width: 451px)' },
        "medium-max": { 'raw': '(max-width: 801px)' },
        "medium-min": { 'raw': '(min-width: 801px)' },
        "small-medium": { 'raw': '(min-width:451px) and (max-width:801px)' },
        "large-min": { 'raw': '(min-width: 951px)' },
        "large-max": { 'raw': '(max-width: 951px)' },
      }
    },
  },
  plugins: [],
}
