const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    //   遇到/api前缀的请求，触发该代理配置
    proxy('/api1', {
      target: 'http://localhost:5000', //请求转发给谁
      changeOrigin: true, //控制服务器收到的请求头中Host的值
      pathRewrite: { '^/api1': '' } //重写请求路径
    })
  )
}
