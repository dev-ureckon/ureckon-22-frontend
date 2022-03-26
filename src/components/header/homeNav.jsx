import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/SVGs/ureckon2nd3rd.svg'
import uemLogo from '../../assets/IMGs/uemLogo.png'
import './header.css'

const HomeNav = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      className="footer"
      sx={{ marginBottom: '2rem' }}
    >
      <Grid item alignSelf="center" sx={{ paddingTop: 5 }}>
        <img src={uemLogo} alt="UEM" className="img" />
      </Grid>
      <Grid item sx={{ paddingTop: 5 }}>
        <img src={headingLogo} alt="UEM" className="img" style={{ height: '110px' }} />
      </Grid>
      <Grid item sx={{ paddingTop: 5 }}>
        <img src={ureckonLogo} alt="heading" className="img" />
      </Grid>
    </Grid>
  )
}

export default HomeNav
