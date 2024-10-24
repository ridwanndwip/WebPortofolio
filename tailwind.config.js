/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      's': '576px',
      'm': '768px',
      'l': '992px',
      'xl': '1280px',
      'hd': '1680px',
    },
    extend: {
      // fontSize : {
      //   '10' : '10px',
      // },
      colors: {
        'cream': '#ECE7E1',
        'dark' : '#0A0A0A',
      },
    },
  },
  plugins: [],
}