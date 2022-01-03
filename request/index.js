import request from "./request"

export const getPools = (data) => {
    return request(data, {
        url: 'api/pools',
        method: 'get'
    })
}


export const getMiners = (data) => {
    return request(data, {
        url: 'api/pools/eth1/miners',
        method: 'get'
    })
}