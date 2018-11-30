var target = process.env.DEV_SERVER_PROXY_TARGET;

var devServer = {
  proxy: {
    '/socket.io': {
      target: target,
      ws: true,
      changeOrigin: true,
    },
    '/api/v1/*': {
      target: target,
      pathRewrite: { '^/api/v1': '' },
      changeOrigin: true,
    },
  },
};

module.exports = {
  devServer: devServer,
};
