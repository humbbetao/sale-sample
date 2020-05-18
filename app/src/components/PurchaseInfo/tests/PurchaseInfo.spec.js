import React from 'react'
import { mount } from 'enzyme'
import PurchaseInfo from '../PurchaseInfo'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { Provider } from 'react-redux'
import formattedCurrency from '../../../helpers/formattedCurrency'
import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore([])

const store = mockStore({ purchase: { cashback: 0, purchases: [] } })
describe('PurchaseInfo', () => {
  it('should render correctly with the values', () => {
    const purchase = {
      code: '25',
      value: 250,
      date: '17/05/2020',
      cashbackValue: 17,
      cashbackRate: '0.1',
    }

    let wrapper = mount(
      <Provider store={store}>
        <ThemeStyled theme={themeStyled}>
          <PurchaseInfo purchase={purchase} />
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
