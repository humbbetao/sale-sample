import React from 'react'

import Chip from '@material-ui/core/Chip'
import TableCell from '../TableCell'
import TableRow from '../TableRow'

export default function PurchaseInfo({ purchase, children = null }) {
  return (
    <TableRow>
      <TableCell component="th" scope="row" align="center">
        {purchase.code}
      </TableCell>
      <TableCell scope="row" align="center">
        {purchase.date}
      </TableCell>
      <TableCell scope="row" align="center">
        {purchase.value}
      </TableCell>
      <TableCell scope="row" align="center">
        {purchase.cashbackValue}
      </TableCell>
      <TableCell scope="row" align="center">
        <Chip label={purchase.status} color="primary" />
      </TableCell>
      {children}
    </TableRow>
  )
}
