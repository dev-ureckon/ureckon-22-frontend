import { Grid } from '@mui/material'

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
    <div style={{ margin: '0' }}>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={2} alignItems="center">
          Google Login <img src="" alt="" onClick={googleAuth} />
        </Grid>
        <Grid item xs={2} alignItems="center">
          FB Login <img src="" alt="" onClick={facebookAuth} />
        </Grid>
      </Grid>
    </div>
  )
}

export default SocialAuth
