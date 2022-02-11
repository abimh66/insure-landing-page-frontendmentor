module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["DM Serif Display"],
        body: ["Karla"],
      },
      colors: {
        primaryViolet: "hsl(256, 26%, 20%)",
        primaryBlue: "hsl(216, 30%, 68%)",
        neutralViolet: "hsl(270, 9%, 17%)",
        neutralGrayViolet: "hsl(273, 4%, 51%)",
        neutralGray: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        mobileHeader: "url('./images/image-intro-mobile.jpg')",
        desktopHeader: "url('./images/image-intro-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
