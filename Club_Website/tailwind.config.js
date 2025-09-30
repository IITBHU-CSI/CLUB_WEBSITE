/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        basefnt: "1.5rem",
        headfnt: "1.7rem",
      },
   
      keyframes: {
  scrollUp: {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-50%)' }, 
  },
  scrollDown: {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(50%)' },
  },
},
animation: {
  scrollUp: 'scrollUp 15s linear infinite',
  scrollDown: 'scrollDown 15s linear infinite',
},

    },
  },
  plugins: [],
};
