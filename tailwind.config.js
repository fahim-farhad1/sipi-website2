/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#FF7350",
    //   secondary: "#032E3E",
    //   background: "#115875",
    //   text: "#232323",
    //   white: "#FFFFFF",
    //   link: "#FF0000",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#6D7486",
    //   "gray-light": "#d3dce6",
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
};
