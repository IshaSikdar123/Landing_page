/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Customize this value to your desired 3xl breakpoint
      },
      colors: {
        dash : '#00FFFF',
      }
      
    },
  },
  plugins: [],
}