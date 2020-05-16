import React from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import CashBackInfo from '../../components/CashbackInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing(12),
    right: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  },
}))

export default function DashBoard() {
  const classes = useStyles()
  const isEmpty = useSelector((state) => state.buy.list.length === 0)
  if (isEmpty) {
    return (
      <React.Fragment>
        <Header />
        <CashBackInfo isEmpty></CashBackInfo>
      </React.Fragment>
    )
  }
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
