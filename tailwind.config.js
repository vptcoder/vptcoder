/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        newspaper: {
          white: '#fefdf8',
          light: '#fbf5e2',
          dark: '#f5e6b5',
        },
      },
      fontFamily: {
        sans: ['Archivo', ...defaultTheme.fontFamily.sans],
        serif: ['Mariposa Sans', ...defaultTheme.fontFamily.serif],
        title: ['Masthead'],
      },
    },
  },
  plugins: [],
}
