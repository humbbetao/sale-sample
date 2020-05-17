import React, { lazy } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from './Card'
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useSelector } from 'react-redux'
import CashbackInfo from '../CashbackInfo'
const DeletePurchaseDialog = lazy(() => import('../DeletePurchaseDialog'))
const FormBuy = lazy(() => import('../../pages/FormBuy'))

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '8px',
    marginTop: '16px',
  },
  container: {
    paddingTop: '90px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    boxSizing: 'border-box',
    padding: '20px',
    width: '100%',
    margin: '16px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
})

export default function CustomizedTables() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const { purchases, cashback } = useSelector((state) => ({
    purchases: state.buy.purchases,
    cashback: state.buy.cashback,
  }))
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false)
  const [purchaseSelected, setPurchaseSelected] = React.useState(false)
  const [openEditDialog, setOpenEditDialog] = React.useState(false)

  const handleClickOpenDeleteDialog = (purchase) => () => {
    setPurchaseSelected(purchase)
    setOpenDeleteDialog(true)
  }

  const handleClickCloseDeleteDialog = () => {
    setPurchaseSelected(null)
    setOpenDeleteDialog(false)
  }

  const handleClickOpenEditDialog = (purchase) => () => {
    setPurchaseSelected(purchase)
    setOpenEditDialog(true)
  }

  const handleClickCloseEditDialog = () => {
    setPurchaseSelected(null)
    setOpenEditDialog(false)
  }
  if (matches) {
    return (
      <React.Fragment>
        <CashbackInfo value={cashback}></CashbackInfo>

        <Container classes={{ root: classes.container }} maxWidth="lg">
          <TableContainer className={classes.table}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell scope="row" align="center">
                    Codigo
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    Data
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    Valor
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    Cashback
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    Status
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    Ações
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchases.map((purchase) => (
                  <StyledTableRow key={purchase.code}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {purchase.code}
                    </StyledTableCell>
                    <StyledTableCell scope="row" align="center">
                      {purchase.date}
                    </StyledTableCell>
                    <StyledTableCell scope="row" align="center">
                      {purchase.value}
                    </StyledTableCell>
                    <StyledTableCell scope="row" align="center">
                      {purchase.cashbackValue}
                    </StyledTableCell>
                    <StyledTableCell scope="row" align="center">
                      <Chip label={purchase.status} color="primary" />
                    </StyledTableCell>
                    <StyledTableCell scope="row" align="right">
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
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {openDeleteDialog && (
          <DeletePurchaseDialog
            purchase={purchaseSelected}
            handleClose={handleClickCloseDeleteDialog}
          />
        )}
        {openEditDialog && (
          <FormBuy
            purchase={purchaseSelected}
            handleOnClose={handleClickCloseEditDialog}
          />
        )}
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <CashbackInfo value={cashback}></CashbackInfo>

      {purchases.map((purchase) => (
        <Card
          key={purchase.code}
          purchase={purchase}
          handleOnClickOnDelete={handleClickOpenDeleteDialog}
          handleOnClickOnEdit={handleClickOpenEditDialog}
        />
      ))}
      {openDeleteDialog && (
        <DeletePurchaseDialog
          purchase={purchaseSelected}
          handleClose={handleClickCloseDeleteDialog}
        />
      )}
      {openEditDialog && (
        <FormBuy
          purchase={purchaseSelected}
          handleOnClose={handleClickCloseEditDialog}
        />
      )}
    </React.Fragment>
  )
}
