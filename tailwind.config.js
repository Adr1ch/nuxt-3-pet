/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      teal: colors.teal,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      'js-for-jm-bold': 'Jill-Sans-for-JM-Bold, sans-serif',
    },
    screens: {
      xxl: '1401px',
      xl: [{ min: '1201px', max: '1400px' }],
      lg: [{ min: '993px', max: '1200px' }],
      md: [{ min: '769px', max: '992px' }],
      sm: [{ min: '577px', max: '768px' }],
      xs: { max: '576px' },
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1230px',
        '2xl': '1230px',
      },
    },
    spacing: {
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      24: '24px',
      25: '25px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      35: '35px',
      37: '37px',
      40: '40px',
      45: '45px',
      50: '50px',
      55: '55px',
      60: '60px',
      70: '70px',
      84: '84px',
      100: '100px',
      103: '103px',
      200: '200px',
      300: '300px',
      350: '350px',
      400: '400px',
      450: '450px',
      580: '580px',
      700: '700px',
    },
    extend: {
      colors: {
        mandarin: {
          100: '#F2582240',
          900: '#F25822',
        },
        cucumber: {
          100: '#14921147',
          200: '#7cb342',
        },
        melon: {
          100: '#FFCD1D3D',
        },
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        asphalt: {
          100: '#888888',
        },
      },
      boxShadow: {
        btn: '4px 4px 8px rgba(242, 88, 34, 0.2)',
      },
      width: (theme) => ({
        ...theme('spacing'),
      }),
      height: (theme) => ({
        ...theme('spacing'),
      }),
      fontSize: (theme) => ({
        ...theme('spacing'),
      }),
      padding: (theme) => ({
        ...theme('spacing'),
      }),
      margin: (theme) => ({
        ...theme('spacing'),
      }),
      borderRadius: (theme) => ({
        DEFAULT: '4px',
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      inset: (theme) => ({
        ...theme('spacing'),
      }),
      gridTemplateColumns: {
        header: 'min-content auto min-content',
        'double-min-content': 'repeat(2, min-content)',
        auto: 'auto',
      },
      gap: (theme) => ({
        ...theme('spacing'),
      }),
      lineHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}
