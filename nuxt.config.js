import path from 'path'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Malin Parker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f2f2f2' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', 'nuxt-purgecss'],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss'
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme'
  }
}
