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
          '50': '#FAFAF9',
          '100': '#F5F5F4',
          '200': '#E7E5E4',
          '300': '#D6D3D1',
          '400': '#A8A29E',
          '500': '#78716C',
          '600': '#57534E',
          '700': '#44403C',
          '800': '#292524',
          '900': '#1C1917'
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
      }
    },
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
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
