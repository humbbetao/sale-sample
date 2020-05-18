import React from 'react'
import { mount } from 'enzyme'
import PurchaseCard from '../PurchaseCard'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../../../store'
import formattedCurrency from '../../../helpers/formattedCurrency'
describe('PurchaseCard', () => {
  it('should render correctly with the values', () => {
    const purchase = {
      code: '25',
      value: 250,
      date: '17/05/2020',
      cashbackValue: 17,
      cashbackRate: '0.1',
    }
    const handleClickOpenEditDialog = jest.fn()
    const handleClickOpenDeleteDialog = jest.fn()
    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseCard
            purchase={purchase}
            handleOnClickOnEdit={handleClickOpenEditDialog}
            handleOnClickOnDelete={handleClickOpenDeleteDialog}
          />
        </ThemeStyled>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
    expect(wrapper.find('[data-test="purchase-code"]').last().text()).toEqual(
      purchase.code
    )
    expect(wrapper.find('[data-test="purchase-value"]').last().text()).toEqual(
      formattedCurrency(purchase.value)
    )
    expect(wrapper.find('[data-test="purchase-date"]').last().text()).toEqual(
      purchase.date
    )
    expect(
      wrapper.find('[data-test="purchase-cashbackValue"]').last().text()
    ).toEqual(formattedCurrency(purchase.cashbackValue))
    expect(wrapper.find('[data-test="purchase-cashbackRate"]')).toHaveLength(0)
  })
})

describe('PurchaseRow', () => {
  it('should render correctly', () => {
    const handleClickOpenEditDialog = jest.fn()
    const handleClickOpenDeleteDialog = jest.fn()
    const purchase = {}
    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseCard
            purchase={purchase}
            handleOnClickOnEdit={handleClickOpenEditDialog}
            handleOnClickOnDelete={handleClickOpenDeleteDialog}
          />
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
    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseCard
            purchase={purchase}
            handleOnClickOnEdit={handleClickOpenEditDialog}
            handleOnClickOnDelete={handleClickOpenDeleteDialog}
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
    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseCard
            purchase={purchase}
            handleOnClickOnEdit={handleClickOpenEditDialog}
            handleOnClickOnDelete={handleClickOpenDeleteDialog}
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
