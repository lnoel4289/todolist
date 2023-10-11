/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'tomatoes': ['Tomatoes']
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
