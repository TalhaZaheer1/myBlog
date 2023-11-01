/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '78':'78px',
      },
      height:{
        '36':'36px'
      },
      boxShadow:{
        'red':'7px 7px 0 0 rgba(180, 3, 5, 0.8)',
        'violet':'3px 3px 0 0 rgba(137, 91, 245, 1)'
      },
      colors:{
        'neo-red':'rgba(180, 3, 5, 0.8)',
        'lightP':'rgba(137, 91, 245, 1)'
      },
    },
  },
  plugins: [],
}

