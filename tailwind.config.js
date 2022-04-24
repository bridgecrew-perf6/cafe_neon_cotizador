const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
