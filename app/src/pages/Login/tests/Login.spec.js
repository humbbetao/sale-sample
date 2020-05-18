import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Login'
describe('Login', () => {
  it('should render the Login page correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
  it('should have email after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const email = 'joa@gmail.com'
    const event = { target: { name: 'name', value: email } }
    wrapper.find('[data-test="email"] input').simulate('change', event)
    expect(wrapper.find('[data-test="email"] input').props().value).toEqual(
      email
    )
  })
  it('should have password after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const password = 'password'
    const event = { target: { name: 'password', value: password } }
    wrapper.find('[data-test="password"] input').simulate('change', event)
    expect(wrapper.find('[data-test="password"] input').props().value).toEqual(
      password
    )
  })

  it('should check be ckecked after click on it', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

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
