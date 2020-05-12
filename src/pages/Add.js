import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Header from '../components/Header'
const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
    },
    loginContainer: {
      backgroundColor: theme.palette.common.white,
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    img: {
      display: 'flex',
      justifyContent: 'center',
    },
  }
})

export default function LoginPage() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

  return (
    <React.Fragment>
      <Header />

      <Grid
        item
        xs="12"
        sm="8"
        direction={matches ? 'row' : 'column'}
        justify="center"
        alignItems="center"
        classes={{ root: classes.loginContainer }}
      >
        <Container maxWidth="md">
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Codigo"
                label="Codigo"
                name="Codigo"
                autoComplete="Codigo"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Date"
                label="Date"
                name="Date"
                autoComplete="Date"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Valor"
                label="Valor"
                name="Valor"
                autoComplete="Valor"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </React.Fragment>
  )
}
