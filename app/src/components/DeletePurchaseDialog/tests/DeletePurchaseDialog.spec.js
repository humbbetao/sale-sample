import React from 'react'
import { mount } from 'enzyme'
import DeletePurchaseDialog from '../DeletePurchaseDialog'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore([])

const store = mockStore({ purchase: { cashback: 0, purchases: [] } })
describe('CashbackInfo', () => {
  it('should render correctly', () => {
    const purchase = {}

    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <DeletePurchaseDialog purchase={purchase} />
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

    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <DeletePurchaseDialog purchase={purchase} />
        </ThemeStyled>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })

  it('should call handleOnClose after click to close', () => {
    const purchase = {
      code: '25',
      value: '250',
      date: '17/05/2020',
      cashbackValue: '17',
      cashbackRate: '0.1',
    }
    const handleOnClose = jest.fn()

    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <DeletePurchaseDialog
            purchase={purchase}
            handleClose={handleOnClose}
          />
        </ThemeStyled>
      </Provider>
    )

    wrapper.find('[data-test="agree-button"] button').simulate('click')
    expect(handleOnClose).toHaveBeenCalled()
    expect(handleOnClose).toHaveBeenCalledTimes(1)
  })
})
