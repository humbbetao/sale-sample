import { all, takeLatest, put } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import {
  getPurchasesSuccess,
  getPurchasesError,
  getCashback as getCashbackActions,
  deletePurchaseSuccess,
  deletePurchaseError,
  editPurchaseSuccess,
  editPurchaseError,
  addPurchaseSucess,
  addPurchaseError,
  getCashbackError,
  getCashbackSuccess,
} from './actionCreators'

import {
  getPurchases,
  deletePurchase,
  editPurchase,
  createPurchase,
  getCashback,
} from '../../../services/PurchaseServices'

function* getPurchasesSaga() {
  debugger
  const response = yield getPurchases()
  if (response.ok) {
    yield put(getPurchasesSuccess(response.data.purchases))
  } else {
    yield put(getPurchasesError())
  }
}
function* deletePurchaseSaga(action) {
  const response = yield deletePurchase(action.payload.code)
  if (response.ok) {
    yield put(deletePurchaseSuccess())
  } else {
    yield put(deletePurchaseError())
  }
}
function* editPurchaseSaga(action) {
  const response = yield editPurchase(
    action.payload.code,
    action.payload.value,
    action.payload.date
  )
  if (response.ok) {
    yield put(editPurchaseSuccess(response.data.purchase))
    yield put(getCashbackActions())
  } else {
    yield put(editPurchaseError())
  }
}
function* createPurchaseSaga(action) {
  const response = yield createPurchase(
    action.payload.code,
    action.payload.value,
    action.payload.date
  )
  if (response.ok) {
    yield put(addPurchaseSucess(response.data.purchase))
    yield put(getCashbackActions())
  } else {
    yield put(addPurchaseError())
  }
}

function* getCashbackSaga() {
  const response = yield getCashback()
  if (response.ok) {
    yield put(getCashbackSuccess(response.data.cashback))
  } else {
    yield put(getCashbackError())
  }
}
export default all([
  takeLatest(ActionTypes.GET_PURCHASES, getPurchasesSaga),
  takeLatest(ActionTypes.DELETE_PURCHASE, deletePurchaseSaga),
  takeLatest(ActionTypes.EDIT_PURCHASE, editPurchaseSaga),
  takeLatest(ActionTypes.CREATE_PURCHASE, createPurchaseSaga),
  takeLatest(ActionTypes.GET_CASHBACK, getCashbackSaga),
])
