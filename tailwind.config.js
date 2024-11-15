/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
<<<<<<< HEAD
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
=======
    colors: {
      'madBlack': '#232323',
      'primary': '#ff7350',
      'white': '#FFFFFF',
      'input': '#F6F8FB',
      'red': '#FF0000',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#6D7486',
      'gray-light': '#d3dce6',
      "footer":"#20263e",
    },
>>>>>>> Ashik2
    extend: {},
  },
  plugins: [require("daisyui")],
};
