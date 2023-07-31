/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#3EE4FF',
        secondary: '#00FFCE',
        tertiary: '#040F23',
        // add tailwind colors
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        gray: colors.gray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
      backgroundImage: {
        'hero-1': 'url(/assets/images/hero/hero-1.jpg)',
        'hero-2': 'url(/assets/images/hero/hero-2.jpg)',
        'hero-3': 'url(/assets/images/hero/hero-3.jpg)',
        'hero-4': 'url(/assets/images/hero/hero-4.jpg)',
      },
      fontFamily: {
        primary: ['Poppins'],
      },
      animation: {
        display: 'fadeOut 1s ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: 0, top: '-30px' },
          '100%': { opacity: '100%', top: '0px' },
        },
      }),
    },
  },
  plugins: [],
};
