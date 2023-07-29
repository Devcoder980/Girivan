/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f3f4f6",
          "secondary": "#047857",
          "accent": "#c9e27c",
          "neutral": "#26232f",
          "base-100": "#2b3834",
          "info": "#4582de",
          "success": "#106a4c",
          "warning": "#edb526",
          "error": "#f86377",
        },
      },
    ],
  },

}