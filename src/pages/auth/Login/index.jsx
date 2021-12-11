import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../../redux/actions'

const Login = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  //If user is already logged in Do not show this page
  useEffect(() => {
    if (userInfo) navigate('/')
  }, [userInfo, navigate, loading])

  const handleSubmit = (e) => {
    dispatch(userLogin(formData.email, formData.password))
  }

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
