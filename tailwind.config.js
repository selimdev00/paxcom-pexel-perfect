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
          card: {
            100: "#FBFCFD",
            200: "#EEEFF1",
          },
          bullet: "#D9D9D9",
          text: {
            DEFAULT: "#8F8F8F",
          },
        },
        black: {
          100: "#383838",
          DEFAULT: "#000",
        },
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(90deg, #000000 30%, #1C2734 73%)",
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 0px 20px 0px #0000001F",
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
