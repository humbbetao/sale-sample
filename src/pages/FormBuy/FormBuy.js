import React, { useState, useCallback, useMemo } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useDispatch } from 'react-redux'
import { addBuy } from '../../store/reducers/buy/actionCreators'
import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { useTheme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

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

    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'calc(100% - 16px)',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
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

export default function FormBuy({ open = true, handleOnClose }) {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const actionButtonsInFullWidth = useMemo(() => !matches, [matches])
  const [code, setCode] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault()
      console.log(code, value, date)
      const isFormValidated = true
      if (isFormValidated) {
        dispatch(addBuy(code, value, date))
        history.push('/dash')
      } else {
        console.log('ops deu erro')
      }
    },
    [code, value, date, dispatch, history]
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

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullScreen={fullScreen}
      onClose={handleOnClose}
    >
      <DialogTitle id="max-width-dialog-title">Nova compra</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>Adicione uma nova compra</DialogContentText> */}
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <FormControl className={classes.formControl}>
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
          </FormControl>
        </form>
      </DialogContent>

      <DialogActions>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
          className={classes.actions}
        >
          <Button
            variant="outlined"
            fullWidth={actionButtonsInFullWidth}
            color="primary"
            size="large"
            type="button"
            onClick={handleOnClose}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            fullWidth={actionButtonsInFullWidth}
            variant="contained"
            color="primary"
            size="large"
          >
            Adicionar
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}
