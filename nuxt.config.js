
import faunadb from 'faunadb'
import dotenv from 'dotenv'
dotenv.config()
const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default {
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Steff Agency'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Agencia de promotoras y modelos en Buenos Aires, para eventos empresariales, ferias, congresos y exposiciones'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: [
          'agencia de promociones',
          'agencia de promotoras',
          'promotoras para exposiciones',
          'promotoras en via publica',
          'promotoras buenos aires',
          'promotoras Argentina',
          'promotoras CABA',
          'promotoras capital federal',
          'promotoras en buenos aires',
          'promotoras en capital federal',
          'promotoras en Argentina',
          'promotoras en CABA',
          'cotizacion promotoras',
          'presupuesto promotoras',
          'contratacion de promotoras',
          'seleccion de promotoras',
          'cotizacion promotores',
          'presupuesto promotores',
          'contratacion de promotores',
          'seleccion de promotores',
          'organizacion de eventos',
          'promotoras para eventos',
          'azafatas promotoras',
          'azafatas bilingües',
          'azafatas traductoras',
          'uniformes de promotoras',
          'uniforme para promocion',
          'congresos',
          'feria',
          'ferias',
          'exposiciones',
          'exposición'
        ].join(',')
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  loading: { color: '#fff' },

  css: ['~assets/scss/main.scss'],
  styleResources: {
    scss: ['~assets/scss/main.scss']
  },

  plugins: [
    '~/plugins/moment.js',
    '~/plugins/db.js',
    '~/plugins/dlocal.js'
  ],

  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-154146194-1'
  },

  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-buefy', {materialDesignIcons: true}],
    '@nuxtjs/axios',
    ['nuxt-validate', {
      lang: 'es',
      nuxti18n: true
    }],
    'nuxt-i18n',
    '@nuxtjs/moment',
    '@nuxtjs/sitemap'
  ],

  axios: {
    debug: false,
    baseURL:  (process.env.URL) ? 'https://steff-api.netlify.app' : 'http://localhost:34567',
    proxyHeaders: true
  },

  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.js',
        name: 'Español'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        name: 'English'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it.js',
        name: 'Italiano'
      }    
    ],
    detectBrowserLanguage: {
      cookieKey: 'nf_lang',
      useCookie: true,
      // fallbackLocale: 'es',
      onlyOnRoot: true
    },
    strategy: 'prefix',
    defaultLocale: 'es',
    lazy: true,
    langDir: 'lang/',
    seo: false
  },

  moment: {
    timezone: true,
    locales: ['es', 'it']
  },

  sitemap: {
    hostname: 'https://steff-agency.netlify.app/',
    trailingSlash: true,
    routes: () => {
      return client.query(
      q.Map(
          q.Paginate(
            q.Match(q.Index('approved_staff'), true),
            { size: 1000 }
          ),
        ref => q.Get(ref)
        )
      ).then(({ data }) => {
        let routes = [
          '/es/uniformes',
          '/en/uniforms',
          '/it/divise',
          '/es/presupuesto',
          '/en/quotation',
          '/it/preventivo',
          '/es/application',
          '/en/application',
          '/it/application',
          '/es/staff',
          '/en/staff',
          '/it/staff'
        ]
        data.forEach(({ data: { slug }}) => {
          routes.push(`/es/staff/${slug}`)
          routes.push(`/en/staff/${slug}`)
          routes.push(`/it/staff/${slug}`)
        })
        return routes
      })
    } 
  },

  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true        
      }
    },
    // quiet: false,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
    }
  },

  generate: {
    routes: () => {
      let staff = client.query(
      q.Map(
          q.Paginate(
            q.Match(q.Index('approved_staff'), true),
            { size: 100000 }
          ),
        ref => q.Get(ref)
        )
      ).then(({ data }) => {
        let routes = ['/404.html']
        data.forEach(({ data: { slug }}) => {
          routes.push(`/es/staff/${slug}`)
          routes.push(`/en/staff/${slug}`)
          routes.push(`/it/staff/${slug}`)
        })
        return routes
      })
      let booking = client.query(
        q.Map(
          q.Paginate(
            q.Documents(q.Collection('offers')),
            { size: 100000 }
          ),
          q.Lambda(ref => q.Get(ref))
        )
      ).then((res) => {
        let payments = []
        res.data.forEach(({ ref: { value: { id }}}) => {
          payments.push(`/es/payments/booking/${id}`)
          payments.push(`/en/payments/booking/${id}`)
          payments.push(`/it/payments/booking/${id}`)
          payments.push(`/es/payments/balance/${id}`)
          payments.push(`/en/payments/balance/${id}`)
          payments.push(`/it/payments/balance/${id}`)
        })
        return payments
      })
      return Promise.all([staff, booking]).then(values => {
        return [].concat.apply([], values)
      })
    }
  }
}