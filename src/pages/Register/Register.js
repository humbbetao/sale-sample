import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import CPFMaskCustom from '../../components/CPFMask'
import PasswordTextInput from '../../components/PasswordTextInput'
import LoginContainer from '../../components/LoginContainer'

const useStyles = makeStyles((theme) => {
  return {
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }
})

export default function Register() {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
    event.preventDefault()
    const isFormValidated = true
    if (!isFormValidated) {
      console.log('not isFormValidated')
      return
    }
    const users = localStorage.getItem('USERS') || []
    users.push({ name, cpf, email, password, confirmPassword })
    localStorage.setItem('USERS', JSON.stringify(users))
  }

  return (
    <LoginContainer handleOnSubmit={handleOnClickOnSubmit}>
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
        value={email}
        onChange={handleOnChangeEmail}
        error={errors.email}
        helperText={errors.email && 'Email inválido'}
        data-test="email"
      />
      <PasswordTextInput
        name="password"
        label="Senha"
        id="password"
        value={password}
        handleOnChange={handleOnChangePassword}
        error={errors.password}
        helperText={errors.password && 'Password tem que ser iguais'}
        data-test="password"
        autoComplete="new-password"
      />
      <PasswordTextInput
        name="confirmPassword"
        label="Confirme sua senha"
        id="confirmPassword"
        autoComplete="new-password"
        value={confirmPassword}
        handleOnChange={handleOnChangeConfirmPassword}
        error={errors.confirmPassword}
        helperText={errors.confirmPassword && 'Password tem que ser iguais'}
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
    </LoginContainer>
  )
}
