import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

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
  modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/fonts'],
  /*
   ** Build configuration
   */
  build: {},
  /*
   ** Custom additions configuration
   */
  tailwindcss: {
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  fonts: {
    priority: ['bunny', 'fontsource'],
    providers: {
      google: false,
    }
  },
  content: {},
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
