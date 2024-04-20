import glob from 'glob'
import path from 'path'
import * as SITE_INFO from './assets/content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

const dynamicContentPath = 'assets/content' // ? No prepending/appending backslashes here
const dynamicRoutes = getDynamicPaths(
  {
    'cases': 'cases/*.json',
    'designs': 'designs/*.json'
  },
  dynamicContentPath
)

export default defineNuxtConfig({
  // extends: ["gh:user/repo", { auth: process.env.GITHUB_TOKEN, install: true }], // https://nuxt.com/docs/api/nuxt-config#themes / https://nuxt-themes.netlify.app/themes/docus
  target: 'static',
  components: true,
  devtools: { enabled: true },
  dir: {
    public: 'static',
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US',
    resumeUrl: SITE_INFO.resumeUrl || '/img/cv-Malin-Parker-6-feb-2021.pdf',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap',
        media: 'print',
        onload: `this.media='all'`,
      }
    ], // ? Imports the font 'Roboto Mono'
    noscript: [{
      innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap">'
    }],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  generate: {
    routes: dynamicRoutes,
    fallback: true,
    subFolders: false
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f3f5f4' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [ '@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss' ],
  /*
   ** Build configuration
   */
  build: {
    // transpile: ['vue-intersect'],
    extractCSS: true,
  },
  /*
   ** Custom additions configuration
   */
  tailwindcss: {
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  // purgeCSS: {
  //   mode: 'postcss',
  //   whitelist: ['dark-mode', 'light-mode', 'btn', 'icon', 'main', 'image', 'intro'],
  //   whitelistPatterns: [/^article/, /image/, /md-content/, /^grid/, /step/, /medium-zoom/, /^header/, /__nim_o/, /^vue-content-/]
  // },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  pwa: {
    manifest: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      short_name: 'MKP',
      lang: SITE_INFO.sitelang || process.env.lang || 'en-US',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        }
      ],
    },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: SITE_INFO.sitelang || process.env.lang || 'en-US',
      ogHost: process.env.URL,
      ogImage: '/ogp-dark.png'
    }
  }
})

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable - example below
 * {
 *   blog: 'blog/*.json',
 *   projects: 'projects/*.json'
 * }
 *
 * @return {Array} - Will return those files into urls for SSR generated .html's like
 * [
 *   /blog/2019-08-27-incidunt-laborum-e ,
 *   /projects/story-test-story-1
 * ]
 */
function getDynamicPaths(urlFilepathTable, cwdPath) {
  console.log('Going to generate dynamicRoutes for these collection types: ', urlFilepathTable)
  const dynamicPaths = [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      const filepathGlob = urlFilepathTable[url]
      return glob.sync(filepathGlob, { cwd: cwdPath }).map(filepath => {
        return `/${url}/${path.basename(filepath, '.json')}`
      })
    })
  )
  console.log('Found these dynamicPaths that will be SSR generated:', dynamicPaths)
  return dynamicPaths
}
