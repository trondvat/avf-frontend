module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      avf: {
        red: "#E01F26",
        black: "#231F20",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      title: ["Raleway", "sans-serif"],
      text: ["Open Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
