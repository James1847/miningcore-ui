/**
 * 前端代理解决跨域
 * node server 启动代理
 */
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use('*', createProxyMiddleware({ target: ' http://localhost:6002/', changeOrigin: true }));
app.use(cors())
app.listen(9999)