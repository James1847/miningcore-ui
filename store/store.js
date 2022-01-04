import { createStore } from 'redux'
import { updateApp } from './actions'
const defaultState = {
  app: []
}

function reducer (preState, { type, payload }) {
  switch (type) {
    case updateApp:
      return {
        ...preState,
        app: payload
      }
    default:
      return preState
  }
}

function createMyStore (initialState = defaultState) {
  const MyStore = createStore(reducer, initialState)
  return MyStore
}

export default createMyStore
