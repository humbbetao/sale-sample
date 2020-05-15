import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { render } from '../../../utils/test-utils'
import Login from '../Login'

describe('Login', () => {
  it('fill the platform', () => {
    const { asFragment } = render(<Login />)
    const firstRender = asFragment()

    fireEvent.change(screen.getByLabelText('data-test="email"'), {
      target: { value: 'joao_das_neves@gmail.com' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'teste123' },
    })
    fireEvent.click(screen.getByText(/submit/i))

    expect(firstRender).toMatchDiffSnapshot(asFragment())
  })
})
