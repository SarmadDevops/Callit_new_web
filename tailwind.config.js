/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a0404",
        secondary: "#1a1a1a",
        darkBg: "#121212",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('../public/Image/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
