import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { deleteBuy } from '../../store/reducers/purchase/actionCreators'
import Transition from '../Transition'
import PurchaseInfo from '../PurchaseInfo'

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
          <PurchaseInfo purchase={purchase} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
          data-test="disagree-button"
        >
          Não quero
        </Button>
        <Button
          onClick={handleOnConfirm}
          color="primary"
          data-test="agree-button"
        >
          Concordo
        </Button>
      </DialogActions>
    </Dialog>
  )
}
