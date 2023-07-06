const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://api.sportradar.us',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/nba/trial/v8'
      },
    })
  );
};
