import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/uemLogo.png'

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      className="footer"
      style={{ paddingX: 30, margin: '2rem 0' }}
    >
      <Grid item alignSelf="center" style={{ paddingTop: 5 }}>
        <img src={uemLogo} style={{ width: '100%', height: 'auto' }} alt="UEM" />
      </Grid>
      <Grid item style={{ paddingTop: 5 }}>
        <img src={headingLogo} style={{ width: '100%', height: 'auto' }} alt="UEM" />
      </Grid>
      <Grid item style={{ paddingTop: 5 }}>
        <img src={ureckonLogo} style={{ width: '100%', height: 'auto' }} alt="heading" />
      </Grid>
    </Grid>
  )
}

export default Header
