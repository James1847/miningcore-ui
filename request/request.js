import axios from 'axios'
const BASE_URL = 'https://miningcoreui.cxdnb.top/api/pools'// 生产
// const BASE_URL = 'http://18.130.107.69:4000/api/pools'// 测试
const service = axios.create({
  baseURL: BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000, // request timeout
  withCredentials: false
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// eslint-disable-next-line import/no-anonymous-default-export
export default (data = {}, { url, method }, showErrMsg = true) => {
  return new Promise((resolve, reject) => {
    service({
      url,
      method,
      params: data.query || (method === 'get' ? data : {}),
      data: data.body || (method === 'post' ? data : {}),
      timeout: 1000 * 60,
      headers: {
        ...data.headers
      }
    }).then(res => {
      // if (Number(res.data.code) !== 200) {
      //   // 业务异常
      //   // 请在此处处理业务异常
      //   if (showErrMsg) Message.warning(res.data.msg || '网络异常')
      //   reject(res.data)
      //   return false
      // }
      resolve(res.data)
    }).catch(err => {
      // http异常
      reject(err.data)
    })
  })
}