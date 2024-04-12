/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        sans: ['PlusJakartaSans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          '50': 'var(--color-gray-50)',      // #FAF9F9
          '100': 'var(--color-gray-100)',    // #E8E3E1
          '200': 'var(--color-gray-200)',    // #D6CCCA
          '300': 'var(--color-gray-300)',    // #C3B6B4
          '400': 'var(--color-gray-400)',    // #AFA09E
          default: 'var(--color-gray)',      // #9A8A89
          '600': 'var(--color-gray-600)',    // #7D6D6C
          '700': 'var(--color-gray-700)',    // #5F5150
          '800': 'var(--color-gray-800)',    // #403534
          '900': 'var(--color-gray-900)',    // #211A1A
        },
        primary: {
          '100': 'var(--color-primary-100)', // #E7CCCB
          '200': 'var(--color-primary-200)', // #D7ABA8
          '300': 'var(--color-primary-300)', // #C78985
          '400': 'var(--color-primary-400)', // #B76762
          default: 'var(--color-primary)',   // #9D4E48
          '600': 'var(--color-primary-600)', // #7A3D38
          '700': 'var(--color-primary-700)', // #572B28
          '800': 'var(--color-primary-800)', // #341A18
          '900': 'var(--color-primary-900)', // #110908
        },
      },
      screens: {
        'xs': '480px',
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
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
  plugins: [],
  content: [ // Learn more on https://tailwindcss.com/docs/content-configuration
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    // 'nuxt.config.js'
  ],
  safelist: [],
}
