import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import formattedCurrency from '../../helpers/formattedCurrency'
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

export default function PurchaseCard({
  purchase,
  handleOnClickOnEdit,
  handleOnClickOnDelete,
}) {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      variant="outlined"
      data-test={`${purchase.code}-purchase`}
    >
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
            data-test="purchase-cashbackValue"
          >
            {formattedCurrency(purchase.cashbackValue)}
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
            data-test="purchase-code"
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
            data-test="purchase-value"
          >
            {formattedCurrency(purchase.value)}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Data
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            data-test="purchase-date"
          >
            {purchase.date}
          </Typography>
        </div>
        <div className={classes.cardContent}>
          <Typography className={classes.pos} color="textSecondary">
            Status
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
            data-test="purchase-status"
          >
            <Chip label={purchase.status} color="primary" />
          </Typography>
        </div>
      </CardContent>
      <CardActions classes={{ root: classes.cardActions }}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleOnClickOnEdit(purchase)}
          data-test="edit-purchase-button"
        >
          Editar
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleOnClickOnDelete(purchase)}
          data-test="delete-purchase-button"
        >
          Excluir
        </Button>
      </CardActions>
    </Card>
  )
}
