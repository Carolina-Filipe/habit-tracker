/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
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
        paper: "#F8F7F2",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
