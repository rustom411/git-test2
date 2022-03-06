module.exports = {

mode: "jit",
purge: ["*.{html,js}"],
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {

      //Custom Colors
      colors:{
        primary:{
          300: "#248843",
        },
        secondary:{
          300: "#0F173E",
        },
      },

      //Custom  ackgound Image
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  varients: {
    extend: {},
  },
  plugins: [],
}
