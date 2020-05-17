import React, { useState, useCallback, Suspense, lazy } from 'react'
import Header from '../../components/Header'
import Purchases from '../../components/Purchases'
import { useSelector } from 'react-redux'
import CashBackInfo from '../../components/CashbackInfo'
import Loading from '../../components/Loading'
import AddPurchaseIcon from '../../components/AddPurchaseIcon'

const NewBuyDialog = lazy(() => import('../../components/FormBuy'))

export default function DashBoard() {
  const [isNewBuyOpened, setIsNewBuyOpened] = useState(false)

  const handleOnCloseDialog = useCallback(() => {
    setIsNewBuyOpened(false)
  }, [])
  const handleOnOpenDialog = useCallback(() => {
    setIsNewBuyOpened(true)
  }, [])

  const isEmpty = useSelector((state) => state.purchase.purchases.length === 0)

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
        <AddPurchaseIcon handleOnClick={handleOnOpenDialog} />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Header handleOnOpenDialog={handleOnOpenDialog} />
      <Purchases handleOnOpenDialog={handleOnOpenDialog} />
      <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
        {isNewBuyOpened && (
          <NewBuyDialog
            open={isNewBuyOpened}
            handleOnClose={handleOnCloseDialog}
          ></NewBuyDialog>
        )}
      </Suspense>
      <AddPurchaseIcon handleOnClick={handleOnOpenDialog} />
    </React.Fragment>
  )
}
