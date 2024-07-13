/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'common-horizontal': '1rem',
        'sm': '1.5rem',
        'md': '2rem',
        'lg': '2.5rem',
        'xl': '3rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(#303b37, #1a1f1d)',
      },
      colors: {
        'pucp': '#042354',
        'primary': '#14928f',
        'secondary': '#6abb76'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
