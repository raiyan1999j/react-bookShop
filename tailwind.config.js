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
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:false,
    darkTheme:'light'
  },
}

