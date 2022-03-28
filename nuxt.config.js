export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  server: {
    port: 3700,
    host: '0.0.0.0',
  },
  head: {
    title: 'Welcome to Nuxt',
    description: 'This is the description of the meta',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
            'Simplifying Global Trade for individuals and businesses across the globe. Leatherback moves your money from one continent to another with ease.\n' +
            'Anytime, Anywhere, and to almost Everywhere.',
      },
      { name: 'theme-color', content: '#377FF7' },
      { name: 'author', content: 'Leatherback Limited' },
      {
        hid: 'developer',
        name: 'developer',
        content: 'Leatherback Engineering team',
      },
      { hid: 'copyright', name: 'copyright', content: 'Leatherback Ltd.' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
            'finance, pay now, leatherback, turtle, send money, cross border payments',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://leatherback.co/',
      },
      { hid: 'og:type', property: 'og:type', content: 'finance' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Leatherback Ltd' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'LBT Logo' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Leatherback - Fastest Crossborder Payments.',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
            'Simplifying Global Trade for individuals and businesses across the globe. Leatherback moves your money from one continent to another with ease.\n' +
            'Anytime, Anywhere, and to almost Everywhere.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://leatherbackstorage.blob.core.windows.net/frontend/brand/LB-Logo-Blue.png',
      },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US'},
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        name: 'card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        name: 'title',
        content: 'Leatherback - Fastest Crossborder Payments.',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        name: 'description',
        content:
            'Simplifying Global Trade for individuals and businesses across the globe. Leatherback moves your money from one continent to another with ease.\n' +
            'Anytime, Anywhere, and to almost Everywhere.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        name: 'image',
        content: 'https://leatherbackstorage.blob.core.windows.net/frontend/brand/LB-Logo-Blue.png',
      },
      { 'http-equiv': 'expires', content: '43200' },
    ],
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { hid: 'description', name: 'description', content: 'This is the description of the meta' },
    //   // { hid: 'og:url', property: 'og:url', name: 'url', content:'https://nuxt-vue-test-git-improvement-emmathem.vercel.app/' },
    //   // { hid: 'og:type', property: 'og:type', name: 'type', content:'website' },
    //   // { hid: 'og:title', property: 'og:title', name: 'type', content:'Welcome to Nuxt' },
    //   // { hid: 'og:description', property:"og:description", name: 'description', content:'This is the description of the meta' },
    //   // { hid: 'og:image', property:"og:image", name: 'image', content:'https://res.cloudinary.com/emmathem-media-company/f_auto,c_limit,w_3840,q_auto/frontend-picture_e8bcqj.jpg' },
    //   // { hid: 'twitter:url', property: 'twitter:url', name: 'url', content:'https://nuxt-vue-test-git-improvement-emmathem.vercel.app/' },
    //   // { hid: 'twitter:title', property: 'twitter:title', name: 'type', content:'Welcome to Nuxt' },
    //   // { hid: 'twitter:description', property:"twitter:description", name: 'description', content:'This is the description of the meta' },
    //   // { hid: 'twitter:image', property:"twitter:description", name: 'image', content:'https://res.cloudinary.com/emmathem-media-company/f_auto,c_limit,w_3840,q_auto/frontend-picture_e8bcqj.jpg' },
    //   // { name: 'format-detection', content: 'telephone=no' }
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  googleAnalytics: {
    // id: 'UA-XXX-X',
    id: 'G-NPC3JZNQ2C',
    layer: 'dataLayer',
    pageTracking: true,
    autoTracking: {
      screenview: true,
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-NPC3JZNQ2C',
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
