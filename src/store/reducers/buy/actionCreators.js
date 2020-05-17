import ActionTypes from './actionTypes'

export function addCashback() {
  return { type: ActionTypes.ADD_CASHBACK }
}

export function addBuy(code, value, date) {
  return { type: ActionTypes.ADD_BUY, payload: { code, value, date } }
}

export function calculateCashBack(code, value) {
  return { type: ActionTypes.CALCULATE_CASHBACK, payload: { code, value } }
}

export function deleteBuy(code) {
  return { type: ActionTypes.DELETE_BUY, payload: { code } }
}

export function editBuy(code, value, date) {
  return { type: ActionTypes.EDIT_BUY, payload: { code, value, date } }
}
