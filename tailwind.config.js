/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'base': '#111111',
        'helper': '#ad1b1b',
        'helperH': '#8e2525',
        'text': '#bcb5b5',
      },
    },
  },
  plugins: [],
}

