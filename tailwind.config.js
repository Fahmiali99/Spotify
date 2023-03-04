/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // background
      primary: "#1db954",
      darks: "#000000",
      play: "#181818",
      control: "#b3b3b3",
      cover: "#b2bfc5",
      // gradient-background
      bgrad: "#353535",
      // border
      linese: "#1f2937",
      // font
      standart: "#9ca3af",
      // Card/Grid
      Gstandart: "#282828",
      HGstandar: "#404040",
    },
    // fontSize: {
    //   xs: "0.6875rem",
    //   sm: "0.875rem",
    //   base: "2rem",
    //   xl: "1.25rem",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.441rem",
    //   "5xl": "3.052rem",
    //   "6xl": "3.052rem",
    //   "7xl": "6rem",
    //   "8xl": "3.052rem",
    // },
  },
  plugins: [require("flowbite/plugin")],
};
