/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#00FFAA",
        // secondary: "#00FF60",
        // texlight: "#a7a7a7",
        // bgPrimary: "#020010",
        primary: "#a7a7a7",
        secondary: "#FFFAF0",
        texlight: "#a7a7a7",
        bgPrimary: "#020010",
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['responsive'],
    }
  },
  plugins: [],
};
