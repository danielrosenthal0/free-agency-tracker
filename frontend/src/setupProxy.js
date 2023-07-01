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
  app.use(
    '/api/twitter',
    createProxyMiddleware({
      target: 'https://api.twitter.com',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    })
  );
  
};
