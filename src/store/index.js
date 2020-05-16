import { createStore, combineReducers } from 'redux'
import buy from './reducers/buy'
import enhancer from './enhancer'

const reducers = combineReducers({ buy })
const store = createStore(reducers, enhancer)

export default store
