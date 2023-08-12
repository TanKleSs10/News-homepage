/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      colors: {
        "SoftOrange": "hsl(35, 77%, 62%)",
        "SoftRed": "hsl(5, 85%, 63%)",
        "OffWhite": "hsl(36, 100%, 99%)",
        "GrayishBlue": "hsl(233, 8%, 79%)",
        "DarkGrayishBlue": "hsl(236, 13%, 42%)",
        "VeryDarkBlue": "hsl(240, 100%, 5%)"
      },
      backgroundImage: {
        "menuOpen": "url('../assets/images/icon-menu.svg')",
        "menuClose": "url('../assets/images/icon-menu-close.svg')",
        "heroDesktop": "url('../assets/images/image-web-3-desktop.jpg')",
        "heroMobile": "url('../assets/images/image-web-3-mobile.jpg')"
      }

    },
  },
  plugins: [],
}

