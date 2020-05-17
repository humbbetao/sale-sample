import React from 'react'
import { mount } from 'enzyme'
import CashbackInfo from '../CashbackInfo'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../../../store'

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
