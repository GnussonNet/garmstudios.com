/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "garm-blue": "#1d3348",
        "garm-light-blue": "#9bb5c4",
        "garm-gold": "#d5c296",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-garm-(blue|light-blue|gold)/,
    },
  ],
};
