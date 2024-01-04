/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "550px",
      lg: "800px",
    },
    extend: {
      colors: {
        veryDarkBlue: "#141c2f",
        darkBlue: "#1f2a48",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
