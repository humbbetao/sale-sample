import React from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))

export default function DashBoard() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header />
      <Table />
      <Fab
        color="primary"
        aria-label="Nova compra"
        classes={classes}
        component="a"
        href="/add_buy"
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  )
}
