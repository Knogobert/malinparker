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
        sans: [...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      }
      /*
      colors: {
        primary: {
          lightest: '#FFF5E6',
          lighter: '#F5C799',
          light: '#DE8C5A',
          default: '#b84e2b',
          dark: '#A63B17',
          darker: '#8F2A08',
          darkest: '#731C00'
        },
        secondary: {
          light: '#fffffa',
          default: '#fffff0',
          medium: '#fcfced',
          dark: '#F2F2E2',
          darker: '#E6E6D5',
          darkest: '#D9D9C7',
          contrast: '#CCCCBA',
          black: '#40402f'
        },
        tertiary: '#005657',
      },
      */
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      whitelist: ['btn']
    }
  }
}
