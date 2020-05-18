import { all } from 'redux-saga/effects'
import purchase from '../reducers/purchase/sagas'

export default function* sagas() {
  return yield all([purchase])
}
