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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
