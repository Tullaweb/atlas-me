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
      maxWidth: {
      '8xl': '1440px',
      'md': '440px',
      },
      colors: {
        Atlassky: '#12B0FA',
        Atlasdark: '#667085',
        darktex: '#0D1E47',
        pegray: '#667085',
        pegrayligt: '#EAECF0',
        footdark: '#1D2939',
        footcard: '#244086',
        moon: '#FDB022',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('../imeges/bg-head-223.png')",
        first: "url('../imeges/bg-head.png')",
      },
      boxShadow: {
        'card': '0px 12px 84px rgba(29, 41, 63, 0.119946)',
        'shadmoon':  '0px 10px 10px -5px rgba(16, 24, 40, 0.03)',
      },
    },
  },
  plugins: [],
}
