import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Logo from '../assets/o-boticario-logo.png'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MaskedInput from 'react-text-mask'

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
      backgroundColor: theme.palette.secondary.main,
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

const cpfRegex = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
]
function CPFMaskCustom(props) {
  const { inputRef, ...other } = props
  return <MaskedInput {...other} ref={inputRef} mask={cpfRegex} />
}

export default function LoginPage() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [errors, setErrors] = useState({})
  const errors = {}

  const handleOnChangeEmail = useCallback((event) => {
    const email = event.target.value
    setEmail(email)
  }, [])

  const handleOnChangePassword = useCallback((event) => {
    const password = event.target.value
    setPassword(password)
  }, [])

  const handleOnChangeName = useCallback((event) => {
    const name = event.target.value
    setName(name)
  }, [])

  const handleOnChangeCpf = useCallback((event) => {
    const cpf = event.target.value
    setCpf(cpf)
  }, [])

  const handleOnChangeConfirmPassword = useCallback((event) => {
    const confirmPassword = event.target.value
    setConfirmPassword(confirmPassword)
  }, [])

  const handleOnClickOnSubmit = (event) => {
    event.stopPropagation()
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
              id="name"
              label="Nome Completo"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={handleOnChangeName}
              error={errors.name}
              helperText={errors.name && 'Nome Inválido'}
              data-test="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="CPF"
              label="CPF"
              name="CPF"
              autoComplete="CPF"
              autoFocus
              value={cpf}
              onChange={handleOnChangeCpf}
              InputProps={{
                inputComponent: CPFMaskCustom,
              }}
              error={errors.cpf}
              helperText={errors.cpf && 'CPF inválido'}
              data-test="CPF"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleOnChangeEmail}
              error={errors.email}
              helperText={errors.email && 'Email inválido'}
              data-test="email"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={handleOnChangePassword}
              error={errors.password}
              helperText={errors.password && 'Password tem que ser iguais'}
              data-test="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirme sua senha"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
              error={errors.confirmPassword}
              helperText={
                errors.confirmPassword && 'Password tem que ser iguais'
              }
              data-test="confirmPassword"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              data-test="submitButton"
            >
              Entrar
            </Button>
            <Grid container justify="flex-end">
              <Link href="/" variant="body2" data-test="loginLink">
                Já é cadastrado?
              </Link>
            </Grid>
          </form>
        </Container>
      </Grid>
    </Grid>
  )
}
