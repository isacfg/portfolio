/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    screns: {
      sm: { max: '479px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1439px' },
    },
    extend: {
      colors: {
        white: '#FFF',
        purple: '#543CD9',
        midnight: '#0A0430',
        gray: '#7F7F7F',
        lightgray: '#D9D9D9',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {

          "primary": "#543cd9",

          "secondary": "#818CF8",

          "accent": "#F471B5",

          "neutral": "#0F172A",

          "base-100": "#fff",

          "info": "#0CA5E9",

          "success": "#2DD4BF",

          "warning": "#F4BF50",

          "error": "#FB7085",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }
}
