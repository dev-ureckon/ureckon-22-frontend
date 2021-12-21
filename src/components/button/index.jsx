import { Button as MUIButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  submitButton: {
    margin: '5rem auto',
    fontFamily: 'ibm-pxel-sans',
    textTransform: 'uppercase',
    width: '181px',
    height: '50px',
    backgroundSize: 'cover',
    border: 0,
    outline: 'none',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
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
