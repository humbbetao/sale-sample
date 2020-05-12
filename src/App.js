import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import Add from './pages/Add'
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
            <Route path="/dash">
              <DashBoard />
            </Route>
            <Route path="/add_compra">
              <Add />
            </Route>
            <Route path="/update_lista">
              <DashBoard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ThemeStyled>
    </ThemeProvider>
  )
}
