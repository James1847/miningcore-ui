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
    const pageChange = (obj) => {
        setPageInfo({
            ...pageInfo,
            page: obj.current - 1,
            size: obj.pageSize
        })
    }
    const pagination = {
        showQuickJumper: true,
        total: pageInfo.total
    }
    useEffect(() => {
        getMiners({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
            setListData(res)
        })
    }, [pageInfo])
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
        <Table rowKey="miner" dataSource={listData} columns={columns} onChange={pageChange} pagination={pagination} />
    )
}