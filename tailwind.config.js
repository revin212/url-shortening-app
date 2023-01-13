/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-cyan-hover': 'hsl(180, 60%, 75%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
        'neutral-very-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-very-dark-violet': 'hsl(260, 8%, 14%)',
      },

      fontSize: {
        'main-size': '18px',
      },

      fontFamily: {
        'main-font': ['Poppins', 'sans-serif'],
      }
    },

  },
  plugins: [],
}
