/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-1px)' },
          '25%': { transform: 'translateX(1px)' },
          '50%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(1px)' }
        }
      },
    },
    animation: {
      wave: 'wave 2s infinite linear',
    }
  },
  plugins: [],
}

