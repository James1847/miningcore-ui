import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from '@/request'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { Table, Statistic, Card, Row, Col, Input, message, Tabs } from 'antd'
const { Search } = Input
const { TabPane } = Tabs
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const [list, setList] = useState([])
  const [headerData, setHeaderData] = useState({})
  const getList = (val) => {
    if (!val) return message.warning('please input miner-wallet-address')
    getStatistics({ id: app[0].id, address: val }).then(res => {
      setHeaderData(res)
      setList(res.performanceSamples)
      if (res.performanceSamples[0]) {
        setListData(preWorkers(res.performanceSamples[0]))
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
      <div style={
        { marginBottom: '20px' }
      }>
        <Row style={
          { display: 'flex', justifyContent: 'space-around' }
        }>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="pendingShares"
                value={headerData.pendingShares || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="pendingBalance"
                value={headerData.pendingBalance || 0}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="totalPaid"
                value={headerData.totalPaid || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="totalPaid"
                value={headerData.todayPaid || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="lastPayment"
                value={headerData.lastPayment || 0}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="lastPaymentLink"
                value={headerData.lastPaymentLink || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <Tabs defaultActiveKey="1" tabPosition={'top'} style={{ height: 60 }} onChange={tabChange}>
        {list.map((item, index) => (
          <TabPane tab={`${dayjs(item.created).format('YYYY-MM-DD HH:mm')}`} key={index}></TabPane>
        ))}
      </Tabs>
      <Table rowKey="workerName" dataSource={listData} columns={columns} />
    </>
  )
}