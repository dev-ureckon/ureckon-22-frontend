import React from 'react'
import { useStyles } from './home.style'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/UEM Logo (White).png'

import bgvideo from '../../assets/Background video.mp4'

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <video className="videoTag" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>

      <Grid container>
        <Grid item xs={4}>
          <img src={uemLogo} alt="UEM" />
        </Grid>
        <Grid item xs={4}>
          <img src={ureckonLogo} alt="UEM" />
        </Grid>
        <Grid item xs={4}>
          <img src={headingLogo} alt="heading" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
