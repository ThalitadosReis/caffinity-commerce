import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      stone: colors.stone,
      gray: colors.gray,

      coffee: "#3c312b",
      yellow: "#f7b22c",
    },
    fontFamily: {
      primary: "Bebas Neue",
      secondary: "acumin-pro",
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
