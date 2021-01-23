/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        serif: ['Bugakii', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        gray: {
          '50': '#FAF9F9',
          '100': '#E8E3E1',
          '200': '#D6CCCA',
          '300': '#C3B6B4', // '#DCCABB',
          '400': '#AFA09E',
          default: '#9A8A89',
          '600': '#7D6D6C',
          '700': '#5F5150',
          '800': '#403534',
          '900': '#211A1A'
        },
        primary: {
          '100': '#E7CCCB',
          '200': '#D7ABA8',
          '300': '#C78985',
          '400': '#B76762',
          default: '#9D4E48',
          '600': '#7A3D38',
          '700': '#572B28',
          '800': '#341A18',
          '900': '#110908'
        },
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      },
      // borderRadius: {
      //   ...defaultTheme.borderRadius,
      //   'huge': '5rem'
      // }
    },
  },
  variants: {
    backgroundColor: ['dark'], //, 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark'], // , 'dark-focus', 'dark-focus-within'],
    textColor: ['dark'], // , 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
