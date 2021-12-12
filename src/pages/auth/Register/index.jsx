import { Alert, Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'

import Input from '../../../components/input'
import SocialAuth from '../../../components/SocialAuth/index.jsx'
import { RegisterLogic } from './Register.js'

const Register = (props) => {
  const classes = useStyles()
  const { handleChange, formData, error, loading, handleSubmit } = RegisterLogic()

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
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submitButton}
            >
              Register
            </Button>
          </Typography>
        </form>

        <Grid spacing={1} justifyContent="center" container>
          <Grid item sm={4}>
            {' '}
            <Typography variant="h5" align="right" color="primary">
              Register With:{' '}
            </Typography>
          </Grid>
          <Grid item justifyContent="center" sm={5}>
            <SocialAuth />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Register
