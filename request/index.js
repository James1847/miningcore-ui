import request from "./request"
/**
  /api/pools
  获取矿机,暂时只有一条数据
  /api/pools/<pool-id>/blocks
  列表返回正在被挖的区块
  /api/pools/<pool-id>/payments
  返回有关池发出的付款的信息

  /api/pools/<pool-id>/miners
  /api/pools/<pool-id>/performance

  /api/pools/<pool-id>/miners/<miner-wallet-address>
  result:统计信息   workers: 当前矿机下的旷工 success:为false,提示当前矿池下没有旷工

  /api/pools/<pool-id>/miners/<miner-wallet-address>/payments
  返回有关池向指定矿工发出的付款的信息(支付记录),分页列表
  /api/pools/<pool-id>/miners/<miner-wallet-address>/performance
  // 最近24小时的
 */
export const getPools = (data) => {
  return request(data, {
    url: '',
    method: 'get'
  })
}
export const getPayments = (data) => {
  return request(data, {
    url: `/${data.id}/payments`,
    method: 'get'
  })
}
export const getCurrentBlocks = (data) => {
  return request(data, {
    url: `/${data.id}/blocks`,
    method: 'get'
  })
}
export const getMiners = (data) => {
  return request(data, {
    url: '/eth1/miners',
    method: 'get'
  })
}