import React, { Suspense, lazy } from 'react'

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
import Loading from './components/Loading'
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const DashBoard = lazy(() => import('./pages/DashBoard'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  )
}
