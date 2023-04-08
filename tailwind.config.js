/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lightGreen: '#64D370',
        secondaryGreen: '#26F03A',
        milk: '#F5FAFF',
      },
    },
    container: {
      padding: {
        DEFAULT: '20px',
        md: '40px',
        xl: '0px',
        center: true
      },
    }
  },
  plugins: [],
}
