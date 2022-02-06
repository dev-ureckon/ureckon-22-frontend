import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import { useStyles } from '../auth.style.js'

import Input from '../../../components/input'
import { CompleteProfileLogic } from './completeProfile'
import Dropdown from '../../../components/Dropdown/index.jsx'

const CompleteProfile = () => {
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
          <Grid container spacing={{ xs: 5, sm: 1, md: 6, lg: 10 }}>
            <br />
            <br />
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Input
                width="100%"
                label="Name"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                disabled
              />
              <br />
              <br />
              <Input
                width="100%"
                label="Phone No."
                placeholder="Your Number"
                name="number"
                value={formData.number}
                onChange={(e) => handleChange(e)}
                pattern="^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$"
                title="Phone number"
              />
            </Grid>
            <br />
            <br />
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Input
                width="100%"
                label="Email"
                placeholder="name@example.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                disabled={true}
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                title="Email ID"
              />
              <br />
              <br />
              <Input
                width="100%"
                label="School/College"
                placeholder="Your School/College name"
                name="collegeName"
                value={formData.collegeName}
                onChange={(e) => handleChange(e)}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container justifyContent="center" pt={{ xs: 2, lg: 0, md: 0, sm: 0 }}>
            <Grid item sm={12} xs={12} md={6}>
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

export default CompleteProfile
