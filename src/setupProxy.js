const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(
    ["/homepage","/app"], { 
    target: "https://m.youpin.mi.com",
    changeOrigin: true
  }
  ));
};