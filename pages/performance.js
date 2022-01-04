import { useSelector, useDispatch } from 'react-redux';
import { getPerformance } from '@/request'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { Table, Input, message, Tabs } from 'antd'
const { Search } = Input
const { TabPane } = Tabs
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const [list, setList] = useState([])
  const getList = (val) => {
    if (!val) return message.warning('please input miner-wallet-address')
    getPerformance({ id: app[0].id, address: val }).then(res => {
      setList(res)
      if (res[0]) {
        setListData(preWorkers(res[0]))
      }
    })
  }
  const preWorkers = (data) => {
    const workers = []
    for (const key in data.workers) {
      workers.push({ created: data.created, ...data.workers[key], workerName: key })
    }
    return workers
  }
  const columns = [
    {
      title: 'workerName',
      dataIndex: 'workerName',
      key: 'workerName',
    },
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
  const tabChange = (val) => {
    if (list[val]) {
      setListData(preWorkers(list[val]))
    }
  }
  return (
    <>
      <Search placeholder="input miner-wallet-address" enterButton="Search" size="large"
        style={
          { marginBottom: '20px' }
        } onSearch={getList} />
      <Tabs defaultActiveKey="1" tabPosition={'top'} style={{ height: 60 }} onChange={tabChange}>
        {list.map((item, index) => (
          <TabPane tab={`${dayjs(item.created).format('YYYY-MM-DD HH:mm')}`} key={index}></TabPane>
        ))}
      </Tabs>
      <Table rowKey="workerName" dataSource={listData} columns={columns} />
    </>
  )
}