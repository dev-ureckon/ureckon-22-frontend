import { Link } from 'react-router-dom'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'
import { LoginLogic } from './login.js'
import './login.css'

const Login = () => {
  const classes = useStyles()
  const { isMobile, formData, handleChange, handleSubmit, loading } = LoginLogic()

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        {loading && (
          <LinearProgress style={{ margin: '4px auto', top: 0 }} color="primary" />
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >
          <Input
            width="100%"
            label="Email"
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <Input
            width="100%"
            label="Password"
            placeholder="*********"
            name="password"
            value={formData.password}
            type="password"
            onChange={(e) => handleChange(e)}
          />
          <Grid container>
            <Grid item sm={7}></Grid>
            <Grid item sm={5}>
              <Link to={'/forget-password'}>
                <Typography align="right" color="primary" className="authFont">
                  forget password?
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Typography align="center">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submitButtonLogin}
              className="authFont"
            >
              Login
            </Button>
          </Typography>
        </form>

        <Grid justifyContent="flex-end" container>
          <Grid item sm={3} xs={12}>
            {' '}
            <Typography
              align={isMobile ? 'center' : 'right'}
              variant="h5"
              color="primary"
              className="authFont"
            >
              Login With:{' '}
            </Typography>
          </Grid>
          <Grid item justifyContent="center" sm={8} xs={12}>
            <SocialAuth />
          </Grid>
        </Grid>
        <Typography color={'primary'} variant="h6" align="center" className="authFont">
          Don't Have an account?{' '}
          <Link to="/register">
            <b style={{ color: '#fff' }} className="authFont">
              Register Here !
            </b>
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Login
