/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
<<<<<<< HEAD
      indie: ["Indie Flower"],
      roboto: ["Roboto"],
=======
      'indie': ['Indie Flower']
>>>>>>> ea1c68af726c28de021582b48b01f899f392be55
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
