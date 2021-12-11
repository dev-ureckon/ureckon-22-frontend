import { Link } from 'react-router-dom'
import { Alert, Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'
import { LoginLogic } from './Login.js'

const Login = (props) => {
  const classes = useStyles()
const {handleChange, handleSubmit, formData, loading, error} = LoginLogic()
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        {loading && (
          <LinearProgress style={{ margin: '4px auto', top: 0 }} color="primary" />
        )}
        {error && (
          <>
            <Alert
              style={{ marginTop: '8px', width: '100%' }}
              variant="filled"
              severity="error"
            >
              {error}
            </Alert>
            <br />
            <br />
          </>
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
            placeholder="djBravo@champions.wi"
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
                <Typography align="right" color="primary">
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
            >
              Login
            </Button>
          </Typography>
        </form>
        <Typography
          align="center"
          variant="h5"
          color="primary"
          className={classes.socialAuth}
        >
          <Grid container spacing={6}>
            <Grid item sm={5}>
              {' '}
              <Typography align="center" variant="h5" color="primary">
                Login With:{' '}
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <SocialAuth />
            </Grid>
          </Grid>
        </Typography>
        <Typography color={'primary'} variant="h6" align="center">
          Don't Have an account?{' '}
          <Link to="/register">
            <b style={{ color: '#fff' }}>Register Here !</b>
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Login
