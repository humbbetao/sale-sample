import ActionTypes from '../actionTypes'
import { addPurchase, deletePurchase, editPurchase } from '../actionCreators'
import reducer, { INITIAL_STATE } from '../reducer'

describe('Purchase Action Creators', () => {
  it('should return state default', () => {
    const dummyAction = {}
    const state = reducer(INITIAL_STATE, dummyAction)
    expect(state).toEqual(INITIAL_STATE)
  })

  // it('actionBuy', () => {
  //   const code = 255
  //   const value = 250
  //   const date = '17/07/2019'
  //   const action = addPurchase(code, value, date)
  //   const state = reducer(INITIAL_STATE, action)
  //   // expect(state.purchases).toEqual([
  //   //   ...INITIAL_STATE.purchasess,
  //   //   { code, value, date },
  //   // ])
  // })

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
