import React from 'react'
import { mount } from 'enzyme'
import LoginContainer from '../LoginContainer'
import ErrorBoundary from '../../ErrorBoundary'

describe('LoginContainer', () => {
  it('should render children correctly', () => {
    const text = 'test'
    const children = <div data-test="simulate-component">{text}</div>
    let wrapper = mount(<LoginContainer>{children}</LoginContainer>)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('[data-test="simulate-component"]')).toHaveLength(1)
    expect(wrapper.find('[data-test="simulate-component"]').text()).toEqual(
      text
    )
  })

  it('displays error message on error generated without pass a  child', () => {
    let wrapper = mount(
      <ErrorBoundary>
        <LoginContainer />
      </ErrorBoundary>
    )

    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
