import { createGlobalStyle } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import breakpoints from '../../config/breakpoints'
import colors from '../Colors'
import './index.css'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins Regular;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    box-sizing: border-box;
    background-color: #fff;
  }
 `

export const themeStyled = { breakpoints, colors }
export const themeMaterialUi = createMuiTheme({
  palette: {
    primary: { main: themeStyled.colors.red, type: themeStyled.colors.black },
    error: {
      light: themeStyled.colors.pink,
      main: themeStyled.colors.red,
      dark: themeStyled.colors.gray,
      contrastText: themeStyled.colors.red,
    },
    secondary: { main: themeStyled.colors.red },
    text: {
      primary: themeStyled.colors.black,
      secondary: themeStyled.colors.pink,
    },
    color: { main: themeStyled.colors.black },
  },
})
