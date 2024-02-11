/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        ss: "360px",
      },
      fontFamily: {
        indie: ["Indie Flower"],
        roboto_mono: ["Roboto Mono"],
        pacifico: ["Pacifico"],
      },
      minHeight: {
        38: "38px",
      },
      colors: {
        sky: "#7390B8",
        trans_blk: "rgba(0, 0, 0, 0.5)",
        silver: "#C0C0C0",
      },
      boxShadow: {
        scan59: "0px 10px 10px -10px rgba(33, 35, 38, 0.1)",
      },
    },
  },
  darkMode: "class",
  plugins: ["prettier-plugin-tailwindcss"],
};
