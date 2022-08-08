module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      FFShamel: "FFShamel",
    },
    extend: {
      colors: {
        primary: "#8661A3",
        secondary: "#FFD14B",
        success: "#02A986",
        accent: "#454545",
        border: "#EEE",
        dark: "#333",
        light: "#FAFAFA",
        gray: "#8F8F8F",
        muted: "#ABABAB",
        placeholder: "#B6B6B6",
        black: "#000000",
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
