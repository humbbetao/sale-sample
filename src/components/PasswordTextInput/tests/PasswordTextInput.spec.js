import React from 'react'
import { mount } from 'enzyme'
import PasswordTextInput from '../PasswordTextInput'

describe('PasswordTextInput', () => {
  it('should have the value after type', () => {
    const password = '12345'
    let value = ''
    const handleOnChange = jest.fn((event) => {
      value = event.target.value
    })
    const event = { target: { name: 'password', value: password } }

    let wrapper = mount(
      <PasswordTextInput
        handleOnChange={handleOnChange}
        value={value}
        dataTest="passwordInput"
      ></PasswordTextInput>
    )
    wrapper.find('[data-test="passwordInput"] input').simulate('change', event)

    expect(value).toEqual(password)
    expect(handleOnChange).toHaveBeenCalled()
    expect(handleOnChange).toHaveBeenCalledTimes(1)
  })
})
