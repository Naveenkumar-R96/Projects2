/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 5px white',
            color: '#ffffff',
          },
          '50%': {
            textShadow: '0 0 1px white',
            color: '#818181',
          },
        },
      },
    },
  },
  plugins: [],
}

