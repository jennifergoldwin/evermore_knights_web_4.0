/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mf: "565px",
        lf: "1225px",
        lgd: "1290px",
        lgf: "1665px",
      },
      fontFamily: {
        "friz-bold": ["Friz Quadrata Std Bold", "sans-serif"],
        "friz-bold-italic": ["Friz Quadrata Std Bold Italic", "sans-serif"],
        "friz-italic": ["Friz Quadrata Std Italic", "sans-serif"],
        "friz-medium": ["Friz Quadrata Std Medium", "sans-serif"],
        "friz-regular": ["FrizQuadrataRegular", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
