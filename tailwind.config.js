/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#CBD5D7',
        dark: '#1E293B'
      },
      backgroundColor: {
        root: '#1E293B',
        button: '#598EF3',
        "button-disabled": '#94A3B8'
      }
    },
  },
  plugins: [],
}

