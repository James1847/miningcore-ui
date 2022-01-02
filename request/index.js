import request from "./request"
export const getPools = (data) => {
  return request(data, {
    url: 'api/pools',
    method: 'get'
  })
}