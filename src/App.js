import React from 'react'
import Login from './pages/Login'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import GlobalStyle, {
  themeStyled,
  themeMaterialUi,
} from './components/GlobalStyle'

export default function App() {
  return (
    <ThemeProvider theme={themeMaterialUi}>
      <ThemeStyled theme={themeStyled}>
        <GlobalStyle />
        <Login></Login>
      </ThemeStyled>
    </ThemeProvider>
  )
}
