import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Add from '@material-ui/icons/Add'
import useMediaQuery from '@material-ui/core/useMediaQuery'
const useStyles = makeStyles((theme) => ({
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  appBarTop: {
    bottom: 'auto',
    top: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  titleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fab: {
    [theme.breakpoints.down('md')]: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
}))

export default function Header({ handleOnOpenDialog }) {
  const classes = useStyles()
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
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
              <MenuItem component="a" href="/">
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
            <MenuItem component="a" href="/">
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
