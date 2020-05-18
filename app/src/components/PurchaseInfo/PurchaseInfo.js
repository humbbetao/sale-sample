import React from 'react'

import Chip from '@material-ui/core/Chip'
import TableCell from '../TableCell'
import TableRow from '../TableRow'
import formattedCurrency from '../../helpers/formattedCurrency'
export default function PurchaseInfo({ purchase, children = null }) {
  return (
    <TableRow data-test={`${purchase.code}-purchase`}>
      <TableCell
        component="th"
        scope="row"
        align="center"
        data-test="purchase-code"
      >
        {purchase.code}
      </TableCell>
      <TableCell scope="row" align="center" data-test="purchase-date">
        {purchase.date}
      </TableCell>
      <TableCell scope="row" align="center" data-test="purchase-value">
        {formattedCurrency(purchase.value)}
      </TableCell>
      <TableCell scope="row" align="center" data-test="purchase-cashbackValue">
        {formattedCurrency(purchase.cashbackValue)}
      </TableCell>
      <TableCell scope="row" align="center" data-test="purchase-status">
        <Chip label={purchase.status} color="primary" />
      </TableCell>
      {children}
    </TableRow>
  )
}
