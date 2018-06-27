module.exports = {
  mode: 'spa',
  build: {
    vendor: ['axios'],
  },
  modules: [
    '@nuxtjs/router',
    '@nuxtjs/blog',
    '@nuxtjs/axios'
  ]
}
