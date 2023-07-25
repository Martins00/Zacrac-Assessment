// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  // app: {
  //   head: {
  //     link: [
  //       { rel: "icon", type: "image/png", href: "/logo.png" },
  //     ],
  //   },
  // },

  css: [
    "~/assets/fonts/styles.css",
    "~/assets/css/global.css",
  ],

  modules: ["@nuxtjs/tailwindcss"],

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
