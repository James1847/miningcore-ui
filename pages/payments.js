import { useSelector, useDispatch } from 'react-redux';
import { getPayments } from '@/request'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([])
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    size: 20,
    total: 200
  })
  useEffect(() => {
    getPayments({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
      setListData(res)
    })
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