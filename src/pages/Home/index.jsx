import React, { useState } from 'react'
import { useStyles } from './home.style'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/UEM Logo (White).png'
import repubgamers from '../../assets/IMGs/sample title sponsor logo.png'
import asus from '../../assets/IMGs/sample title sponsor logo2.png'
import bgvideo from '../../assets/Background video.mp4'
import fbwhite from '../../assets/SVGs/facebook icon white.svg'
import instawhite from '../../assets/SVGs/instagram logo white.svg'
import linkedinwhite from '../../assets/SVGs/linkedin logo white.svg'
import twitterwhite from '../../assets/SVGs/twitter logo white.svg'
import youtubewhite from '../../assets/SVGs/youtube logo white.svg'



function Home() {
  const classes = useStyles()
  // const[imgSrc, setimgSrc]=useState('')
  // const handleonmouseOver =(e)=>{

  }
  return (


    <div className={classes.root}>
      <video className="videoTag" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      {/* 
      <Grid container align="center" sx={{ paddingTop: 2 }}>
        <Grid item lg={4}>
          <img src={uemLogo} alt="UEM" />
        </Grid>
        <Grid item lg={4}>
          <img src={headingLogo} alt="UEM" />
        </Grid>
        <Grid item lg={4}>
          <img src={ureckonLogo} alt="heading" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <div>Login</div>
            </Grid>
            <Grid item>
              <div>More</div>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <div>Events</div>
            </Grid>
            <Grid item>
              <div>About</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <div>
              <img src={fbwhite} alt="heading" />
            </div>
            <div>
              <img src={instawhite} alt="heading" />
            </div>
            <div>
              <img src={linkedinwhite} alt="heading" />
            </div>
            <div>
              <img src={twitterwhite} alt="heading" />
            </div>
            <div>
              <img src={youtubewhite} alt="heading" />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid container align="center" className={classes.footer} sx={{ paddingBottom: 2 }}>
        <Grid item lg={4}>
          <div className={classes.sponsored}>Sponsored By</div>
        </Grid>
        <Grid item lg={4}>
          <img src={repubgamers} alt="UEM" />
        </Grid>
        <Grid item lg={4}>
          <img src={asus} alt="UEM" />
        </Grid>
      </Grid> */}

      {/* for main container */}
      <Grid container>
        {/* for Navbar */}
        <Grid container align="center" sx={{ paddingTop: 5 }}>
          <Grid item lg={4}>
            <img src={uemLogo} alt="UEM" />
          </Grid>
          <Grid item lg={4}>
            <img src={headingLogo} alt="UEM" />
          </Grid>
          <Grid item lg={4}>
            <img src={ureckonLogo} alt="heading" />
          </Grid>
        </Grid>

        {/* for Menu */}
        <Grid container columns={13}>
          <Grid item lg={12}>
            <Grid container alignItems="center">
              <Grid item lg={6}>
                Login
              </Grid>
              <Grid item lg={6}>
                More
              </Grid>
              <Grid item lg={6}>
                Events
              </Grid>
              <Grid item lg={6}>
                About
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div>
              <a
                href="https://m.facebook.com/ureckon.uemk/?refid=52&__tn__=C-R"
                target="_blank"
              >
                <img src={fbwhite} alt="heading" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/ureckon.uemk/" target="_blank">
                <img src={instawhite} alt="heading" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/ureckon/" target="_blank">
                <img src={linkedinwhite} alt="heading" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Ureckon_Uemk" target="_blank">
                <img src={twitterwhite} alt="heading" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/c/UreckonUEMKolkata" target="_blank">
                <img src={youtubewhite} alt="heading" />
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid item>
            <div className={classes.sponsored}>Sponsored By</div>
          </Grid>
          <Grid item>
            <img src={repubgamers} alt="UEM" />
          </Grid>
          <Grid item>
            <img src={asus} alt="UEM" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
