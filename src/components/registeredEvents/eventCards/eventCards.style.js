import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  disbandButton: {
    fontFamily: 'ibm-plex-sans, sans-serif',
    textTransform: 'uppercase',
    width: '181px',
    height: '50px',
    backgroundSize: 'cover',
    backgroundColor: 'red',
    outline: 'none',
    color: '#fff',
    fontSize: 'normal',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'red',
    },
    '@media (max-width: 550px)': {
      marginTop: '2rem',
    },
  },
}))
