import { BeakerIcon, ChatIcon } from '@heroicons/react/outline'
import { getPools } from './../request'
import { useEffect, useState } from 'react'
export default function Test () {
    const [poolList, setPoolList] = useState([])

    useEffect(() => {
        // getPools().then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        setPoolList([
            {
                "id": "xmr1",
                "coin": {
                    "type": "XMR"
                },
                "ports": {
                    "4032": {
                        "difficulty": 1600.0,
                        "varDiff": {
                            "minDiff": 1600.0,
                            "maxDiff": 160000.0,
                            "targetTime": 15.0,
                            "retargetTime": 90.0,
                            "variancePercent": 30.0
                        }
                    },
                    "4256": {
                        "difficulty": 5000.0
                    }
                },
                "paymentProcessing": {
                    "enabled": true,
                    "minimumPayment": 0.01,
                    "payoutScheme": "PPLNS",
                    "payoutSchemeConfig": {
                        "factor": 2.0
                    },
                    "minimumPaymentToPaymentId": 5.0
                },
                "banning": {
                    "enabled": true,
                    "checkThreshold": 50,
                    "invalidPercent": 50.0,
                    "time": 600
                },
                "clientConnectionTimeout": 600,
                "jobRebroadcastTimeout": 55,
                "blockRefreshInterval": 1000,
                "poolFeePercent": 0.0,
                "address": "9wviCeWe2D8XS82k2ovp5EUYLzBt9pYNW2LXUFsZiv8S3Mt21FZ5qQaAroko1enzw3eGr9qC7X1D7Geoo2RrAotYPwq9Gm8",
                "addressInfoLink": "https://explorer.zcha.in/accounts/9wviCeWe2D8XS82k2ovp5EUYLzBt9pYNW2LXUFsZiv8S3Mt21FZ5qQaAroko1enzw3eGr9qC7X1D7Geoo2RrAotYPwq9Gm8",
                "poolStats": {
                    "connectedMiners": 0,
                    "poolHashRate": 0.0
                },
                "networkStats": {
                    "networkType": "Test",
                    "networkHashRate": 39.05,
                    "networkDifficulty": 2343.0,
                    "lastNetworkBlockTime": "2017-09-17T10:35:55.0394813Z",
                    "blockHeight": 157,
                    "connectedPeers": 2,
                    "rewardType": "POW"
                }
            }
        ])
    }, [])
    return (
        <div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="py-2">
                            <input required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Please enter a keyword" />
                        </div>
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Role
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {poolList.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                        <div className="text-sm text-gray-500">{item.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.title}</div>
                                                <div className="text-sm text-gray-500">{item.department}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-8">
                <BeakerIcon style={{
                    width: '30px',
                    height: '30px',
                    color: 'red'
                }} />
                <ChatIcon style={{
                    width: '30px',
                    height: '30px',
                    color: 'red'
                }} />
            </div>
        </div>
    )
}
