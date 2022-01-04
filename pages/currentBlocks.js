import { useSelector, useDispatch } from 'react-redux';
import { getCurrentBlocks } from '@/request'
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
    getCurrentBlocks({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
      setListData(res)
    })
  }, [])
  const columns = [
    {
      title: 'blockHeight',
      dataIndex: 'blockHeight',
      key: 'blockHeight',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'effort',
      dataIndex: 'effort',
      key: 'effort',
    },
    {
      title: 'confirmationProgress',
      dataIndex: 'confirmationProgress',
      key: 'confirmationProgress',
    },
    {
      title: 'transactionConfirmationData',
      dataIndex: 'transactionConfirmationData',
      key: 'transactionConfirmationData',
    },
    {
      title: 'reward',
      dataIndex: 'reward',
      key: 'reward',
    },
    {
      title: 'infoLink',
      dataIndex: 'infoLink',
      key: 'infoLink',
    },
    {
      title: 'created',
      dataIndex: 'created',
      key: 'created',
    },
  ]
  return (
    <Table rowKey="id" dataSource={listData} columns={columns} />
  )
}