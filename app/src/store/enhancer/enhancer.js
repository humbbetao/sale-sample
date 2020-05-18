import { compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer =
  process.env.NODE_ENV === 'development' && compose(composeWithDevTools())

export default enhancer
