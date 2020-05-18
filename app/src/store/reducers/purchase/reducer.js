import ActionTypes from './actionTypes'
import calculateCashBack from '../../../helpers/calculateCashback'
import getStatus from '../../../helpers/getStatus'
const novo = { cashback: 0, purchases: [] }

export const INITIAL_STATE = {
  ...novo,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_CASHBACK: {
      return { ...state, cashback: state.cashback + action.payload.amount }
    }
    case ActionTypes.ADD_BUY: {
      const { cashbackRate, cashbackValue } = calculateCashBack(value)
      const status = getStatus(action.payload.value)
      return {
        ...state,
        purchases: [
          ...state.purchases,
          {
            code: action.payload.code,
            value: action.payload.value,
            date: action.payload.date,
            cashbackRate: cashbackRate,
            cashbackValue: cashbackValue,
            status: status,
          },
        ],
      }
    }
    case ActionTypes.CALCULATE_CASHBACK: {
      return {
        ...state,
      }
    }
    case ActionTypes.DELETE_BUY: {
      return {
        ...state,
        purchases: state.purchases.filter(
          (purchase) => purchase.code !== action.payload.code
        ),
      }
    }
    case ActionTypes.EDIT_BUY: {
      const purchaseIndex = state.purchases.findIndex(
        (purchase) => purchase.code === action.payload.code
      )
      if (purchaseIndex === -1) {
        throw new Error('this should not happen')
      }
      const purchases = [...state.purchases]
      purchases[purchaseIndex] = {
        ...purchases[purchaseIndex],
        code: action.payload.code,
        value: action.payload.value,
        date: action.payload.date,
      }
      return {
        ...state,
        purchases: [...purchases],
      }
    }
    default: {
      return { ...state }
    }
  }
}
