import { useStyles } from './home.style'
import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/uemLogo.png'
import repubgamers from '../../assets/IMGs/repubGamers.png'
import asus from '../../assets/IMGs/asus.png'
import bgvideo from '../../assets/bgVideo.mp4'
import fbwhite from '../../assets/SVGs/fbWhite.svg'
import instawhite from '../../assets/SVGs/instaWhite.svg'
import linkedinwhite from '../../assets/SVGs/linkedInWhite.svg'
import twitterwhite from '../../assets/SVGs/twitterWhite.svg'
import youtubewhite from '../../assets/SVGs/youtubeWhite.svg'
import instacolor from '../../assets/SVGs/instaColor.svg'
import fbcolor from '../../assets/SVGs/fbColor.svg'
import linkedincolor from '../../assets/SVGs/linkedInColor.svg'
import twittercolor from '../../assets/SVGs/twitterColor.svg'
import youtubecolor from '../../assets/SVGs/youtubeColor.svg'
import './fonts.css'
import line1 from '../../assets/SVGs/Union.svg'
import line2 from '../../assets/SVGs/unionTwo.svg'

function Home() {
  const classes = useStyles()
  const handleMouseOver = (e) => {
    if (e.target.id === 'ico1') e.target.src = fbcolor
    else if (e.target.id === 'ico2') e.target.src = instacolor
    else if (e.target.id === 'ico3') e.target.src = linkedincolor
    else if (e.target.id === 'ico4') e.target.src = twittercolor
    else if (e.target.id === 'ico5') e.target.src = youtubecolor
  }
  const handleMouseOut = (e) => {
    if (e.target.id === 'ico1') e.target.src = fbwhite
    else if (e.target.id === 'ico2') e.target.src = instawhite
    else if (e.target.id === 'ico3') e.target.src = linkedinwhite
    else if (e.target.id === 'ico4') e.target.src = twitterwhite
    else if (e.target.id === 'ico5') e.target.src = youtubewhite
  }
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
          className="footer"
          sx={{ paddingX: 30, paddingTop:5 }}
        >
          <Grid item alignSelf="center">
          <img src={uemLogo} alt="UEM" />
          </Grid>
          <Grid item>
          <img src={headingLogo} alt="UEM" />
          </Grid>
          <Grid item >
          <img src={ureckonLogo} alt="heading" />
          </Grid>
        </Grid>
      <Grid container>
       

        {/* for Menu */}
        <Grid container columns={{ lg: 13, xs: 12 }} className="menusocial">
          <Grid item lg={12} sx={{ paddingTop: 8 }}>
            <Grid className="menufont" container alignItems="center">
              <Grid item container justifyContent="center" lg={6} sm={6} xs={12}>
                <a href="" className="menulink">
                  Login
                </a>
                <img className="test" src={line1} alt="line" />
              </Grid>
              <Grid
                item
                container
                justifyContent={{ lg: 'flex-end', xs: 'center' }}
                lg={6} xs={12}
              >
                <img className="test2" src={line2} alt="line" />
                <a href="" className="menulink">
                  More..
                </a>
              </Grid>
              <Grid
                item
                container
                justifyContent={{ lg: 'flex-end', xs: 'center' }}
                lg={6} xs={12}
              >
                <a href="" className="menulink">
                  Events
                </a>
                <img className="test3" src={line1} alt="line" />
              </Grid>
              <Grid item container justifyContent="center" lg={6} xs={12}>
                <img className="test4" src={line2} alt="line" />
                <a href="" className="menulink">
                  About
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection={{ lg: 'column', md: 'column', xs: 'row' }}
            alignItems={{ xs: 'center' }}
            className="socialicons"
            xs={12}
            lg={1}
          >
            <Grid item>
              <a
                href="https://m.facebook.com/ureckon.uemk/?refid=52&__tn__=C-R"
                target="_blank"
              >
                <img
                  src={fbwhite}
                  alt="heading"
                  id="ico1"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="iconspad"
                />
              </a>
            </Grid>
            <Grid item sx={{ my: 1 }}>
              <a href="https://www.instagram.com/ureckon.uemk/" target="_blank">
                <img
                  src={instawhite}
                  alt="heading"
                  id="ico2"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="iconspad"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/company/ureckon/" target="_blank">
                <img
                  src={linkedinwhite}
                  alt="heading"
                  id="ico3"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="iconspad"
                />
              </a>
            </Grid>
            <Grid item sx={{ my: 1 }}>
              <a href="https://twitter.com/Ureckon_Uemk" target="_blank">
                <img
                  src={twitterwhite}
                  alt="heading"
                  id="ico4"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="iconspad"
                />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.youtube.com/c/UreckonUEMKolkata" target="_blank">
                <img
                  src={youtubewhite}
                  alt="heading"
                  id="ico5"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="iconspad"
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          className="footer"
          sx={{ paddingX: 30 }}
        >
          <Grid item alignSelf="center">
            <div className="Sponsor">Sponsored By</div>
          </Grid>
          <Grid item>
            <img src={repubgamers} alt="UEM" />
          </Grid>
          <Grid item sx={{ paddingTop: 3 }}>
            <img src={asus} alt="UEM" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
