/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': {'max': '576px'},
      'md': {'min': '577px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1024px'},
      'xl': {'min': '1025px', 'max': '1280px'},
      'max767': {'max': '767px'},
      'max1024': {'max': '1024px'},
      'max1280': {'max': '1280px'}
    },
    colors: {
      'mainColor': '#171717',
      'backColor': '#3D5DDB',
      'white': '#ffffff',
      'inputBorder': 'rgba(255, 255, 255, 0.2)',
      'inputColor': 'rgba(255, 255, 255, 0.8)',
    },
    fontFamily: {
      mainFontBold: ['SatoshiBold', 'sans-serif'],
      mainFontRegular: ['SatoshiRegular', 'sans-serif'],
      mainFontMedium: ['SatoshiMedium', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      borderColor: {
        'headerBorder': 'rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'descBack': "linear-gradient(360deg, #F2F2F2 0%, rgba(247, 247, 247, 0) 107.23%)",
      },
      transitionProperty: {
        'burgerOne': 'bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)',
        'burgerTwo': 'top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)',
        'burgerThree': 'all 0ms 300ms'
      }
    },
  },
  plugins: [],
}