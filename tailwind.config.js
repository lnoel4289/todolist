/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        indie: ["Indie Flower"],
        roboto: ["Roboto"],
      },
      minHeight: {
        38: "38px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
