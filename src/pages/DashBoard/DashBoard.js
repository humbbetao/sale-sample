import React, { useState, useCallback, Suspense, lazy } from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import CashBackInfo from '../../components/CashbackInfo'
import Loading from '../../components/Loading'

const NewBuyDialog = lazy(() => import('../FormBuy'))
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
  const [isNewBuyOpened, setIsNewBuyOpened] = useState(false)

  const handleOnCloseDialog = useCallback(() => {
    setIsNewBuyOpened(false)
  }, [])
  const handleOnOpenDialog = useCallback(() => {
    setIsNewBuyOpened(true)
  }, [])

  const isEmpty = useSelector((state) => state.buy.list.length === 0)

  if (isEmpty) {
    return (
      <React.Fragment>
        <Header handleOnOpenDialog={handleOnOpenDialog} />
        <CashBackInfo
          isEmpty
          handleOnOpenDialog={handleOnOpenDialog}
        ></CashBackInfo>
        <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
          {isNewBuyOpened && (
            <NewBuyDialog
              open={isNewBuyOpened}
              handleOnClose={handleOnCloseDialog}
            ></NewBuyDialog>
          )}
        </Suspense>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Header handleOnOpenDialog={handleOnOpenDialog} />
      <Table handleOnOpenDialog={handleOnOpenDialog} />
      <Fab
        color="primary"
        aria-label="Nova compra"
        classes={classes}
        component="button"
        onClick={handleOnOpenDialog}
      >
        <AddIcon />
      </Fab>
      <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
        {isNewBuyOpened && (
          <NewBuyDialog
            open={isNewBuyOpened}
            handleOnClose={handleOnCloseDialog}
          ></NewBuyDialog>
        )}
      </Suspense>
    </React.Fragment>
  )
}
