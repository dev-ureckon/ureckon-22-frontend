import React from 'react'
import './socialicons.css'
import { Grid } from '@mui/material'
function SocialIcons() {
  return (
    <div>
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
            rel="noreferrer"
          >
            <div className="facebook" />
          </a>
        </Grid>
        <Grid item  sx={{ my: 1}}>
          <a
            href="https://www.instagram.com/ureckon.uemk/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="instagram" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/company/ureckon/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin" />
          </a>
        </Grid>
        <Grid item sx={{ my: 1}}>
          <a href="https://twitter.com/Ureckon_Uemk" target="_blank" rel="noreferrer">
            <div className="twitter" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.youtube.com/c/UreckonUEMKolkata"
            target="_blank"
            rel="noreferrer"
          >
            <div className="youtube" />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default SocialIcons
