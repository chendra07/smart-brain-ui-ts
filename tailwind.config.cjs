/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "scr-1400-more": { min: "140rem" }, //@media (min-width: 1400px) { ... }
        "scr-1400-less": { max: "140rem" }, //@media (max-width: 1400px) { ... }
        "scr-1200-less": { max: "120rem" },
        "scr-1000-less": { max: "100rem" },
        "scr-800-less": { max: "80rem" },
        "scr-600-less": { max: "60rem" },
        "scr-400-less": { max: "40rem" },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "62.5%" },
        //default browser fontsize: 16
        //16 * 62.5% == 10px (1rem === 10px)
      });
    }),
  ],
};