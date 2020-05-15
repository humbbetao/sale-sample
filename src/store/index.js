import { createStore, combineReducers } from 'redux'

// import sagaMiddleware from './middlewares/sagaMiddleware'
import enhancer from './enhancer'
// import sagas from './sagas'

const reducers = combineReducers({})

const store = createStore(reducers, enhancer)

// sagaMiddleware.run(sagas)

export default store
