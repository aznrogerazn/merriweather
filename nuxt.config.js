
/**
 * Merriweather v0.0.2
 * Modular Layout Configurator
 * r.w. 2019
 */
const _ = require('lodash');
const LAYOUT = _.merge(
  require('./layout.defaults'),
  require('./layout.config'));

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=auto' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: (() => {
        return '/logo/rect.jpg';
      })() }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: (() => {
        return '/icon2.png';
      })() },
      // Google Fonts by LAYOUT config
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?display=swap&family=' + LAYOUT.googleFontsToLoad.map(fnt => fnt.replace(/ /g, '+')).join('|')
      },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/sweetalert2@8' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/global.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  /* Global CSS Modules */
  styleResources: {
    sass: [
      'assets/global.sass'
    ]
  },
  
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Import JS mixins easily
      config.resolve.alias['Mixins'] = '~/assets/js/mixins';
    },
    loaders: [
      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  /**
   * Environmental Configuration
   * !IMPORTANT!
   * Mandatory Properties:
   * - APP_LAYOUT: Object, merged from layout.defaults.js & layout.config.js
   * - 
   */
  env: {
    APP_LAYOUT: LAYOUT,
    INDEX_LAYOUT: [
      { type: 'TitleBar' },
    ],
    DEMO1_LAYOUT: [
      { type: 'TitleBar', },
      { type: 'Carousel', },
      { type: 'Announcements', },
      { type: 'SmallGameGrid', },
      { type: 'PromoGrid', },
      { type: 'GameMenu', },
    ],
  },
}
