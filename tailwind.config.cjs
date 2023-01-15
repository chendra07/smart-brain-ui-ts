/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        "scr-1280-more": { min: "1280px" }, //@media (min-width: 1280px) { ... }
        "scr-1280-less": { max: "1280px" }, //@media (max-width: 1280px) { ... }
        "scr-1000-less": { max: "1000px" },
        "scr-800-less": { max: "800px" },
        "scr-600-less": { max: "600px" },
        "scr-400-less": { max: "400px" },
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
