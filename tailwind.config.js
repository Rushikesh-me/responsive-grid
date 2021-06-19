module.exports = {
  purge:{
    enabled: true,
    content: [
    './public/index.html',
    './src/app.js',
    './src/index.js',
    './src/*.jsx',
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      windLight: '#a8edea',
      windDark: '#fed6e3',
      sunsetLight: '#fa709a',
      sunsetDark: '#fee140'      
    },
    screens: {
      sm: '480px',
      md: '1025px',
      xl: '1441px',
    },
    
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
