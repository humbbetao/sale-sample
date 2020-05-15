import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import GlobalStyle, {
  themeStyled,
  themeMaterialUi,
} from './components/GlobalStyle'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={themeMaterialUi}>
      <ThemeStyled theme={themeStyled}>
        <GlobalStyle />
        {children}
      </ThemeStyled>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
