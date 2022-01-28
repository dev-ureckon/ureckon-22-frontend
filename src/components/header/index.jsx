import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/uemLogo.png'
import './header.css'

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      className="footer"
      sx={{ marginBottom: '2rem' }}
    >
      <Grid item alignSelf="center" sx={{ paddingTop: 5 }}>
        <img src={uemLogo} alt="UEM" className="img" />
      </Grid>
      <Grid item sx={{ paddingTop: 5 }}>
        <img src={headingLogo} alt="UEM" className="img" />
      </Grid>
      <Grid item sx={{ paddingTop: 5 }}>
        <img src={ureckonLogo} alt="heading" className="img" />
      </Grid>
    </Grid>
  )
}

export default Header
