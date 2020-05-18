import ActionTypes from '../actionTypes'
import {
  addCashback,
  addPurchase,
  deletePurchase,
  editPurchase,
} from '../actionCreators'
import reducer, { INITIAL_STATE } from '../reducer'

describe('Purchase Action Creators', () => {
  it('should return state default', () => {
    const dummyAction = {}
    const state = reducer(INITIAL_STATE, dummyAction)
    expect(state).toEqual(INITIAL_STATE)
  })
  it('should return state with cashback increnment', () => {
    const action = addCashback()
    const state = reducer(INITIAL_STATE, action)
    expect(state).toEqual(INITIAL_STATE)
  })
  it('actionBuy', () => {
    const code = 255
    const value = 250
    const date = '17/07/2019'
    const action = addPurchase(code, value, date)
    const state = reducer(INITIAL_STATE, action)
    expect(state).toEqual(state.list)
    expect(state.cashback).toEqual(value + INITIAL_STATE.cashback)
    expect(state.list).toEqual([...INITIAL_STATE.list, { code, value, date }])
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
