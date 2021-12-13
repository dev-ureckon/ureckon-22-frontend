import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'

import Input from '../../../components/input'
import { CompleteProfileLogic } from './completeProfile'

const Register = () => {
  const classes = useStyles()
  const { handleChange, formData, loading, handleSubmit } = CompleteProfileLogic()

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
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Name"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                page="complete-profile"
              />
              <br />
              <br />
              <Input
                width="100%"
                label="Phone No."
                placeholder="Your number here.."
                name="number"
                type="number"
                value={formData.number}
                onChange={(e) => handleChange(e)}
                page="complete-profile"
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
                page="complete-profile"
              />
              <br />
              <br />
              <Input
                width="100%"
                label="School/College name"
                placeholder="UEM"
                name="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleChange(e)}
                page="complete-profile"
              />
            </Grid>
          </Grid>
          <br />
          <Grid container justifyContent={'center'}>
            <Grid item sm={12} xs={12} md={6}>
              <Input
                width="100%"
                label="Gender"
                placeholder="Male"
                name="gender"
                value={formData.gender}
                onChange={(e) => handleChange(e)}
                page="complete-profile"
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
              Submit
            </Button>
          </Typography>
        </form>
      </Container>
    </div>
  )
}

export default Register
