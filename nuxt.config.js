import glob from 'glob'
import path from 'path'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

const SITE_NAME = 'Malin Parker'

var dynamicRoutes = getDynamicPaths({
  '/blog': 'pages/blog/*.json',
  '/projects': 'pages/projects/*.json'
})

export default {
  mode: 'universal',
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f3f5f4' },
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
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],
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
    mode: 'postcss',
    whitelist: ['dark-mode', 'light-mode', 'btn', 'icon', 'main', 'article', 'articles']
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme'
  },
  pwa: {
    manifest: { name: SITE_NAME },
    meta: {
      ogHost: process.env.URL,
      ogImage: '/ogp.jpg'
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  console.log('dynamicRoutes urlFilepathTable: ', urlFilepathTable)
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      var filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: 'content' }).map((filepath) => `${url}/${path.basename(filepath, '.json')}`)
    })
  )
}
