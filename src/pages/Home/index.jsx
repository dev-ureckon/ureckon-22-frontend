import { useStyles } from './home.style'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid'
import './fonts.css'
import './socialicons.css'
import line1 from '../../assets/SVGs/Union.svg'
import line2 from '../../assets/SVGs/unionTwo.svg'
import { Link } from 'react-router-dom'
import { moreFunction } from './home'
import { backoptions } from './home'
import { useEffect } from 'react'
import { getMainSponsors } from '../../redux/apis'

function Home() {
  const classes = useStyles()
  const mainSponsors = useSelector((state) => state.sponsor.mainSponsors)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMainSponsors())
  }, [])
  return (
    <div className={classes.root}>
      {/* for main container */}
      {/* for Navbar */}
      <Grid sx={{ paddingY: 0 }}>
        <Grid container>
          {/* for Menu */}
          <Grid
            container
            columns={{ lg: 13, sm: 12, xs: 12 }}
            className="menuwithsocial"
            justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
          >
            <Grid item lg={12} className="menupad" id="mainpage">
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
                  <div onClick={moreFunction}>
                    <Link to="" className="menulink">
                      More..
                      <div>
                        <img className="test2" src={line2} alt="line" />
                      </div>
                    </Link>
                  </div>
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

            {/* -------------------------------------------------------------------------------- */}

            <Grid item lg={12} className="menupad2" id="moreoptions">
              <Grid className="menufont" container alignItems="center">
                <Grid item container justifyContent="center" lg={6} xs={12}>
                  <Link to="" className="menulink">
                    Team
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
                  <div onClick={backoptions}>
                    <Link to="" className="menulink">
                      Back..
                      <div>
                        <img className="test2" src={line2} alt="line" />
                      </div>
                    </Link>
                  </div>
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
                    Contact
                    <div>
                      <img className="test5" src={line1} alt="line" />
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
                    Sponsors
                    <div>
                      <img className="test6" src={line2} alt="line" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* ----------------------------------------------------------------------------------------- */}

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
          {mainSponsors.length && (
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              sx={{ paddingX: 31 }}
              flexWrap="nowrap"
            >
              <Grid item alignSelf="center">
                <div className="Sponsor">Partnered By</div>
              </Grid>
              {/* <Grid item className="headimgcontain">
                <img src={repubgamers} className="headimage1" alt="UEM" />
              </Grid>
              <Grid item sx={{ paddingTop: 3 }} className="headimgcontain">
                <img src={asus} className="headimage1" alt="UEM" />
              </Grid> */}
              {mainSponsors.map((aMainSponsor) => (
                <Grid item className="headimgcontain">
                  <img
                    src={aMainSponsor.sponsorLogo}
                    height={100}
                    width={100}
                    // className="headimage1"
                    alt="UEM"
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
