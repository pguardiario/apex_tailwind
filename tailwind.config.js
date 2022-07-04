module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      backgroundImage: {
        // hero: "url('https://unsplash.com/photos/YCPkW_r_6uA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2OTQ0Mzgx&force=true&w=1920')",
        grass: "url('https://unsplash.com/photos/C2PCa6DhlYE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2OTQ5NDg2&force=true&w=1920')",
        // whitey: "url('https://unsplash.com/photos/J1sd2zy87rc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjM2OTQ1MDE3&force=true&w=1920')"
       },
      //  fontFamily: {
      //   // oi: ['"Oi"'],
      //   // raisin: ['"Oi"'],
      //   // roboto: ["Roboto"],
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

