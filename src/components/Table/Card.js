import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
const useStyles = makeStyles({
  root: {
    margin: '16px 16px 16px 16px ',
    padding: '16px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function ProductCard({ purchase }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            CashBack
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {`R$ ${purchase.cashbackValue}`}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Codigo
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {purchase.code}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Valor
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {`R$ ${purchase.value}`}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography className={classes.pos} color="textSecondary">
            Status
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <Chip label={purchase.status} color="primary" />
          </Typography>
        </div>
      </CardContent>
      <CardActions classes={{ root: classes.cardActions }}>
        <Button color="secondary" variant="outlined">
          Editar
        </Button>
        <Button color="primary" variant="outlined">
          Excluir
        </Button>
      </CardActions>
    </Card>
  )
}
