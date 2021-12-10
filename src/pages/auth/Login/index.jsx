import { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'

import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../../redux/actions'

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
         <br/><br/>
          <Input
            width="100%"
            label="Password"
            placeholder="*********"
            name="password"
            value={formData.gender}
            onChange={(e) => handleChange(e)}
          />
          <Typography align="center">
            <Button type="submit" variant="outlined" className={classes.submitButton}>
              Login
            </Button>
          </Typography>
        </form>
        <Typography
          align="center"
          variant="h5"
          color="primary"
          className={classes.submitButtonLogin}
        >
          Login with: <SocialAuth />
        </Typography>
      </Container>
    </div>
  )
}

export default Login
