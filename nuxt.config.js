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
      { hid: 'description', name: 'description', content: 'This is the description of the meta' },
      { hid: 'og:url', property: 'og:url', name: 'url', content:'https://nuxt-vue-test-git-improvement-emmathem.vercel.app/' },
      { hid: 'og:type', property: 'og:type', name: 'type', content:'Welcome to Nuxt' },
      { hid: 'og:title', property: 'og:title', name: 'type', content:'website' },
      { hid: 'og:description', property:"og:description", name: 'description', content:'This is the description of the meta' },
      { hid: 'og:image', property:"og:image", name: 'image', content:'/favicon.ico' },
      { hid: 'twitter:url', property: 'twitter:url', name: 'url', content:'https://nuxt-vue-test-git-improvement-emmathem.vercel.app/' },
      { hid: 'twitter:type', property: 'twitter:type', name: 'type', content:'Welcome to Nuxt' },
      { hid: 'twitter:title', property: 'twitter:title', name: 'type', content:'website' },
      { hid: 'twitter:description', property:"twitter:description", name: 'description', content:'This is the description of the meta' },
      { hid: 'twitter:image', property:"twitter:description", name: 'image', content:'/favicon.ico' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
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

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
