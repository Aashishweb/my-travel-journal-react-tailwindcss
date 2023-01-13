/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bean-red':'#F55A5A',
    },
    fontFamily:{
      Inter:['Inter', 'sans-serif']
    },
    },
  
  },
  plugins: [],
}
