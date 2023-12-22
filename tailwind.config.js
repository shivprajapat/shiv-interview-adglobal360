/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "14px",
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#3F51B5",
          200: "#C5CAE9",
          300: "#303F9F",
          400:'#283593'
        },
        grey: {
          100: "#FAFAFA",
          200:'#E5E5E5'
        },
        secondary: {
          100: "#4C4C4C",
          200: "#009688",
        },
      },
    },
  },
  plugins: [],
};
