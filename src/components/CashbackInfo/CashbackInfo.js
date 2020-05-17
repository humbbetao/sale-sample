import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { ReactComponent as Cofrinho } from '../../assets/cofrinho.svg'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'

const CofrinhoIcon = styled(Cofrinho)`
  fill: ${(props) => props.theme.colors.red};
  width: 120px;
  max-width: 150px;
`

const WrapperMoney = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '90px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paperWithoutMoney: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    height: '400px',
    justifyContent: 'space-evenly',
    padding: '16px',
    boxSizing: 'border-box',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      height: '400px',
      justifyContent: 'space-evenly',
    },
  },
  paper: {
    boxSizing: 'border-box',
    padding: '16px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',

    '& > *': {
      padding: theme.spacing(1),
    },

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      margin: theme.spacing(2),
      '& > *': {
        width: '200px',
        margin: theme.spacing(1),
      },
    },
  },
}))

function CashBackIsEmpty({ handleOnOpenDialog }) {
  const classes = useStyles()
  return (
    <Container classes={{ root: classes.container }} maxWidth="lg">
      <Paper classes={{ root: classes.paperWithoutMoney }}>
        <Typography color="textPrimary" variant="h6" align="left">
          Você não tem nenhuma compra registrada
        </Typography>
        <CofrinhoIcon></CofrinhoIcon>

        <Button
          color="primary"
          component="button"
          variant="outlined"
          onClick={handleOnOpenDialog}
          startIcon={
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Add />
            </IconButton>
          }
        >
          Nova Compra
        </Button>
      </Paper>
    </Container>
  )
}

export default function CashbackInfo({ isEmpty, handleOnOpenDialog }) {
  const classes = useStyles()
  const cashback = useSelector((state) => state.buy.cashback)

  if (isEmpty) {
    return <CashBackIsEmpty handleOnOpenDialog={handleOnOpenDialog} />
  }
  return (
    <Container classes={{ root: classes.container }} maxWidth="lg">
      <Paper classes={{ root: classes.paper }}>
        <WrapperMoney>
          <div>
            <Typography color="textPrimary" align="left">
              Cashback
            </Typography>
            <Typography
              color="primary"
              align="left"
              variant="h3"
            >{`R$ ${cashback}`}</Typography>
          </div>
          <CofrinhoIcon></CofrinhoIcon>
        </WrapperMoney>
      </Paper>
    </Container>
  )
}
