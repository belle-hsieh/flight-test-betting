module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
      },
      fontFamily: {
        bitcount: ['var(--font-bitcount)', 'monospace'],
        pixelify: ['var(--font-pixelify)', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
