import { all, takeLatest } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
// import ActionCreators from './actionCreators'

// import {
//   getPurchases,
//   deletePurchase,
//   editPurchase,
//   createPurchase,
// } from '../../../services/PurchaseServices'
function* getPurchasesSaga() {}
function* deletePurchaseSaga() {}
function* editPurchaseSaga() {}
function* createPurchaseSaga() {}

export default all([
  takeLatest(ActionTypes.GET_PURCHASES, getPurchasesSaga),
  takeLatest(ActionTypes.DELETE_PURCHASE, deletePurchaseSaga),
  takeLatest(ActionTypes.EDIT_PURCHASE, editPurchaseSaga),
  takeLatest(ActionTypes.CREATE_PURCHASE, createPurchaseSaga),
])
