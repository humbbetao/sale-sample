import { createGlobalStyle } from 'styled-components'
import breakpoints from '../../config/breakpoints'
import colors from '../Colors'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 `

export const theme = { breakpoints, colors }
