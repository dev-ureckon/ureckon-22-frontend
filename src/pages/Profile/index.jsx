import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'

import Input from '../../components/input'
import { ProfileLogic } from './profile.js'

import './profile.css'
import Dropdown from '../../components/Dropdown'
import SubmitButton from '../../components/SubmitButton'

const Profile = () => {
  // const isMobile = window.innerWidth <= 768
  const { handleChange, formData, loading, handleSubmit } = ProfileLogic()

  return (
    <div className="root">
      <Container>
        {loading && (
          <LinearProgress style={{ margin: '4px auto', top: 0 }} color="primary" />
        )}

        <form
          style={{ paddingLeft: '26px' }}
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >
          <Grid container spacing={{ xs: 8, sm: 13, md: 12, lg: 10 }}>
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
            <Grid item sm={12} md={6} lg={6} xs={12}>
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
                label="School/College"
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
          <Typography align="center" pt={5}>
            <Button
              type="submit"
              variant="text"
              color="secondary"
              className="submitButton"
              style={{ marginTop: '4rem' }}
            >
              <SubmitButton label={'Save Changes'} />
            </Button>
          </Typography>
        </form>
      </Container>
    </div>
  )
}

export default Profile
