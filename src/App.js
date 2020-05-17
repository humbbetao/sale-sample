import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import GlobalStyle, {
  themeStyled,
  themeMaterialUi,
} from './components/GlobalStyle'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import DateFnsUtils from '@date-io/date-fns'

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={themeMaterialUi}>
          <ThemeStyled theme={themeStyled}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GlobalStyle />
              <Router>
                <Switch>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/dash">
                    <DashBoard />
                  </Route>
                  <Route path="/">
                    <Login />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Router>
            </MuiPickersUtilsProvider>
          </ThemeStyled>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  )
}
