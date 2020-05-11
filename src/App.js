import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ThemeStyled>
    </ThemeProvider>
  )
}
