/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: '#E7F5FD',
        accent: '#CAECFF',
        primary: '#2D9CDB',
        secondary: '#0099EE',
        success: '#56E4A0',
        danger: '#F36868',
      },
    },
  },
  plugins: [],
}