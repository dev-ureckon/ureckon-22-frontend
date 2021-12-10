import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  submitButton: {
    margin: '5rem auto',
    fontFamily: 'ibm-pxel-sans',
    textTransform: "uppercase",
    width: '181px',
    height: '50px',
    //background: url(./images/login\ button.svg);
    backgroundSize: "cover",
    border: 0,
    outline: "none",
    color: "#fff",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: '20px',
  },
  submitButtonLogin: {
    margin: '0rem auto',
    fontFamily: 'ibm-pxel-sans',
    textTransform: "uppercase",
    width: '181px',
    height: '50px',
    //background: url(./images/login\ button.svg);
    backgroundSize: "cover",
    border: 0,
    outline: "none",
    color: "#fff",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: '20px',
  },
  socialAuth:{

  }
}))
