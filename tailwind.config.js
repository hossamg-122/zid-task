module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      FFShamel: "FFShamel",
    },
    extend: {
      colors: {
        primary: "#5830C5",
        primaryHovered: "#312490",
        header: "#F2F2F2",
      },
      fontFamily: {
        FFShamel: "FFShamel",
      },
      fontSize: {
        xx: ".5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
