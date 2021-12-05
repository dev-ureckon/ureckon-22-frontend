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
      sx={{ paddingX: 30, paddingTop: 5, marginBottom: '2rem' }}
    >
      <Grid item alignSelf="center">
        <img src={uemLogo} alt="UEM" />
      </Grid>
      <Grid item>
        <img src={headingLogo} alt="UEM" />
      </Grid>
      <Grid item>
        <img src={ureckonLogo} alt="heading" />
      </Grid>
    </Grid>
  )
}

export default Header
