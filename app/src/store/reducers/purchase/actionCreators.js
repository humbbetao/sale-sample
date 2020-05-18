import ActionTypes from './actionTypes'

export function addPurchase(code, value, date) {
  return { type: ActionTypes.CREATE_PURCHASE, payload: { code, value, date } }
}

export function addPurchaseSucess(purchase) {
  return { type: ActionTypes.CREATE_PURCHASE_SUCCESS, payload: { purchase } }
}
export function addPurchaseError() {
  return { type: ActionTypes.CREATE_PURCHASE_ERROR }
}

export function deletePurchase(code) {
  return { type: ActionTypes.DELETE_PURCHASE, payload: { code } }
}
export function deletePurchaseSuccess(code) {
  return { type: ActionTypes.DELETE_PURCHASE_SUCCESS, payload: { code } }
}
export function deletePurchaseError(code) {
  return { type: ActionTypes.DELETE_PURCHASE_SUCCESS, payload: { code } }
}

export function editPurchase(code, value, date) {
  return { type: ActionTypes.EDIT_PURCHASE, payload: { code, value, date } }
}
export function editPurchaseSuccess(purchase) {
  return { type: ActionTypes.EDIT_PURCHASE_SUCCESS, payload: { purchase } }
}
export function editPurchaseError() {
  return { type: ActionTypes.EDIT_PURCHASE_ERROR }
}

export function getPurchases() {
  return { type: ActionTypes.GET_PURCHASES }
}
export function getPurchasesSuccess(purchases) {
  return { type: ActionTypes.GET_PURCHASES_SUCCESS, payload: { purchases } }
}
export function getPurchasesError() {
  return { type: ActionTypes.GET_PURCHASES_ERROR }
}
export function getCashback() {
  return { type: ActionTypes.GET_CASHBACK }
}
export function getCashbackSuccess(cashback) {
  return { type: ActionTypes.GET_CASHBACK_SUCCESS, payload: { cashback } }
}
export function getCashbackError() {
  return { type: ActionTypes.GET_CASHBACK_ERROR }
}
