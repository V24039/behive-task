/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        pad: { raw: "(max-width: 1200px)" },
      },
    },
    colors: {
      ...colors,
      main: "#F9FAFF",
      logo: "#FFBB00",
      "stroke-darkgray": "#CEC6C6",
      "gray-5": "#E0E0E0",
      "primary-button": "#FFCF4B",
      "primary-button-border": "#FFC422",
      "secondary-button": "#F9F9F9",
      "main-text": "#263238",
      "main-light-gray": "#F9F9F9",
      "secondary-text": "#65624C",
      direction: "#EEE7E7",
    },
  },
  plugins: [],
};
