import React from 'react'
import { mount } from 'enzyme'
import PurchaseInfo from '../PurchaseInfo'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore([])

const store = mockStore({ purchase: { cashback: 0, purchases: [] } })
describe('PurchaseRow', () => {
  it('should render correctly', () => {
    const purchase = {}

    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseInfo purchase={purchase} />
        </ThemeStyled>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
  it('should render correctly with the values', () => {
    const purchase = {
      code: '25',
      value: '250',
      date: '17/05/2020',
      cashbackValue: '17',
      cashbackRate: '0.1',
    }
    const mockStore = { purchase: { cashback: 0, purchases: [] } }

    let wrapper = mount(
      <Provider store={mockStore}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseInfo purchase={purchase} />
        </ThemeStyled>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })

  it('should call handleClickOpenEditDialog after click to edit', () => {
    const purchase = {
      code: '25',
      value: '250',
      date: '17/05/2020',
      cashbackValue: '17',
      cashbackRate: '0.1',
    }
    const handleClickOpenEditDialog = jest.fn()
    const handleClickOpenDeleteDialog = jest.fn()
    const mockStore = { purchase: { cashback: 0, purchases: [] } }

    let wrapper = mount(
      <Provider store={mockStore}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseInfo
            purchase={purchase}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
          />
        </ThemeStyled>
      </Provider>
    )

    wrapper.find('[data-test="edit-purchase-button"] button').simulate('click')
    expect(handleClickOpenEditDialog).toHaveBeenCalled()
    expect(handleClickOpenEditDialog).toHaveBeenCalledTimes(1)
  })
  it('should call handleClickOpenDeleteDialog after click to delete', () => {
    const purchase = {
      code: '25',
      value: '250',
      date: '17/05/2020',
      cashbackValue: '17',
      cashbackRate: '0.1',
    }
    const handleClickOpenEditDialog = jest.fn()
    const handleClickOpenDeleteDialog = jest.fn()
    const mockStore = { purchase: { cashback: 0, purchases: [] } }

    let wrapper = mount(
      <Provider store={mockStore}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseInfo
            purchase={purchase}
            handleClickOpenEditDialog={handleClickOpenEditDialog}
            handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
          />
        </ThemeStyled>
      </Provider>
    )
    wrapper
      .find('[data-test="delete-purchase-button"] button')
      .simulate('click')
    expect(handleClickOpenDeleteDialog).toHaveBeenCalled()
    expect(handleClickOpenDeleteDialog).toHaveBeenCalledTimes(1)
  })
})
