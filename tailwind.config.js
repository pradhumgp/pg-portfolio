/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pantone: {
          cremeWhite: "#C3B79D",
          jamSession: "#D5CFD6",
          gramshair: "F5F6F8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      lineHeight: {
        20: "20px",
        24: "24px",
        28: "28px",
        36: "36px",
        72: "72px",
      },
      keyframes: {
        complexWave: {
          "0%, 100%": {
            transform: "rotate(0deg) translateY(0) scale(1)",
            transformOrigin: "bottom center",
          },
          "10%": {
            transform: "rotate(14deg) translateY(-3px) scale(1.05)",
          },
          "20%": {
            transform: "rotate(-8deg) translateY(0) scale(1.1)",
          },
          "30%": {
            transform: "rotate(14deg) translateY(-3px) scale(1.05)",
          },
          "40%": {
            transform: "rotate(-4deg) translateY(-2px) scale(1.08)",
          },
          "50%": {
            transform: "rotate(10deg) translateY(-1px) scale(1.04)",
          },
          "60%": {
            transform: "rotate(-2deg) translateY(0) scale(1)",
          },
          "70%": {
            transform: "rotate(6deg) translateY(-2px) scale(1.02)",
          },
          "80%": {
            transform: "rotate(-2deg) translateY(-1px) scale(1.01)",
          },
          "90%": {
            transform: "rotate(2deg) translateY(0) scale(1)",
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        reveal: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        complexWave: "complexWave 2s ease-in-out infinite",
        wavingHand: 'wave 2s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        float: 'float 3s ease-in-out infinite',
        reveal: 'reveal 1s ease-out',
      },
    },
  },
  plugins: [],
};
