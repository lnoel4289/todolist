/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      indie: ["Indie Flower"],
      roboto: ["Roboto"],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
