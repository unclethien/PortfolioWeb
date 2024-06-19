/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      stock: ["Stockholm", "sans-serif"],
    },
    animation: {
      'loop-scroll': 'loop-scroll 50s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [],
}

