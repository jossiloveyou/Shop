const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/aps', {
      target: 'http://134.175.115.202',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/apa', {
      target: 'https://blog.zdldove.top/',
      changeOrigin: true,
      pathRewrite: {
        '^/apa': ''
      }
    }),
  )
}