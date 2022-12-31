/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const vayu = require("vayu");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [vayu({ extend: {} })],
};
