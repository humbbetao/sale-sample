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
import { KeyboardDatePicker } from '@material-ui/pickers'
import InputAdornment from '@material-ui/core/InputAdornment'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles((theme) => {
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
    dialog: {
      [theme.breakpoints.down('md')]: {
        marginTop: '32px',
        boxSizing: 'border-box',
        height: 'calc(100% - 32px)',
        borderRadius: '16px 16px 0 0',
      },
      borderRadius: '16px 16px',
      marginTop: '0',
    },
  }
})

export default function FormBuy({ open = true, handleOnClose }) {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const actionButtonsInFullWidth = useMemo(() => !matches, [matches])
  const [code, setCode] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const history = useHistory()
  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault()
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
  const handleOnChangeDate = useCallback((date) => {
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
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle id="max-width-dialog-title">Nova compra</DialogTitle>
      <DialogContent>
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
              type="number"
              value={code}
              onChange={handleOnChangeCode}
            />
            <KeyboardDatePicker
              format="dd/MM/yyyy"
              value={date}
              onChange={handleOnChangeDate}
              label="Date"
              name="Date"
              required
              disableFuture
              autoComplete="Date"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
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
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
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
