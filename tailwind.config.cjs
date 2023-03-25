/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "480px", med: "768px", 
    md: "1200px", xl: "1440px" },

    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "pattens-blue": {
        50: "#eff7ff",
        100: "#daedff",
        200: "#bde1ff",
        300: "#90ceff",
        400: "#5cb3fe",
        500: "#3692fb",
        600: "#1f73f1",
        700: "#185cdd",
        800: "#1a4bb3",
        900: "#1b438d",
      },
      "mine-shaft": {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#333333",
      },
    },
    extend: {
      height: { 128: "32rem" },

      width: { landscape: "48.5rem",
    128:'32rem',
  160:'43rem' },
    },
    fontFamily: { abc: "Lato" },
  },
  plugins: [],
};
