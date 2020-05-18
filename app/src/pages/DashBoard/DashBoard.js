import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react'
import Header from '../../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/Loading'
import AddPurchaseIcon from '../../components/AddPurchaseIcon'
import {
  getPurchases,
  getCashback,
} from '../../store/reducers/purchase/actionCreators'

const AddPurchase = lazy(() => import('../../components/AddPurchase'))
const Purchases = lazy(() => import('../../components/Purchases'))
const CashbackEmpty = lazy(() => import('../../components/CashbackEmpty'))

export default function DashBoard() {
  const [isNewBuyOpened, setIsNewBuyOpened] = useState(false)

  const handleOnCloseDialog = useCallback(() => {
    setIsNewBuyOpened(false)
  }, [])
  const handleOnOpenDialog = useCallback(() => {
    setIsNewBuyOpened(true)
  }, [])
  const dispatch = useDispatch()
  const isEmpty = useSelector((state) => state.purchase.purchases.length === 0)

  useEffect(() => {
    dispatch(getPurchases())
    dispatch(getCashback())
  }, [dispatch])

  if (isEmpty) {
    return (
      <React.Fragment>
        <Header handleOnOpenDialog={handleOnOpenDialog} />
        <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
          <CashbackEmpty
            handleOnOpenDialog={handleOnOpenDialog}
          ></CashbackEmpty>
          {isNewBuyOpened && (
            <AddPurchase
              open={isNewBuyOpened}
              handleOnClose={handleOnCloseDialog}
            ></AddPurchase>
          )}
        </Suspense>
        <AddPurchaseIcon handleOnClick={handleOnOpenDialog} />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Header handleOnOpenDialog={handleOnOpenDialog} />
      <Suspense fallback={<Loading handleOnClick={handleOnCloseDialog} />}>
        <Purchases handleOnOpenDialog={handleOnOpenDialog} />
        {isNewBuyOpened && (
          <AddPurchase
            open={isNewBuyOpened}
            handleOnClose={handleOnCloseDialog}
          ></AddPurchase>
        )}
      </Suspense>
      <AddPurchaseIcon handleOnClick={handleOnOpenDialog} />
    </React.Fragment>
  )
}
