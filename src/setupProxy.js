const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/googlemaven/", {
      target: "https://dl.google.com/dl/android/maven2",
      changeOrigin: true,
      pathRewrite: {
        "/googlemaven/": ""
      },
      logLevel: "debug"
    })
  );
};
