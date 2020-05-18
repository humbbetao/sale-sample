import ActionTypes from '../actionTypes'
import {
  addCashback,
  addBuy,
  calculateCashBack,
  deleteBuy,
  editBuy,
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
    const action = addBuy(code, value, date)
    expect(action.type).toEqual(ActionTypes.ADD_BUY)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code, value, date })
  })
  it('calculateCashBack', () => {
    const code = 255
    const value = 250
    const action = calculateCashBack(code, value)
    expect(action.type).toEqual(ActionTypes.CALCULATE_CASHBACK)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code, value })
  })
  it('deleteBuy', () => {
    const code = 255
    const action = deleteBuy(code)
    expect(action.type).toEqual(ActionTypes.DELETE_BUY)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code })
  })
  it('editBuy', () => {
    const code = 255
    const value = 250
    const date = '17/07/2019'
    const action = editBuy(code, value, date)
    expect(action.type).toEqual(ActionTypes.EDIT_BUY)
    expect(action.payload).toBeTruthy()
    expect(action.payload).toEqual({ code, value, date })
  })
})
