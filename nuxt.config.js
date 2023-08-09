const routerBase = '/'
export default {
  ssr: false,
  generate: {
    fallback: true,
  },
  watch: ['src'],
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/eslint-module'],
  router: {
    base: routerBase,
    extendRoutes(routes) {
      routes.push(
        {
          path: '/',
          redirect: '/home',
        },
        {
          path: '*',
          redirect: '/home',
        }
      )
    },
  },
  env: {
    routerBase,
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    },
  },
}
