import { useSelector, useDispatch } from 'react-redux';
import { getPerformance } from '@/request'
import { useEffect, useState } from 'react'
import { Table, Statistic, Card, Row, Col, Input, message } from 'antd'
const { Search } = Input
// import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const getList = (val) => {
    if (!val) return message.warning('please input miner-wallet-address')
    getPerformance({ id: app[0].id, address: val }).then(res => {
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