import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

//客户端的store创建函数
export const getClientStore = () => {
  const defaultState = window.INITIAL_STATE ? window.INITIAL_STATE : {}
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}

//服务端的store创建函数
export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
