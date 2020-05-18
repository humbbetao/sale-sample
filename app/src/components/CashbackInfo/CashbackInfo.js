import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { ReactComponent as Cofrinho } from '../../assets/cofrinho.svg'
import styled from 'styled-components'
import formattedCurrency from '../../helpers/formattedCurrency'

const CofrinhoIcon = styled(Cofrinho)`
  fill: ${(props) => props.theme.colors.red};
  width: 120px;
  max-width: 150px;
`

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '90px',
  },

  paper: {
    boxSizing: 'border-box',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    '& > *': {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: '16px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))

export default function CashbackInfo() {
  const classes = useStyles()
  const cashback = useSelector((state) => state.purchase.cashback)

  return (
    <Container classes={{ root: classes.container }} maxWidth="lg">
      <Paper classes={{ root: classes.paper }}>
        <div>
          <Typography color="textPrimary" align="left">
            Cashback
          </Typography>
          <CofrinhoIcon></CofrinhoIcon>
        </div>

        <Typography color="primary" align="left" variant="h4">
          {formattedCurrency(cashback)}
        </Typography>
      </Paper>
    </Container>
  )
}
