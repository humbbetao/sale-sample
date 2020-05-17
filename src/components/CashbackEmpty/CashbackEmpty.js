import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { ReactComponent as Cofrinho } from '../../assets/cofrinho.svg'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'

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
}))

export default function CashBackEmpty({ handleOnOpenDialog }) {
  const classes = useStyles()
  return (
    <Container classes={{ root: classes.container }} maxWidth="lg">
      <Paper classes={{ root: classes.paper }}>
        <Typography color="textPrimary" variant="h6" align="left">
          Você não tem nenhuma compra registrada
        </Typography>
        <CofrinhoIcon></CofrinhoIcon>

        <Button
          color="primary"
          component="button"
          variant="outlined"
          size="large"
          data-test="add-button"
          onClick={handleOnOpenDialog}
          startIcon={<Add />}
        >
          Nova Compra
        </Button>
      </Paper>
    </Container>
  )
}
