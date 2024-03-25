/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
    },
    extend: {
      colors: {
        'base': '#45F882',
        'helper': '#0B0E13',
        'helperH': '#121B24',
        'text': '#ABAEBA',
        'yellow': '#FFBE18',
        'over': '#19232a',
        'highlight': '#6152C6 ',
        'gray': '#252836',
      },
    },
  },
  plugins: [],
}

