import { useSelector, useDispatch } from 'react-redux';
import { getPaymentDetilsList } from '@/request'
import { useEffect, useState } from 'react'
import { Table, Statistic, Card, Row, Col, Input, message } from 'antd'
const { Search } = Input
// import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const [pageInfo, setPageInfo] = useState({
    page: 0,
    size: 20,
    total: 200
  })
  const getList = (val) => {
    if (!val) return message.warning('please input miner-wallet-address')
    getPaymentDetilsList({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size, address: val }).then(res => {
      console.log(res)
      setListData(res)
    })
  }
  const columns = [
    {
      title: 'hashrate',
      dataIndex: 'hashrate',
      key: 'hashrate',
    },
    {
      title: 'sharesPerSecond',
      dataIndex: 'sharesPerSecond',
      key: 'sharesPerSecond',
    }
  ]
  return (
    <>
      <Search placeholder="input miner-wallet-address" enterButton="Search" size="large"
        style={
          { marginBottom: '20px' }
        } onSearch={getList} />
      <Table rowKey="id" dataSource={listData} columns={columns} />
    </>
  )
}