// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  tailwindcss: {
    exposeConfig: true,
  },
  css: [
    '@/assets/css/nuxt-content.css'
  ],
})
