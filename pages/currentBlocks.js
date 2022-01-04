import { useSelector, useDispatch } from 'react-redux';
import { getCurrentBlocks } from '@/request'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
export default function () {
  const app = useSelector(state => state.app)
  const [listData, setListData] = useState([
    {
      "blockHeight": 197,
      "status": "pending",
      "effort": 1.4,
      "confirmationProgress": 0.3,
      "transactionConfirmationData": "6e7f68c7891e0f2fdbfd0086d88be3b0d57f1d8f4e1cb78ddc509506e312d94d",
      "reward": 17.558881241740,
      "infoLink": "https://xmrchain.net/block/6e7f68c7891e0f2fdbfd0086d88be3b0d57f1d8f4e1cb78ddc509506e312d94d",
      "created": "2017-09-16T07:41:50.242856"
    },
    {
      "blockHeight": 196,
      "status": "confirmed",
      "effort": 0.85,
      "confirmationProgress": 1,
      "transactionConfirmationData": "bb0b42b4936cfa210da7308938ad6d2d34c5339d45b61c750c1e0be2475ec039",
      "reward": 17.558898015821,
      "infoLink": "https://xmrchain.net/block/bb0b42b4936cfa210da7308938ad6d2d34c5339d45b61c750c1e0be2475ec039",
      "created": "2017-09-16T07:41:39.664172"
    },
    {
      "blockHeight": 195,
      "status": "orphaned",
      "effort": 2.24,
      "confirmationProgress": 0,
      "transactionConfirmationData": "b9b5943b2646ebfd19311da8031c66b164ace54a7f74ff82556213d9b54daaeb",
      "reward": 17.558914789917,
      "infoLink": "https://xmrchain.net/block/b9b5943b2646ebfd19311da8031c66b164ace54a7f74ff82556213d9b54daaeb",
      "created": "2017-09-16T07:41:14.457664"
    }
  ])
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    size: 20,
    total: 200
  })
  useEffect(() => {
    // getCurrentBlocks({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
    //   setListData(res)
    // })
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