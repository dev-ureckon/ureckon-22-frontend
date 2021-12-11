import { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'

import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../../redux/actions'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    dispatch(userLogin(formData))
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
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
