import { useEffect, useState } from 'react'
import { getPools } from '@/request'
import { useDispatch } from "react-redux";
import { updateApp } from '@/store/actions'
export const InitStore = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    getPools().then(res => {
      setIsLoading(false)
      dispatch({ type: updateApp, payload: res.pools })
    })
  }, [])
  return (
    !isLoading ? children : null
  )
}