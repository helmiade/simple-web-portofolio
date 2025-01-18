/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif','Poppins'],
      },
      colors: {
        'background-dark': '#1F2937', // Gunakan hex untuk gray-800
        'background-light': '#FFFFFF', // Hex untuk white
        'text-dark': '#FFFFFF', // Hex untuk white
        'text-light': '#000000', // Hex untuk black
        'card-light': '#000000', // Hex untuk black
        'card-dark': '#FFAB00', // Tetap sama
      },
    },
  },
  plugins: [],
};
