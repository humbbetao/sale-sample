import React, { useState, useCallback, useMemo } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Header from '../../components/Header'
const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    loginContainer: {
      padding: '16px',
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.common.white,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      width: '100%',
      height: '100vh',
      marginTop: theme.spacing(12),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },

    actions: {
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1, 0),
      },

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        margin: theme.spacing(3),
        '& > *': {
          width: '200px',
          margin: theme.spacing(1),
        },
      },
    },
  }
})

export default function LoginPage() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const actionButtonsInFullWidth = useMemo(() => !matches, [matches])
  const [code, setCode] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault()
      console.log(code, value, date)
    },
    [code, value, date]
  )
  const handleOnChangeCode = useCallback((event) => {
    const code = event.target.value
    setCode(code)
  }, [])
  const handleOnChangeValue = useCallback((event) => {
    const value = event.target.value
    setValue(value)
  }, [])
  const handleOnChangeDate = useCallback((event) => {
    const date = event.target.value
    setDate(date)
  }, [])

  return (
    <React.Fragment>
      <Header />

      <Grid
        container
        direction={matches ? 'row' : 'column'}
        justify="center"
        alignItems="center"
        classes={{ root: classes.loginContainer }}
      >
        <Container maxWidth="md">
          <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Codigo"
                label="Codigo"
                name="Codigo"
                autoComplete="Codigo"
                autoFocus
                value={code}
                onChange={handleOnChangeCode}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Date"
                label="Date"
                name="Date"
                autoComplete="Date"
                value={date}
                onChange={handleOnChangeDate}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Valor"
                label="Valor"
                name="Valor"
                autoComplete="Valor"
                value={value}
                onChange={handleOnChangeValue}
              />
              <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="center"
                className={classes.actions}
              >
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth={actionButtonsInFullWidth}
                  color="primary"
                  component="a"
                  href="/dash"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  fullWidth={actionButtonsInFullWidth}
                  variant="contained"
                  color="primary"
                >
                  Adicionar
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
      </Grid>
    </React.Fragment>
  )
}
