import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  submitButton: {
    margin: '5rem auto',
    fontFamily: 'ibm-plex-sans, sans-serif',
    textTransform: 'uppercase',
    width: '181px',
    height: '50px',
    backgroundSize: 'cover',
    border: 0,
    outline: 'none',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px'
  },
  submitButtonLogin: {
    margin: '1rem auto',
    fontFamily: 'ibm-plex-sans, sans-serif',
    textTransform: 'uppercase',
    width: '152px',
    height: '50px',
    backgroundSize: 'cover',
    border: 0,
    outline: 'none',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px'
  },
  socialAuth: {}
}))
