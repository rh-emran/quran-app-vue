/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atabic: ["Al-Qalam-Quran-Majeed-Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
