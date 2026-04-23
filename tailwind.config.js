/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#13131f',
        cardBg: '#1e1e2f',
        primary: '#8b5cf6', 
        cyanAccent: '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}