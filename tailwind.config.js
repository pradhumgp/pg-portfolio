/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pantone:{
          cremeWhite: '#C3B79D',
          jamSession: '#D5CFD6',
          gramshair: 'F5F6F8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '36': '36px',
        '72': '72px',

      },
    },
  },
  plugins: [],
}