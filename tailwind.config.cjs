module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077cc',
        aqua: '#cceeff',
        softBlue: '#e6f7ff',
        darkBlue: '#003366',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        'bounce-slower': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 4s infinite',
        'bounce-slower': 'bounce-slower 7s infinite',
      },
    },
  },
  plugins: [],
}; 