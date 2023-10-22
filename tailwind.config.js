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
      backgroundImage: {
        portrait: "url('/src/assets/pexels-sergey-makashin-5444995.webp')",
      },
      colors: {
        sky: "#7390B8",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
