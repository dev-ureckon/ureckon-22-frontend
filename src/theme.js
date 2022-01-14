import { createTheme, responsiveFontSizes } from '@mui/material'

// For custon theme in MUI
const theme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
  // color pallete for MUI theme
  palette: {
    primary: {
      main: '#ffffff', // Text colour
      secondary: '#001013', // secondary txt colour
    },
    secondary: {
      main: '#032e37',
    },
  },
  // Typpography for MUI theme
  typography: {
    // global font config
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
