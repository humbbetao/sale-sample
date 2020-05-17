import React from 'react'
import { mount } from 'enzyme'
import CashbackEmpty from '../CashbackEmpty'
import { themeStyled } from '../../GlobalStyle'
import { ThemeProvider as ThemeStyled } from 'styled-components'

describe('CashbackEmpty', () => {
  it('should render correctly', () => {
    let wrapper = mount(
      <ThemeStyled theme={themeStyled}>
        <CashbackEmpty />
      </ThemeStyled>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })

  it('should called handleOnOpenDialog a after click on buttons', () => {
    const handleOnOpenDialog = jest.fn()
    let wrapper = mount(
      <ThemeStyled theme={themeStyled}>
        <CashbackEmpty handleOnOpenDialog={handleOnOpenDialog} />
      </ThemeStyled>
    )
    wrapper.find('[data-test="add-button"] button').simulate('click')
    expect(handleOnOpenDialog).toHaveBeenCalled()
    expect(handleOnOpenDialog).toHaveBeenCalledTimes(1)
  })
})
