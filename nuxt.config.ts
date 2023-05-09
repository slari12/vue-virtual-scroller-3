// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: ['~/assets/css/tailwind.css'],
    imports: {
      dirs: ['stores']
    },
    modules: [
      "@nuxtjs/tailwindcss",
      ['@pinia/nuxt',{autoImports: ['defineStore', 'acceptHMRUpdate', 'definePiniaStore']}]
    ]
})
