import { createStore, combineReducers } from 'redux'
import purchase from './reducers/purchase'
import enhancer from './enhancer'

const reducers = combineReducers({ purchase })
const store = createStore(reducers, enhancer)

export default store
