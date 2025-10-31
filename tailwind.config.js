const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A100FF',
          50: '#F5E6FF',
          100: '#EBCCFF',
          200: '#D699FF',
          300: '#C266FF',
          400: '#AD33FF',
          500: '#A100FF',
          600: '#8100CC',
          700: '#610099',
          800: '#400066',
          900: '#200033',
        },
        accent: {
          DEFAULT: '#00FF94',
          50: '#E6FFF5',
          100: '#CCFFEB',
          200: '#99FFD6',
          300: '#66FFC2',
          400: '#33FFAD',
          500: '#00FF94',
          600: '#00CC76',
          700: '#009959',
          800: '#00663B',
          900: '#00331E',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
