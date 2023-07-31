/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "300px",

        tablet: "768px",

        laptop: "1020px",
      },

      fontFamily: {
        headingFont: ["Roboto Slab", "serif"],
        bodyFont: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        bodyText: "12px",
        subHeadingText: "25px",
        headingText: "40px",
      },
      fontWeight: {
        regular: "500",
        medium: "700",
        bold: "900",
      },
      colors: {
        primary: "#ffffff",
        secondary: "",
        tertiary: "#007BFF",
        dark: "#000000",
        grey: "#778899",
      },
    },
  },
  plugins: [],
}
