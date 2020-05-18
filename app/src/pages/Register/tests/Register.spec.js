import React from 'react'
import { mount } from 'enzyme'
import Register from '../Register'
import { BrowserRouter } from 'react-router-dom'

describe('Login', () => {
  it('should render the Login page correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })

  it('should have name after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const name = 'João das neves'
    const event = { target: { name: 'name', value: name } }
    wrapper.find('[data-test="name"] input').simulate('change', event)
    expect(wrapper.find('[data-test="name"] input').props().value).toEqual(name)
  })
  it('should have CPF after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const cpf = '98765432100'
    const cpfFormatted = '987.654.321-00'
    const event = { target: { name: 'cpf', value: cpf } }
    wrapper.find('[data-test="CPF"] input').simulate('change', event)
    expect(wrapper.find('[data-test="CPF"] input').instance().value).toEqual(
      cpfFormatted
    )
  })
  it('should have email after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
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
        <Register />
      </BrowserRouter>
    )

    const password = 'password'
    const event = { target: { name: 'password', value: password } }
    wrapper.find('[data-test="password"] input').simulate('change', event)
    expect(wrapper.find('[data-test="password"] input').props().value).toEqual(
      password
    )
  })
  it('should have confirmPassword after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const confirmPassword = 'password'
    const event = {
      target: { name: 'confirmPassword', value: confirmPassword },
    }
    wrapper
      .find('[data-test="confirmPassword"] input')
      .simulate('change', event)
    expect(
      wrapper.find('[data-test="confirmPassword"] input').props().value
    ).toEqual(confirmPassword)
  })
  it('should have the equal password and confirmPassword after type correctly', () => {
    let wrapper = mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const password = 'password'
    const eventPassword = { target: { name: 'password', value: password } }
    const eventConfirmPassword = {
      target: { name: 'confirmPassword', value: password },
    }
    wrapper
      .find('[data-test="confirmPassword"] input')
      .simulate('change', eventConfirmPassword)
    wrapper
      .find('[data-test="password"] input')
      .simulate('change', eventPassword)
    expect(wrapper.find('[data-test="password"] input').props().value).toEqual(
      wrapper.find('[data-test="confirmPassword"] input').props().value
    )
  })
})
