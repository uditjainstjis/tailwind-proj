const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}"],
  theme: {
   extend: {

  keyframes: {
    navbar: {
      '0%': { marginTop: '-10px', height: '80px' },
      // '40%':{height: '67px'},
      '100%': { marginTop: '-45px', height: '60px' },
    },
    navbar2: {
      '0%': {marginTop:'45px',height: '60px'},
      // '40%':{height: '77px'},
      '100%': { marginTop: '70px', height: '80px'},
    },
    slideDownAndFadeIn: {
      '0%': { transform: 'translateY(-10px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    buldge: {
      '0%': { transform: 'scale(0.8)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' }, 
    },
    rise: {
      '0%': { transform: 'translateY(100px)', opacity: '0' }, 
      '35%':{  opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' }, 
    },
    imageUp:{
      '0%':{transform:'translateY(30px)',opacity:'0.15'},
      '50%':{opacity:'1'},
      '100%':{transform:'translateY(0px)'}
    },

  },
  animation: {
    slideDownAndFadeIn: 'slideDownAndFadeIn 0.5s ease-in-out forwards',
    buldge: 'buldge 0.7s ease-in-out forwards',
    rise: 'rise 0.8s ease-in-out forwards',
    navbar: 'navbar 0.3s ease-in-out forwards',
    navbar2: 'navbar2 0.3s ease-in-out forwards',
    imageUp: 'imageUp 1s ease-in-out forwards',
  },
},

  },
  plugins: [],
}


