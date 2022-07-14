/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    colors:{
      mainLight: '#f7f7f7',
      bgLight: '#dbdbdb',
      bgdarkerLight: '#e5e5e5',
      textLight: '#000000',
      marronBg: '#a1887f',
      marronDark: '#725b53',
      marronLight: '#d3b8ae',
      red: '#ed6f6f',
      redlight: '#e8c7c7',
      greenLight: '#89BAA5',
      green: '#55b28a',
      transparent: 'rgba(0,0,0,0)',
      blueNeutral: '#8887b7',
      textDarker: '#6B7280',
    },
    screens: {
      sm: '220px',
      md: '688px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      animation: {
        'bounce': '2.2s ease-in-out infinite',
        'nashe': 'nashe 4.2s ease-in-out infinite'
      },
      keyframes: {
        bounce: {
          '0%': { transform: 'translateY(0px)'},
          '100%': { transform: 'translateY(0px)' }
        },
        nashe: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
