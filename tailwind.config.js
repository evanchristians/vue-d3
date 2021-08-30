module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      maxWidth: {
        content: "fit-content",
      },
      minHeight: {
        6: "1.5rem",
      },
      colors: {
        gray: {
          900: "#191924",
          800: "#1C1C27",
          700: "#29293d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
