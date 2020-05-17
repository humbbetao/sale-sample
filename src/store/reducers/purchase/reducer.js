import ActionTypes from './actionTypes'
const values = {
  cashback: '157.50',
  purchases: [
    {
      code: '123',
      value: '450',
      date: '17/04/2020',
      cashbackRate: '0.35',
      cashbackValue: '157.50',
      status: 'Aprovado',
    },
  ],
}
const novo = { cashback: 0, purchases: [] }

export const INITIAL_STATE = {
  ...novo,
  ...values,
}
const STATUS = ['Em validação', 'Reprovado', 'Aprovado']
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_CASHBACK: {
      return { ...state, cashback: state.cashback + action.payload.amount }
    }
    case ActionTypes.ADD_BUY: {
      const cashbackRate = Math.random().toFixed(2)
      const cashbackValue = (action.payload.value * cashbackRate).toFixed(2)
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
            status: STATUS[(Math.random() * 2).toFixed(0)],
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
