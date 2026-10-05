// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    meta: [
      { hid: 'description', name: 'description', content: 'Namix' },
      { property: 'og:title', content: 'Namix' },
      { property: 'og:description', content: 'Namix 2' },
      { property: 'og:image', content: '/logo.png' },
      { property: 'og:url', content: 'https://namix.top' }
    ],
  },

  devtools: { enabled: true },

  css: ['@/assets/main.css', '@/assets/stylesheet.css'],

  modules: ['@nuxtjs/robots'],
})