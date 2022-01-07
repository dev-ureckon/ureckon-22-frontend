import { Button as MUIButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  submitButton: {
    margin: '5rem auto',
    fontFamily: 'ibm-plex-sans, sans-serif',
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
    color: 'white',
  },
}))

const Button = (props) => {
  const classes = useStyles()
  const { children } = props
  return (
    <MUIButton
      type="submit"
      variant="contained"
      color="secondary"
      className={classes.submitButton}
    >
      {children}
    </MUIButton>
  )
}

export default Button
