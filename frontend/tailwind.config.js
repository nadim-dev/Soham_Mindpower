/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jaini': ['Jaini Purva', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

