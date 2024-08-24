import {createTheme} from '@mui/material'
import { blue, cyan } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette:{
    primary: {
      main: blue[700],
      dark: blue[800],
      light: blue[500],
      contrastText: '#fff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fff',
    },
    background: {
      default: '#F8F9FB',
      paper: '#fff',
    }
  }

})