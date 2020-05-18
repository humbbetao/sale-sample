import React from 'react'
import { mount } from 'enzyme'
import AddPurchaseIcon from '../AddPurchaseIcon'
describe('AddPurchaseIcon', () => {
  it('should render correctly', () => {
    let wrapper = mount(<AddPurchaseIcon />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveLength(1)
  })
})
