import { useSelector, useDispatch } from 'react-redux';
import { getPayments } from '@/request'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([
    {
      "coin": "XMR",
      "address": "9wviCeWe2D8XS82k2ovp5EUYLzBt9pYNW2LXUFsZiv8S3Mt21FZ5qQaAroko1enzw3eGr9qC7X1D7Geoo2RrAotYPwq9Gm8",
      "addressInfoLink": "https://xmrchain.net/addr/9wviCeWe2D8XS82k2ovp5EUYLzBt9pYNW2LXUFsZiv8S3Mt21FZ5qQaAroko1enzw3eGr9qC7X1D7Geoo2RrAotYPwq9Gm8",
      "amount": 7.5354,
      "transactionConfirmationData": "9e7f68c7891e0f2fdbfd0086d88be3b0d57f1d8f4e1cb78ddc509506e312d94d",
      "transactionInfoLink": "https://xmrchain.net/tx/9e7f68c7891e0f2fdbfd0086d88be3b0d57f1d8f4e1cb78ddc509506e312d94d",
      "created": "2017-09-16T07:41:50.242856"
    }
  ])
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    size: 20,
    total: 200
  })
  useEffect(() => {
    // getPayments({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
    //   setListData(res)
    // })
  }, [])
  const columns = [
    {
      title: 'coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'addressInfoLink',
      dataIndex: 'addressInfoLink',
      key: 'addressInfoLink',
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'transactionConfirmationData',
      dataIndex: 'transactionConfirmationData',
      key: 'transactionConfirmationData',
    },
    {
      title: 'transactionInfoLink',
      dataIndex: 'transactionInfoLink',
      key: 'transactionInfoLink',
    },
    {
      title: 'created',
      dataIndex: 'created',
      key: 'created',
    }
  ]
  return (
    <Table rowKey="id" dataSource={listData} columns={columns} />
  )
}