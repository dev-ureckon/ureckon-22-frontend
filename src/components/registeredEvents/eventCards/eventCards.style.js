import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  disbandButton: {
    fontFamily: 'ibm-plex-sans, sans-serif',
    textTransform: 'uppercase',
    width: '181px',
    height: '50px',
    border: '2.6px solid #ED1B24',
    outline: 'none',
    color: '#fff',
    fontSize: 'normal',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#ED1B24',
    },
    '@media (max-width: 550px)': {
      marginTop: '2rem',
    },
  },
}))
