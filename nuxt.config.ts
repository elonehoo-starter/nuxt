export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    'nuxt-vitest',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
