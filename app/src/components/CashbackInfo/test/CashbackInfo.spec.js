import React from 'react'
import { mount } from 'enzyme'
import CashbackInfo from '../CashbackInfo'
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
          <CashbackInfo purchase={purchase} />
        </ThemeStyled>
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
})
