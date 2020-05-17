import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Chip from '@material-ui/core/Chip'
import { useDispatch } from 'react-redux'
import { deleteBuy } from '../../store/reducers/buy/actionCreators'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

export default function AlertDialogSlide({ purchase, handleClose }) {
  const dispatch = useDispatch()
  const handleOnConfirm = useCallback(() => {
    dispatch(deleteBuy(purchase.code))
    handleClose()
  }, [dispatch, purchase, handleClose])
  return (
    <Dialog
      open
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        Você tem certeza que quer deletar essa compra?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <StyledTableRow key={purchase.code}>
            <StyledTableCell component="th" scope="row" align="center">
              Código {purchase.code}
            </StyledTableCell>
            <StyledTableCell scope="row" align="center">
              Data {purchase.date}
            </StyledTableCell>
            <StyledTableCell scope="row" align="center">
              {`Valor R$ ${purchase.value}`}
            </StyledTableCell>
            <StyledTableCell scope="row" align="center">
              {`Cashback R$ ${purchase.cashbackValue}`}
            </StyledTableCell>
            <StyledTableCell scope="row" align="center">
              Status <Chip label={purchase.status} color="primary" />
            </StyledTableCell>
          </StyledTableRow>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Não quero
        </Button>
        <Button onClick={handleOnConfirm} color="primary">
          Concordo
        </Button>
      </DialogActions>
    </Dialog>
  )
}
