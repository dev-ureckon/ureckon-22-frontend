import { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'

import { useStyles } from '../auth.style.js'
import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'

const Register = (props) => {
  const classes = useStyles()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <div className={classes.root}>
       <Container>
      <Grid container spacing={10}>
      <br/><br/>
        <Grid item lg={6} md={12} sm={12}>
          <Input
            width="100%"
            label="Name"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            width="100%"
            label="Phone No."
            placeholder="Input your number here.."
            name="number"
            type="number"
            value={formData.number}
            onChange={(e) => handleChange(e)}
          />
          <Input
            width="100%"
            label="Password"
            placeholder=""
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <br/><br/>
        <Grid item lg={6} md={12}>
          <Input
            width="100%"
            label="Email"
            placeholder="John Doe"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            width="100%"
            label="School/College name"
            placeholder="John Doe"
            name="collegeName"
            value={formData.collegeName}
            onChange={(e) => handleChange(e)}
          />
          <Input
            width="100%"
            label="Gender"
            placeholder="John Doe"
            name="email"
            value={formData.gender}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>
      <Typography align="center">
      <Button variant="outlined" className={classes.submitButton}>Register</Button>
      </Typography>

      <Typography align="center" variant="h5" color="primary" className={classes.socialAuth}>
           Register With: <SocialAuth/>
      </Typography>
    </Container>
    </div>
  )
}

export default Register
