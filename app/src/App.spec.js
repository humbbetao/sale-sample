import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('APP', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
})
