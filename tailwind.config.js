/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: '468px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors :{ 
        deepPurple: '#23252f',
        purple: '#6d59a8',
        white: '#ffffff',
      },

      fontFamily : {
        sans: ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
