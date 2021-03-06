import { useSelector, useDispatch } from 'react-redux';
import { getPoolPerformance } from '@/request'
import { useEffect, useState } from 'react'
import { Table } from 'antd'
export default function () {
    const app = useSelector(state => state.app)
    const [listData, setListData] = useState([])
    const [pageInfo, setPageInfo] = useState({
        page: 0,
        size: 24,
        total: 1000
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
        getPoolPerformance({ id: app[0].id, page: pageInfo.page, pageSize: pageInfo.size }).then(res => {
            setListData(res.stats.map((item, index) => ({ ...item, id: index })))
        })
    }, [pageInfo])
    const columns = [
        {
            title: 'poolHashrate',
            dataIndex: 'poolHashrate',
            key: 'poolHashrate',
        },
        {
            title: 'connectedMiners',
            dataIndex: 'connectedMiners',
            key: 'connectedMiners',
        },
        {
            title: 'validSharesPerSecond',
            dataIndex: 'validSharesPerSecond',
            key: 'validSharesPerSecond',
        },
        {
            title: 'networkHashrate',
            dataIndex: 'networkHashrate',
            key: 'networkHashrate',
        },
        {
            title: 'networkDifficulty',
            dataIndex: 'networkDifficulty',
            key: 'networkDifficulty',
        },
        {
            title: 'created',
            dataIndex: 'created',
            key: 'created',
        }
    ]
    return (
        <Table rowKey="id" dataSource={listData} columns={columns} onChange={pageChange} pagination={pagination} />
    )
}