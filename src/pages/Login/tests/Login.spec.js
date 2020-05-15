import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from '../Login'
describe('Login', () => {
  it('should render the Login page correctly', () => {
    let wrapper = shallow(<Login />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
  it('should have email after type correctly', () => {
    const wrapper = mount(<Login />)

    const email = 'joa@gmail.com'
    const event = { target: { name: 'name', value: email } }
    wrapper.find('[data-test="email"] input').simulate('change', event)
    expect(wrapper.find('[data-test="email"] input').props().value).toEqual(
      email
    )
  })
  it('should have password after type correctly', () => {
    const wrapper = mount(<Login />)

    const password = 'password'
    const event = { target: { name: 'password', value: password } }
    wrapper.find('[data-test="password"] input').simulate('change', event)
    expect(wrapper.find('[data-test="password"] input').props().value).toEqual(
      password
    )
  })

  it('should check be ckecked after click on it', () => {
    const wrapper = mount(<Login />)

    const event = { target: { checked: true } }
    expect(
      wrapper.find('[data-test="rememberMe"] input').props().checked
    ).toBeFalsy()
    wrapper.find('[data-test="rememberMe"] input').simulate('change', event)
    expect(
      wrapper.find('[data-test="rememberMe"] input').props().checked
    ).toBeTruthy()
  })
})
