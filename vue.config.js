const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理服务器
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8090', //要跨域的域名
        changeOrigin: true, //开启跨域
        pathRewirte: {
          //重写路径
          '^/api': '/api',
        },
      },
    },
  },
});
