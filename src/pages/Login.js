import React, { useState, useCallback, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Logo from '../assets/o-boticario-logo.png'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import useMediaQuery from '@material-ui/core/useMediaQuery'
const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.secondary.main,
    },
    loginContainer: {
      backgroundColor: theme.palette.common.white,
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        margin: '0 16px',
      },
    },
    paper: {
      margin: `${theme.spacing(2)}px 0 `,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        margin: `${theme.spacing(8)}px 0 `,
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%',
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

const Img = styled.img`
  width: 50%;
`

export default function LoginPage() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('USER'))
    if (!user) return
    setEmail(user.email)
    setPassword(user.password)
    setChecked(Boolean(user))
  }, [])

  const handleOnChangeEmail = useCallback((event) => {
    const email = event.target.value
    setEmail(email)
  }, [])

  const handleOnChangePassword = useCallback((event) => {
    const password = event.target.value
    setPassword(password)
  }, [])

  const handleOnClickChecked = useCallback(() => {
    setChecked((state) => !state)
  }, [])

  const handleOnClickOnSubmit = (event) => {
    event.preventDefault()
    if (checked) {
      localStorage.setItem('USER', JSON.stringify({ email, password }))
    } else {
      localStorage.removeItem('USER')
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      classes={{ root: classes.root }}
    >
      <Grid
        item
        xs="12"
        sm="6"
        direction={matches ? 'row' : 'column'}
        justify="center"
        alignItems="center"
        classes={{ root: classes.loginContainer }}
      >
        <Container maxWidth="xs" classes={{ root: classes.img }}>
          <Img src={Logo} />
        </Container>
        <Container maxWidth="xs" className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Eu revendedor
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleOnClickOnSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
              value={email}
              onChange={handleOnChangeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="current-password"
              name="password"
              label="Senha"
              type="password"
              id="password"
              color="secondary"
              value={password}
              onChange={handleOnChangePassword}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={handleOnClickChecked}
                  checked={checked}
                />
              }
              label="Lembre-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  Registre-se
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    </Grid>
  )
}
