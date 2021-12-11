import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Alert, Button, Container, Grid, LinearProgress, Typography } from '@mui/material'

import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../../redux/actions'

const Register = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    collegeName: '',
    gender: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.number]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.collegeName]: e.target.value,
      [e.target.gender]: e.target.value,
    }))
  }
  //getting state from reducer
  const { data, error, loading } = useSelector((state) => state.userRegister)
  console.log(data, error, loading)
  const handleSubmit = (e) => {
      dispatch(
        userRegister(
          formData.email,
          formData.password,
          formData.name,
          formData.collegeName,
          formData.number,
          formData.gender
        )
      )
  }
  //If user is already logged in Do not show this page
  useEffect(() => {
    if (data) navigate('/')
  }, [data, navigate])

  return (
    <div className={classes.root}>
      <Container>
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
          <Grid container spacing={10}>
            <br />
            <br />
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Name"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
              <Input
                width="100%"
                label="Phone No."
                placeholder="Your number here.."
                name="number"
                type="number"
                value={formData.number}
                onChange={(e) => handleChange(e)}
              />
              <Input
                width="100%"
                label="Password"
                placeholder="*********"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <br />
            <br />
            <Grid item lg={6} md={12}>
              <Input
                width="100%"
                label="Email"
                placeholder="name@example.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
              <Input
                width="100%"
                label="School/College name"
                placeholder="UEM"
                name="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleChange(e)}
              />
              <Input
                width="100%"
                label="Gender"
                placeholder="Male"
                name="gender"
                value={formData.gender}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>
          <Typography align="center">
            <Button type="submit" variant="outlined" className={classes.submitButton}>
              Register
            </Button>
          </Typography>
        </form>
        <Typography
          align="center"
          variant="h5"
          color="primary"
          className={classes.socialAuth}
        >
          Register With: <SocialAuth />
        </Typography>
      </Container>
    </div>
  )
}

export default Register
