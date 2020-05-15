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
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

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

function createData(name, date, totalValue, refundValue, status) {
  return { name, date, totalValue, refundValue, status }
}

const rows = [
  createData('12222', '07/01/2019', 2052, 21, 'Em Validação'),
  createData('12222', '07/01/2019', 2052, 21, 'Em Validação'),
  createData('12222', '07/01/2019', 2052, 21, 'Em Validação'),
  createData('12222', '07/01/2019', 2052, 21, 'Em Validação'),
  createData('12222', '07/01/2019', 2052, 21, 'Em Validação'),
]

const useStyles = makeStyles({
  table: {
    // padding: '16px',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '8px',
    marginTop: '16px',
  },
  container: {
    // margin: '120px 0',
    paddingTop: '90px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    boxSizing: 'border-box',
    // marginTop: '72px',
    padding: '20px',
    width: '100%',
    margin: '16px 0',
  },
})

export default function CustomizedTables() {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  if (matches) {
    return (
      <Container classes={{ root: classes.container }} maxWidth="lg">
        <Paper classes={{ root: classes.paper }}>
          <Typography color="textSecondary" gutterBottom>
            Seu total acumulado de cashback é: <b>R$2000,00</b>
          </Typography>
        </Paper>

        <TableContainer className={classes.table}>
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Codigo</StyledTableCell>
                <StyledTableCell align="right">Data</StyledTableCell>
                <StyledTableCell align="right">Valor</StyledTableCell>
                <StyledTableCell align="right">Cashback</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalValue}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.refundValue}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Chip label={row.status} color="primary" />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button size="small" color="primary">
                      Editar
                    </Button>
                    <Button size="small" color="primary">
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
