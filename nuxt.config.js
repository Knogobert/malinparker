import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default defineNuxtConfig({
  // extends: ["gh:user/repo", { auth: process.env.GITHUB_TOKEN, install: true }], // https://nuxt.com/docs/api/nuxt-config#themes / https://nuxt-themes.netlify.app/themes/docus
  target: 'static',
  compatibilityDate: '2024-09-25',

  components: true,
  devtools: { enabled: true },

  dir: {
    public: 'static',
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US',
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
  modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/fonts', '@nuxthq/studio', '@nuxt/image', '@oku-ui/motion-nuxt' ],

  /*
   ** Build configuration
   */
  build: {},

  /*
   ** Custom additions configuration
   */
  studio: {
    enabled: true
  },

  image: {
    provider: process.env.NODE_ENV === 'production'
      ? 'netlifyImageCdn'
      : 'ipx',
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetchedClass: 'prefetchd',
        trailingSlash: 'append' // can be undefined, 'append' or 'remove'
      }
    }
  },

  nitro: {
    // debug: true,
    prerender: {
      crawlLinks: false,
      routes: ['/cases/', '/designs/', '/sitemap.xml'],
      // concurrency: 1,
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },

  motion: {
    // Motion One options
  },

  fonts: {
    priority: ['local', 'bunny', 'fontsource'],
    providers: {
      google: false,
    },
    assets: {
      prefix: '/static/fonts' // The prefix where your fonts will be accessible
    },
    defaults: {
      weights: [400, 700],
      styles: ['normal', 'italic'],
      subsets: [
        'latin-ext',
        'latin',
      ]
    },
    fallbacks: {
      // 'serif': ['Times New Roman'],
      'sans-serif': ['Helvetica', 'Arial'],
      // 'monospace': ['Courier New'],
    },
  },

  content: {
    navigation: {
      fields: ['slug']
    },
  },

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
  },
})