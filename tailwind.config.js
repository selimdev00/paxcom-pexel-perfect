/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#0584FE",
          DEFAULT: "#0584FE",
          dark: "#1253A2",
        },
        gray: {
          text: {
            DEFAULT: "#8F8F8F",
          },
        },
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(90deg, #000000 30%, #1C2734 73%)",
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          "2xl": "1193px",
        },
      },
    },
  },
  plugins: [],
};
