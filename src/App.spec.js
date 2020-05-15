import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('APP', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
})
