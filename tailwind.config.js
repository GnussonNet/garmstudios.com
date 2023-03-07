/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      center: true, 
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill-16': 'repeat(auto-fill, minmax(min(64px, 100%), 1fr))',
        'auto-fit-16': 'repeat(auto-fit, minmax(min(64px, 100%), 1fr))',
        'auto-fit-12': 'repeat(auto-fit, minmax(min(48px, 100%), 1fr))',
      },
      colors: {
        "garm-blue-900": "#0F2C3E",
        "garm-blue-800": "#112E40",
        "garm-blue-600": "#1F4C63",
        "garm-blue-500": "#1E5772",
        "garm-blue-200": "#82A6B6",
        "garm-blue-100": "#A3C3D0",
        "garm-gold-700": "#E2B87C",
        "garm-gold-500": "#DCCB9D",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [
    {
      pattern: /(bg|text|border)-garm-(blue|light-blue|gold)/,
    },
  ],
};
