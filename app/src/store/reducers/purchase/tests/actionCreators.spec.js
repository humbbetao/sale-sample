import ActionTypes from '../actionTypes'
import {
  addCashback,
  addPurchase,
  deletePurchase,
  editPurchase,
} from '../actionCreators'

describe('Purchase Action Creators', () => {
  it('addCashback', () => {
    const action = addCashback()
    expect(action.type).toEqual(ActionTypes.ADD_CASHBACK)
    expect(action.payload).toBeFalsy()
  })
  it('actionBuy', () => {
    const code = 255
    const value = 250
    const date = '17/07/2019'
    const action = addPurchase(code, value, date)
    expect(action.type).toEqual(ActionTypes.CREATE_PURCHASE)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code, value, date })
  })

  it('deletePurchase', () => {
    const code = 255
    const action = deletePurchase(code)
    expect(action.type).toEqual(ActionTypes.DELETE_PURCHASE)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code })
  })
  it('editPurchase', () => {
    const code = 255
    const value = 250
    const date = '17/07/2019'
    const action = editPurchase(code, value, date)
    expect(action.type).toEqual(ActionTypes.EDIT_PURCHASE)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code, value, date })
  })
})
