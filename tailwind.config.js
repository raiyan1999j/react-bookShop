/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'playFair':['Playfair Display','serif'],
      'workSans':['Work Sans','sans-serif']
    },
    screens:{
      'small':{'min':'0px','max':'576px'},
      'medium':{'min':'576px','max':'768px'}
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:false,
    darkTheme:'light'
  },
}

