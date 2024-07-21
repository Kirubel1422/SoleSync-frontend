/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BRAND: `#62BDCB`,
        PRIMARY: `#2B2C2C`,
        BG: `#FAF5FF`,
      },
    },
  },
  plugins: [],
};
