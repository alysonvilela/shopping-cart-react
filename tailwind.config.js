const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        cursive: ['Lobster', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
              1: 'hsl(250, 20.0%, 10.2%)',
              2: 'hsl(255, 30.3%, 12.9%)',
              3: 'hsl(253, 37.0%, 18.4%)',
              4: 'hsl(252, 40.1%, 22.5%)',
              5: 'hsl(252, 42.2%, 26.2%)',
              6: 'hsl(251, 44.3%, 31.1%)',
              7: 'hsl(250, 46.8%, 38.9%)',
              8: 'hsl(250, 51.8%, 51.2%)',
              9: 'hsl(252, 56.0%, 57.5%)',
              10: 'hsl(251, 63.2%, 63.2%)',
              11: 'hsl(250, 95.0%, 76.8%)',
              12: 'hsl(252, 87.0%, 96.4%)'
        },
        secondary: {
              1: 'hsl(246, 6.0%, 9.0%)',
              2: 'hsl(240, 5.1%, 11.6%)',
              3: 'hsl(241, 5.0%, 14.3%)',
              4: 'hsl(242, 4.9%, 16.5%)',
              5: 'hsl(243, 4.9%, 18.8%)',
              6: 'hsl(244, 4.9%, 21.5%)',
              7: 'hsl(245, 4.9%, 25.4%)',
              8: 'hsl(247, 4.8%, 32.5%)',
              9: 'hsl(252, 4.0%, 45.2%)',
              10: 'hsl(247, 3.4%, 50.7%)',
              11: 'hsl(253, 4.0%, 63.7%)',
              12: 'hsl(256, 6.0%, 93.2%)'
        },
      }
    }
  },
  plugins: []
}
