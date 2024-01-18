import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.slate,

      // color pallet
      ivory: "#ffff0",
      timberwolf: "#CFC5C0",
      silver: "#C4BAB1",
      eerie: "#1D1D1B",
      dogwood: "#D1B1A2",
      lion: "#B79A79",
    },
    fontFamily: {
      primary: "acumin-pro",
      heading: "Bebas Neue",
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
