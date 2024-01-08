import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      amber: colors.amber,
      transparent: "transparent",
      obsidian: "#0B1215",
      offwhite: "#FBFBFB",
    },
    fontFamily: {
      primary: "Hind Madurai",
      montserrat: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
