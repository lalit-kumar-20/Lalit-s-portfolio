/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage:{
        "banner-bg":"url('/public/Background_image_portfolio.jpg')",
      }
    },
  },
  plugins: [],
};

