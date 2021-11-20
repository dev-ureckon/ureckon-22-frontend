import { createTheme, responsiveFontSizes } from '@mui/material'

//For custon theme in MUI
const theme = createTheme({
  // color pallete for MUI theme
  palette: {
    primary: {
      main: '#ffffff', //Text colour
      secondary: '#43c9ed', //secondary txt colour
    },
  },
  // Typpography for MUI theme
  typography: {
    //global font config
    fontFamily: ' ',
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    MuiStepper: {
      root: {
        background: 'none',
        border: 'none',
      },
    },
  },
})

export default responsiveFontSizes(theme)
