import { useSelector, useDispatch } from 'react-redux';
import { getStatistics } from '@/request'
import { useEffect, useState } from 'react'
import { Table, Statistic, Card, Row, Col, Input, message } from 'antd'
const { Search } = Input
// import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const [headerData, setHeaderData] = useState({
    "pendingShares": 16000,
    "pendingBalance": 1.23,
    "totalPaid": 0,
    "lastPayment": null,
    "lastPaymentLink": null,
    "performance": {
      "created": "2017-12-29T13:07:23.845444",
      "workers": {
        "worker1": {
          "hashrate": 1000,
          "sharesPerSecond": 0.0008333333333333334
        },
        "worker2": {
          "hashrate": 2000,
          "sharesPerSecond": 0.001666666
        }
      }
    }
  })
  const getList = (val) => {
    if (!val) return message.warning('please input miner-wallet-address')
    getStatistics({ id: app[0].id, address: val }).then(res => {
      console.log(res)
      //   setListData(res)
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
      <Table rowKey="id" dataSource={listData} columns={columns} />
    </>
  )
}