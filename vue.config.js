"use strict";

module.exports = {
  devServer: {
    proxy: {
      // proxyTable 설정
      "/v1": {
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
