import ActionTypes from './actionTypes'

export const INITIAL_STATE = { cashback: 0 }

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_CASHBACK:
      return { ...state, cashback: state.cashback + action.payload.amount }
    case ActionTypes.ADD_BUY:
    case ActionTypes.REMOVE_BUY:
    case ActionTypes.EDIT_BUY:
    default:
      return { ...state }
  }
}
