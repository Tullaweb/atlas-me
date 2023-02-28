/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        Atlassky: '#12B0FA',
        Atlasdark: '#667085',
        darktex: '#0D1E47',
        pegray: '#667085',
        pegrayligt: '#EAECF0',
        footdark: '#1D2939',
        footcard: '#244086',
      },
     
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        hero: "url('../imeges/bg-head-223.png')",
        first: "url('../imeges/bg-head.png')",
      }
    },
  },
  plugins: [],
}
