/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        neonGreen: "#A4FFAF",
        almostWhite: "#E6E5EA",
        grey: "#817D92",
        darkGrey: "#24232C",
        veryDarkGrey: "#18171F",
      },
    },
  },
  plugins: [],
};
