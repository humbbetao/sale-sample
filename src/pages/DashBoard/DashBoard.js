import React, { useState, useCallback, Suspense, lazy } from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { useSelector } from 'react-redux'
import CashBackInfo from '../../components/CashbackInfo'
import Loading from '../../components/Loading'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'

const NewBuyDialog = lazy(() => import('../../components/FormBuy'))

const useStyles = makeStyles((theme) => ({
  fab: {
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    position: 'absolute',
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

  const isEmpty = useSelector((state) => state.buy.purchases.length === 0)

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
        <Fab
          onClick={handleOnOpenDialog}
          classes={{ root: classes.fab }}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Header handleOnOpenDialog={handleOnOpenDialog} />
      <Table handleOnOpenDialog={handleOnOpenDialog} />
      <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
        {isNewBuyOpened && (
          <NewBuyDialog
            open={isNewBuyOpened}
            handleOnClose={handleOnCloseDialog}
          ></NewBuyDialog>
        )}
      </Suspense>
      <Fab
        onClick={handleOnOpenDialog}
        classes={{ root: classes.fab }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  )
}
