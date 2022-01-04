/**
 * 前端代理解决跨域
 * node server 启动代理
 */
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use(cors())
app.use('*', createProxyMiddleware({ target: 'http://8.208.103.252:4000/api/pools/', changeOrigin: true }));
app.listen(9999)