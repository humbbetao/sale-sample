import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from './Card'
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { useSelector } from 'react-redux'
import CashbackInfo from '../CashbackInfo'

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
  const { rows, cashback } = useSelector((state) => ({
    rows: state.buy.list,
    cashback: state.buy.cashback,
  }))

  if (matches) {
    return (
      <Container classes={{ root: classes.container }} maxWidth="lg">
        <CashbackInfo value={cashback}></CashbackInfo>

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
              {rows.map((row) => (
                <StyledTableRow key={row.code}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.code}
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    {row.date}
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    {row.value}
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    {row.cashbackValue}
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="center">
                    <Chip label={row.status} color="primary" />
                  </StyledTableCell>
                  <StyledTableCell scope="row" align="right">
                    <Button
                      size="small"
                      color="secondary"
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<DeleteIcon />}
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
    )
  }
  return (
    <div style={{ marginTop: '72px', marginBottom: '72px' }}>
      <Paper classes={{ root: classes.paper }}>
        <Typography color="textSecondary" gutterBottom>
          Seu total acumulado de cashback é: R$2000,00
        </Typography>
      </Paper>
      <Paper classes={{ root: classes.paper }}>
        <Typography color="textSecondary" gutterBottom>
          <Link
            // component="button"
            color="primary"
            variant="contained"
            href="/add_compra"
          >
            Add Compras
          </Link>
          <Link
            // component="button"
            color="primary"
            variant="contained"
            href="/update_lista"
          >
            Editar Lista
          </Link>
        </Typography>
      </Paper>
      {Array.from(new Array(3)).map((item, id) => (
        <Card key={id} />
      ))}
    </div>
  )
}
