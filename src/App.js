import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import GlobalStyle, { theme as themeStyled } from './components/GlobalStyle'

const themeMaterialUi = createMuiTheme({
  palette: {
    primary: { main: themeStyled.colors.gray },
    error: {
      light: themeStyled.colors.gray,
      main: themeStyled.colors.red,
      dark: themeStyled.colors.gray,
      contrastText: themeStyled.colors.gray,
    },
    secondary: { main: themeStyled.colors.red },
    text: {
      primary: themeStyled.colors.black,
      secondary: themeStyled.colors.gray,
    },
    color: { main: themeStyled.colors.black },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={themeMaterialUi}>
      <ThemeStyled theme={themeStyled}>
        <GlobalStyle />
        <head>boticarios</head>
      </ThemeStyled>
    </ThemeProvider>
  )
}
