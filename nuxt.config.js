module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-web2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
      '@nuxtjs/axios',
  ],
  axios: {
      // prefix: '/api/',
      // proxy: true // Can be also an object with default options
  },

  proxy: {
      // '/api/': { target: 'http://localhost:8080', pathRewrite: {'^/api/': ''} }
  },
  plugins: [
    {src: "~/plugins/vue-swiper.js",ssr: false},
    {src: '~plugins/ElementUI',ssr: true}
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './static/common.css',
    'static/font/iconfont.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    vendor:['element-ui']
  }
}
