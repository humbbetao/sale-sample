import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  fab: {
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    position: 'absolute',
  },
}))
export default function AddPurchaseIcon({ handleOnClick }) {
  const classes = useStyles()

  return (
    <Fab
      onClick={handleOnClick}
      classes={{ root: classes.fab }}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  )
}
