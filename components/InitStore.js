import { useLayoutEffect } from 'react'
import { getPools } from '@/request'
import { useDispatch } from "react-redux";
import { updateApp } from '@/store/actions'
export const InitStore = ({ children }) => {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    getPools().then(res => {
      dispatch({ type: updateApp, payload: res.pools })
    })
  }, [])
  return children
}