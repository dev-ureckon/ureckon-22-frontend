import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  submitButton: {
    
    margin: '3rem auto',
    fontFamily: 'ibm-pxel-sans, sans-serif',
    textTransform: 'uppercase',
    backgroundSize: 'cover',
    outline: 'none',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#222222',
    width: '228px',
    height: '49px',
    color: 'white'
  },
  submitButtonLogin: {
    
    margin: '1rem auto',
    fontFamily: 'ibm-pxel-sans, sans-serif',
    textTransform: 'uppercase',
    backgroundSize: 'cover',
    outline: 'none',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#222222',
    width: '228px',
    height: '49px',
    color: 'white'
  },
  socialAuth: {},
}))
