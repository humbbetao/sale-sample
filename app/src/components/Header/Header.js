import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Add from '@material-ui/icons/Add'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarTop: {
    bottom: 'auto',
    top: 0,
  },

  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  titleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export default function Header({ handleOnOpenDialog }) {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const history = useHistory()
  const handleOnClickOnLogout = () => {
    history.push('/')
  }
  if (matches) {
    return (
      <div className={classes.grow}>
        <AppBar position="fixed" classes={{ root: classes.appBarTop }}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Eu Revendedor &apos;o Boticário&apos;
            </Typography>

            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <MenuItem onClick={handleOnOpenDialog}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Add />
                </IconButton>
                <p>Nova Compra</p>
              </MenuItem>
              <MenuItem
                onClick={handleOnClickOnLogout}
                data-test="logout-button"
              >
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <p>Sair</p>
              </MenuItem>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" classes={{ root: classes.appBarTop }}>
        <div className={classes.grow}>
          <Toolbar classes={{ root: classes.titleHeader }}>
            <Typography className={classes.title} variant="h6">
              Eu Revendedor &apos;o Boticário&apos;
            </Typography>
            <MenuItem onClick={handleOnClickOnLogout} data-test="logout-button">
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Sair</p>
            </MenuItem>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}
