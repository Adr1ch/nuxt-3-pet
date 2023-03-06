export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
          'defineStore',
        ],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css'],
})
