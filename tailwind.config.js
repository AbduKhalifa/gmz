/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'base': '#111111',
        'helper': '#A52A2A',
        'helperH': '#8e2525',
        'text': '#bcb5b5',
      },
    },
  },
  plugins: [],
}

