import request from './../request'
export const testApi = (data) => {
  return request(data, {
    url: 'api/joke',
    method: 'get'
  })
}