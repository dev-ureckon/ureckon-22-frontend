import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'

import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'
import { RegisterLogic } from './Register.js'

import './register.css'
import Dropdown from '../../../components/Dropdown'
import SubmitButton from '../../../components/SubmitButton'
const Register = () => {
  const isMobile = window.innerWidth <= 768

  const classes = useStyles()
  const { handleChange, formData, loading, handleSubmit } = RegisterLogic()

  return (
    <div className={classes.root}>
      <Container>
        {loading && (
          <LinearProgress style={{ margin: '4px auto', top: 0 }} color="primary" />
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
            <Grid item lg={6} md={12}>
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
                placeholder="Your Number"
                name="number"
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
                placeholder="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
              <Input
                width="100%"
                label="School/College name"
                placeholder="e.g: UEM"
                name="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleChange(e)}
              />
              <Dropdown
                width="100%"
                label="Gender"
                placeholder="Gender"
                name="gender"
                value={formData.gender}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>
          <Typography align="center">
            <Button
              type="submit"
              variant="text"
              color="secondary"
              className={classes.submitButton}
              style={{ marginTop: '4rem' }}
            >
              <SubmitButton label={'Register'} />
            </Button>
          </Typography>
        </form>
        <Typography align="center">
          <Grid spacing={2} style={{ margin: '1rem auto' }} container>
            <Grid item xs={12} sm={5}>
              {' '}
              <Typography
                variant="h5"
                align={isMobile ? 'center' : 'right'}
                color="primary"
                className="authFont"
              >
                Register With:{' '}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SocialAuth />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  )
}

export default Register
