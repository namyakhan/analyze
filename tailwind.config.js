/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        grey: "#B2B1B9",
        charcoal: "#1E1E1E",
        purple: "#44195E",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
