/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        sans: [
          'PlusJakartaSans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          'Roboto Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        gray: {
          '50': 'hsl(var(--color-gray-50) / <alpha-value>)',      // #FAF9F9
          '100': 'hsl(var(--color-gray-100) / <alpha-value>)',    // #E8E3E1
          '200': 'hsl(var(--color-gray-200) / <alpha-value>)',    // #D6CCCA
          '300': 'hsl(var(--color-gray-300) / <alpha-value>)',    // #C3B6B4
          '400': 'hsl(var(--color-gray-400) / <alpha-value>)',    // #AFA09E
          DEFAULT: 'hsl(var(--color-gray) / <alpha-value>)',      // #9A8A89
          '600': 'hsl(var(--color-gray-600) / <alpha-value>)',    // #7D6D6C
          '700': 'hsl(var(--color-gray-700) / <alpha-value>)',    // #5F5150
          '800': 'hsl(var(--color-gray-800) / <alpha-value>)',    // #403534
          '900': 'hsl(var(--color-gray-900) / <alpha-value>)',    // #211A1A
        },
        primary: {
          '100': 'hsl(var(--color-primary-100) / <alpha-value>)', // #E7CCCB
          '200': 'hsl(var(--color-primary-200) / <alpha-value>)', // #D7ABA8
          '300': 'hsl(var(--color-primary-300) / <alpha-value>)', // #C78985
          '400': 'hsl(var(--color-primary-400) / <alpha-value>)', // #B76762
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',   // #9D4E48
          '600': 'hsl(var(--color-primary-600) / <alpha-value>)', // #7A3D38
          '700': 'hsl(var(--color-primary-700) / <alpha-value>)', // #572B28
          '800': 'hsl(var(--color-primary-800) / <alpha-value>)', // #341A18
          '900': 'hsl(var(--color-primary-900) / <alpha-value>)', // #110908
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
