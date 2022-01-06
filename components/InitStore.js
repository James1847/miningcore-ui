import { useEffect, useState } from 'react'
import { getPools } from '@/request'
import { useDispatch, useSelector } from "react-redux";
import { updateApp } from '@/store/actions'
import { Spin } from 'antd'
export const InitStore = ({ children }) => {
  const app = useSelector(state => state.app)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    getPools().then(res => {
      dispatch({ type: updateApp, payload: res.pools })
    })
  }, [])
  useEffect(() => {
    if (app.length > 0) {
      setIsLoading(false)
    }
  }, [app])
  return (
    !isLoading ? children : <Spin size="large" className="loading"  tip="Loading..."/>
  )
}