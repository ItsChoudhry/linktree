/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "yami": "url('../public/yami.jpg')"
      // },
      spacing: {
        '2/3': '66.666667%'
      }
    },
  },
  plugins: [],
}
