import ActionTypes from './actionTypes'

export const INITIAL_STATE = { cashback: 0, list: [] }

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_CASHBACK: {
      return { ...state, cashback: state.cashback + action.payload.amount }
    }
    case ActionTypes.ADD_BUY: {
      const cashbackRate = Math.random()
      const cashbackValue = action.payload.value * cashbackRate
      return {
        ...state,
        list: [
          ...state.list,
          {
            code: action.payload.code,
            value: action.payload.value,
            date: action.payload.date,
            cashbackRate: cashbackRate,
            cashbackValue: cashbackValue,
          },
        ],
      }
    }
    case ActionTypes.REMOVE_BUY: {
      return {
        ...state,
        list: state.list.filter((buy) => buy.code !== action.payload.code),
      }
    }
    case ActionTypes.EDIT_BUY: {
      const buyIndex = state.list.findIndex(
        (buy) => buy.code === action.payload.code
      )
      if (buyIndex === -1) {
        throw new Error('this should not happen')
      }
      const list = [...state.list]
      list[buyIndex] = {
        ...list[buyIndex],
        code: action.payload.code,
        value: action.payload.value,
        date: action.payload.date,
      }
      return {
        ...state,
        list: [...list],
      }
    }
    default: {
      return { ...state }
    }
  }
}
