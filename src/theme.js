import { createTheme, responsiveFontSizes } from '@mui/material'

// For custon theme in MUI
const theme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    h1: {
      fontFamily: " 'Blanka', sans-serif",
      textShadow: '2px 1px #43C9ED',
      lineHeight: '2.5',
      fontSize: '48px',
      letterSpacing: '4.8px',
      fontWeight: '500',
      color: 'white',
    },
    h2: {
      fontFamily: " 'Blanka', sans-serif",
      textShadow: '2px 1px #43C9ED',
      lineHeight: '2',
      fontSize: '36px',
      letterSpacing: '3.6px',
      fontWeight: '400',
      color: 'white',
    },
    h3: {
      fontFamily: " 'Blanka', sans-serif",
      textShadow: '2px 1px #43C9ED',
      lineHeight: '1.3',
      fontSize: '32px',
      letterSpacing: '3.2px',
      fontWeight: '300',
      color: 'white',
    },
    body1: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: '24px',
      lineHeight: '1.2',
    },
    body2: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: '20px',
      lineHeight: '1.1',
    },
    subtitle1: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      fontSize: '32px',
      lineHeight: '2',
      letterSpacing: '10%',
      fontWeight: '400',
    },
    subtitle2: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      lineHeight: '2',
      letterSpacing: '10%',
      fontWeight: '400',
    },
    button: {
      fontFamily: "'IBM Plex Sans', sans-serif",
      lineHeight: '2',
      fontSize: '24px',
      fontWeight: '600',
    },
  },

  // color pallete for MUI theme
  palette: {
    primary: {
      main: '#ffffff',
      secondary: '#001013',
      navbar: 'rgba(1, 2, 8, 0.8)', //constant navbar colour
    },
    secondary: {
      main: '#032e37',
      red: '#ED1B24',
      purple: '#2A3B97',
    },
    warning: { main: '#F49320' }, //yellow
    success: { main: '#0DB3B3' }, //green
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
