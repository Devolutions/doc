/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./docs/**/*.liquid'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0068c3'
      },
      gridTemplateColumns: {
        'layout': '328px minmax(0px, auto) 328px'
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem'
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('svg', '& svg')
    })
  ]
}