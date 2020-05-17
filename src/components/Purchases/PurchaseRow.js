import React from 'react'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TableCell from '../TableCell'
import PurchaseInfo from './PurchaseInfo'

export default function PurchaseRow({
  purchase,
  handleClickOpenEditDialog,
  handleClickOpenDeleteDialog,
}) {
  return (
    <PurchaseInfo purchase={purchase}>
      <TableCell scope="row" align="right">
        <Button
          size="small"
          color="secondary"
          startIcon={<EditIcon />}
          onClick={handleClickOpenEditDialog(purchase)}
        >
          Editar
        </Button>
        <Button
          size="small"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpenDeleteDialog(purchase)}
        >
          Excluir
        </Button>
      </TableCell>
    </PurchaseInfo>
  )
}
