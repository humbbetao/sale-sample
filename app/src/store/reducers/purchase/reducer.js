import ActionTypes from './actionTypes'

export const INITIAL_STATE = {
  cashback: 0,
  purchases: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_CASHBACK_SUCCESS: {
      return { ...state, cashback: action.payload.cashback }
    }
    case ActionTypes.CREATE_PURCHASE_SUCCESS: {
      debugger

      return {
        ...state,
        purchases: [...state.purchases, action.payload.purchase],
      }
    }

    case ActionTypes.DELETE_PURCHASE_SUCCESS: {
      return {
        ...state,
        purchases: state.purchases.filter(
          (purchase) => purchase.code !== action.payload.code
        ),
      }
    }
    case ActionTypes.EDIT_PURCHASE_SUCCESS: {
      debugger
      const purchaseIndex = state.purchases.findIndex(
        (purchase) => purchase.code === action.payload.purchase.code
      )
      if (purchaseIndex === -1) {
        throw new Error('this should not happen')
      }
      const purchases = [...state.purchases]
      purchases[purchaseIndex] = {
        ...purchases[purchaseIndex],
        ...action.payload.purchase,
      }
      return {
        ...state,
        purchases: [...purchases],
      }
    }
    case ActionTypes.GET_PURCHASES_SUCCESS:
      debugger
      return {
        ...state,
        purchases: [...action.payload.purchases],
      }
    default: {
      return { ...state }
    }
  }
}
