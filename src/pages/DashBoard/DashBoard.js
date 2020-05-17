import React, { useState, useCallback, Suspense, lazy } from 'react'
import Header from '../../components/Header'
import Table from '../../components/Table'
import { useSelector } from 'react-redux'
import CashBackInfo from '../../components/CashbackInfo'
import Loading from '../../components/Loading'

const NewBuyDialog = lazy(() => import('../FormBuy'))

export default function DashBoard() {
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
    </React.Fragment>
  )
}
