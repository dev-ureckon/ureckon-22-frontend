import { useStyles } from './home.style'
import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/uemLogo.png'
import repubgamers from '../../assets/IMGs/repubGamers.png'
import asus from '../../assets/IMGs/asus.png'
import bgvideo from '../../assets/bgVideo.mp4'
import './fonts.css'
import './socialicons.css'
import line1 from '../../assets/SVGs/Union.svg'
import line2 from '../../assets/SVGs/unionTwo.svg'
import { Link } from 'react-router-dom'

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <video className="videoTag" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* for main container */}
      {/* for Navbar */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        className="headcontainer"
        flexWrap="nowrap"
        sx={{ paddingX: 30, paddingTop: 5 }}
        xs={12}
      >
        <Grid item alignSelf="center" className="headimgcontain">
          <img src={uemLogo} className="headimage1" alt="UEM" />
        </Grid>
        <Grid item className="headimgcontain2">
          <img src={headingLogo} className="headimage2" alt="ureckon" />
        </Grid>
        <Grid item className="headimgcontain">
          <img src={ureckonLogo} className="headimage3" alt="ureckonlogo" />
        </Grid>
      </Grid>
      <Grid container>
        {/* for Menu */}
        <Grid
          container
          columns={{ lg: 13, sm: 12, xs: 12 }}
          className="menuwithsocial"
          justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
        >
          <Grid item lg={12} className="menupad">
            <Grid className="menufont" container alignItems="center">
              <Grid item container justifyContent="center" lg={6} xs={12}>
                <Link to="" className="menulink">
                  Login
                  <div>
                    <img className="test" src={line1} alt="line" />
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                container
                justifyContent={{ lg: 'flex-end', xs: 'center' }}
                lg={6}
                xs={12}
                order={{ lg: 2, xs: 4 }}
              >
                <Link to="" className="menulink">
                  More..
                  <div>
                    <img className="test2" src={line2} alt="line" />
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                container
                justifyContent={{ lg: 'flex-end', xs: 'center' }}
                lg={6}
                xs={12}
                order={{ lg: 3, xs: 2 }}
              >
                <Link to="" className="menulink">
                  Events
                  <div>
                    <img className="test3" src={line1} alt="line" />
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                lg={6}
                xs={12}
                order={{ lg: 4, xs: 3 }}
              >
                <Link to="" className="menulink">
                  About
                  <div>
                    <img className="test4" src={line2} alt="line" />
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection={{ lg: 'column', md: 'row', xs: 'row' }}
            alignItems={{ xs: 'center', md: 'center' }}
            justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
            className="socialicons"
            xs={12}
            lg={1}
          >
            <Grid item>
              <a
                href="https://m.facebook.com/ureckon.uemk/?refid=52&__tn__=C-R"
                target="_blank"
              >
                <div className="facebook"></div>
              </a>
            </Grid>
            <Grid item sx={{ my: 1 }}>
              <a href="https://www.instagram.com/ureckon.uemk/" target="_blank">
                <div className="instagram"></div>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/company/ureckon/" target="_blank">
                <div className="linkedin"></div>
              </a>
            </Grid>
            <Grid item sx={{ my: 1 }}>
              <a href="https://twitter.com/Ureckon_Uemk" target="_blank">
                <div className="twitter"></div>
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/c/UreckonUEMKolkata" target="_blank">
                <div className="youtube"></div>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          sx={{ paddingX: 31 }}
          flexWrap="nowrap"
        >
          <Grid item alignSelf="center">
            <div className="Sponsor">Sponsored By</div>
          </Grid>
          <Grid item className="headimgcontain">
            <img src={repubgamers} className="headimage1" alt="UEM" />
          </Grid>
          <Grid item sx={{ paddingTop: 3 }} className="headimgcontain">
            <img src={asus} className="headimage1" alt="UEM" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
