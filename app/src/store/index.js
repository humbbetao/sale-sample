import { createStore, combineReducers } from 'redux'
import purchase from './reducers/purchase'

import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
import sagas from './sagas'

const reducers = combineReducers({ purchase })
const store = createStore(reducers, enhancer)

sagaMiddleware.run(sagas)

export default store
