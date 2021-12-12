import { Grid } from '@mui/material'
import googleIcon from "../../assets/SVGs/googleIcon.svg"
import facebookIcon from "../../assets/SVGs/facebookIcon.svg"

// Google Authentication
const googleAuth = async () => {
  console.log('Google login')
}

// Facebook Authentication
const facebookAuth = async () => {
  console.log('Fb login')
}

function SocialAuth() {
  return (
    <div style={{ margin: '-1rem 0 1rem 1rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={2} alignItems="center">
          <img src={googleIcon} style={{ cursor: 'pointer' }} alt="googleIcon" onClick={googleAuth} />
        </Grid>
        <Grid item xs={2} alignItems="center">
          <img src={facebookIcon} style={{ cursor: 'pointer' }} alt="facebookIcon" onClick={facebookAuth} />
        </Grid>
      </Grid>
    </div>
  )
}

export default SocialAuth
