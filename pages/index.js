import { useSelector, useDispatch } from 'react-redux';
import { getMiners } from '@/request'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
export default function () {
    const app = useSelector(state => state.app)
    const [listData, setListData] = useState([])
    const [pageInfo, setPageInfo] = useState({
        page: 0,
        size: 20,
        total: 200
    })
    useEffect(() => {
        getMiners({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
            setListData(res)
        })
    }, [])
    const columns = [
        {
            title: 'miner',
            dataIndex: 'miner',
            key: 'miner',
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
    return (
        <Table rowKey="id" dataSource={listData} columns={columns} />
    )
}