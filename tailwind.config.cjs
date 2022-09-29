/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        
        'heading':'#fff',
        'content':{
          100:'#ccd6f6',
          200:'#9fa7bf',
          300:'#8c93a8',
        },
        'main':{
          100: '#3a89fc',
          200: '#357ee8',
          300: '#2f6fcc',
          400: '#265dad',
          500: '#1f4b8c',
          600: '#16396b',
          700: '#0e2342',
          800: '#0a192f',
          900: '#03080f',
          DEFAULT:'#0a192f',
        },
        'accent':{
          100: '#64ffda',
          200: '#5ae8c6',
          300: '#2f6fcc',
          400: '#41ab92',
          500: '#348a75',
          600: '#2a6e5d',
          700: '#1c4d41',
          800: '#113029',
          900: '##091a16',
          DEFAULT:'#64ffda'
        }
      }
    },
  },
  plugins: [],
};
