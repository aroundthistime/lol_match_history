/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#CBD5D7'
      },
      backgroundColor: {
        root: '#1E293B'
      }
    },
  },
  plugins: [],
}

