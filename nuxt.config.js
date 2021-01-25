export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'gladhouse_dashboard',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@plugins/vuetify',
        // '@plugins/vee-validate'
        { src: '~plugins/vee-validate.js', ssr: true },
        '@plugins/api'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxt/content',
        '@nuxtjs/auth-next'
    ],
    router: {
        middleware: ['auth']
    },

    auth: {
        redirect: {
            login: '/login',
            home: '/'
        },
        strategies: {
            laravelJWT: {
                provider: 'laravel/jwt',
                url: 'http://gladhouse_backend.test/api/v1',
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: false
                    },
                    logout: {
                        url: '/auth/logout',
                        method: 'post'
                    },
                    user: {
                        url: '/auth/user',
                        method: 'get',
                        propertyName: false
                    }
                },
                token: {
                    property: 'access_token',
                    maxAge: 60 * 60
                },
                refreshToken: {
                    maxAge: 20160 * 60
                }
            }
        }
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    // axios: {},
    axios: {
        baseURL: 'http://gladhouse_backend.test/api/v1', // Used as fallback if no runtime config is provided
        credentials: true,
        proxy: true
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ['vee-validate'],
        // analyze: true
        build: {
            vendor: [
                'api'
            ]
        }
    }
};
