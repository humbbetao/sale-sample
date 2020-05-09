import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'

const theme = {}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeStyled theme={theme}>
        <div> boticario</div>
      </ThemeStyled>
    </ThemeProvider>
  )
}
