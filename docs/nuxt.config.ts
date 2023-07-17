import pkg from '../package.json'
import nexveltUI from '../packages/ui-nuxt/src/module'

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    nexveltUI,
  ],

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  pinceau: {
    studio: false,
  },

  typescript: {
    strict: false,
    includeWorkspace: true,
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  routeRules: {
    '/guide': { redirect: '/guide/getting-started' },
    '/components': { redirect: '/components/elements' },
  },

  css: [
    '~/styles/index.css',
  ],
})
