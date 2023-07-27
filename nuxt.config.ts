// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Logoipsum'
    },
  },

  css: [
    "~/assets/fonts/styles.css",
    "~/assets/css/global.css",
  ],

  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },

  runtimeConfig: {
    public: {
      api: {
        baseURL: "/",
      },
    },
  },
});
