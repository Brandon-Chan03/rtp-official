/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-background": "hsl(var(--color-primary-background) / <alpha-value>)",
        "secondary-background": "hsl(var(--color-secondary-background) / <alpha-value>)",
        "tertiary-background": "hsl(var(--color-tertiary-background) / <alpha-value>)",
        "primary-text": "hsl(var(--color-primary-text) / <alpha-value>)",
        "secondary-text": "hsl(var(--color-secondary-text) / <alpha-value>)",
        "secondary": "hsl(var(--color-secondary) / <alpha-value>)",
        "accent": "hsl(var(--color-accent) / <alpha-value>)",
      },
      screens: {
        lg: "1201px",
      }
    },
  },
  plugins: [],
}
