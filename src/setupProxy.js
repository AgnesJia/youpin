const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(
    ["/homepage","/app"], { 
    target: "https://m.youpin.mi.com",
    changeOrigin: true
  }
  ));
  app.use(proxy(
    "/api", { 
    target: "https://app.youpin.mi.com",
    changeOrigin: true,
    pathRewrite:{
      '/api':''
    }
  }));
  app.use(proxy(
    "/h5ajax", { 
    target: "http://touch.m.dangdang.com",
    changeOrigin: true
  }));
};