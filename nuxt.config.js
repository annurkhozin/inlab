export default {
  ssr: false,
  standalone: true,

  target: "static",

  // globalName: "inlabApp",

  // globals: {
  //   id: (globalName) => `${globalName}`,
  //   nuxt: (globalName) => `$${globalName}`,
  // },
  server: {
    host: "0.0.0.0", // default: localhost
    port: 8000, // default: 3000
  },

  head: {
    title: "INLAB Smart Investing",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: "INLAB Smart Investing",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "author", name: "author", content: "INLAB Investing" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [],

  loadingIndicator: {
    name: "circle",
    color: "#4eb883",
    background: "white",
  },

  plugins: [],

  components: true,

  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/svg",
    "@nuxtjs/moment",
  ],

  purgeCSS: {
    whitelist: ["dark-mode"],
  },

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/i18n",
    "@nuxtjs/toast",
    "nuxt-lazy-load",
    "nuxt-highcharts",
  ],
  toast: {
    position: "bottom-center",
    duration: 3000,
  },

  svg: {
    vueSvgLoader: {},
    svgSpriteLoader: {},
  },

  i18n: {
    // seo: true,
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js",
      },
      {
        name: "Indonesia",
        code: "id",
        iso: "id-ID",
        file: "id-ID.js",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      onlyOnRoot: true, // recommended
    },
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },

  axios: {
    baseURL: "/",
  },

  pwa: {
    meta: {
      title: "INLAB Smart Investing",
      author: "annurkhozin@gmail.com",
    },
    manifest: {
      name: "INLAB Smart Investing",
      short_name: "INLAB",
      description: "INLAB Smart Investing",
      lang: "en",
      theme_color: "#317EFB",
    },
  },

  build: {
    publicPath: "/core/",
  },
};
