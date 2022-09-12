/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brown: "#32342A",
      green: "#CBDF90",
      light_green: "#DBEFBC",
      light_blue: "#CFEBDF",
      blue: "#9BC4CB",
    },

    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
