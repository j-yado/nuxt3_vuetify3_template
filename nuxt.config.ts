// https://nuxt.com/docs/api/configuration/nuxt-config

// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    server: {
      hmr: {
        protocol: 'ws',
        host: process.env.HOST
      }
    }
  }
})
