/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    colors:{
      mainLight: '#eeeeee',
      bgLight: '#dbdbdb',
      bgdarkerLight: '#bcbcbc',
      textLight: '#000000',
      marronBg: '#a1887f',
      marronDark: '#725b53',
      marronLight: '#d3b8ae',
      red: '#ed6f6f',
      redlight: '#e8c7c7',
      greenLight: '#89BAA5',
      green: '#55b28a',
      transparent: 'rgba(0,0,0,0)',
    },
    screens: {
      sm: '220px',
      md: '688px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
