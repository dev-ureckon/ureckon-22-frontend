import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import RegisteredEvents from '../../components/registeredEvents/index.jsx'
import Input from '../../components/input'
import { ProfileLogic } from './profile.js'
import PasswordModal from '../../components/passwordModal/index.jsx'
import profilePicBg from '../../assets/SVGs/profilePicBg.svg'
import editProfileImage from '../../assets/IMGs/edit-profile-image.png'
import './profile.css'
import Dropdown from '../../components/Dropdown'
import SubmitButton from '../../components/SubmitButton'

const Profile = () => {
  const {
    handleChange,
    formData,
    loading,
    handleSubmit,
    handleDisbandTeam,
    handleEditProfilePic,
    fetchedUserDetails,
  } = ProfileLogic()
  const { registeredEvents, authProvider } = useSelector((state) => state.userProfile)

  const [showPasswordModal, setShowPasswordModal] = useState(false)

  return (
    <>
      <div className="root">
        <Container>
          {showPasswordModal && (
            <PasswordModal
              showPasswordModal={showPasswordModal}
              setShowPasswordModal={setShowPasswordModal}
            />
          )}
          {loading && (
            <LinearProgress style={{ margin: '4px auto', top: 0 }} color="primary" />
          )}

          {/* Edit profile Pic */}
          <form encType="multipart/form-data" action="">
            <input
              id="editProfilePicForm"
              name="editProfilePicForm"
              type="file"
              onChange={(event) => handleEditProfilePic(event)}
              hidden
              accept=".png, .jpeg, .jpg"
            />
          </form>

          <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item lg={3} sm={4} md={3} xs={7}>
              <label htmlFor="editProfilePicForm">
                <div style={{ position: 'relative' }}>
                  <img src={profilePicBg} alt="profile-pic-bg" className="profilePicBg" />
                  <img
                    src={editProfileImage}
                    alt="edit-profile"
                    className="profilePic editProfilePic"
                  />
                  <img
                    className="profilePic"
                    src={formData.profilePic}
                    alt="profile pic bg"
                  />
                </div>
              </label>
            </Grid>
            <Grid item lg={4} sm={4} md={4} xs={4}>
              <Typography
                className="profileName"
                variant="h4"
                sx={{ fontWeight: 'bold' }}
                pb={{ xs: 1, sm: 4, md: 4, lg: 5 }}
              >
                {formData.name}
              </Typography>
              <Typography variant="subtitle" className="ureckonId">
                <b>Ureckon ID</b>: {fetchedUserDetails && fetchedUserDetails.userId}
              </Typography>
            </Grid>
          </Grid>

          <br />
          <br />

          <form
            style={{ paddingLeft: '26px' }}
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(e)
            }}
          >
            <Grid container spacing={{ xs: 0, sm: 3, md: 12, lg: 10 }}>
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
                {authProvider === 'password' && (
                  <div className="pwd-field">
                    <Input
                      width="100%"
                      label="Password"
                      placeholder="*********"
                      name="password"
                      type="password"
                      value={formData.password}
                      disabled={true}
                      onChange={(e) => handleChange(e)}
                    />
                    <span className="pwd-txt" onClick={() => setShowPasswordModal(true)}>
                      Change Password
                    </span>
                  </div>
                )}
              </Grid>
              <br />
              <br />
              <Grid item sm={12} md={6} lg={6} xs={12}>
                <div className="email-field">
                  <Input
                    width="100%"
                    label="Email"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    disabled={true}
                  />
                </div>

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
          {registeredEvents && registeredEvents.length > 0 && (
            <RegisteredEvents
              handleDisbandTeam={handleDisbandTeam}
              registeredEvents={registeredEvents}
            />
          )}
        </Container>
      </div>
    </>
  )
}

export default Profile
