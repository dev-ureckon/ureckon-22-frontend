import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from './card.styles'
import './card.font.css'
import Frame from '../../../assets/SVGs/Frame.svg'

const Card = (props) => {
  const { headline, content, link } = props
  const classes = useStyles()
  return (
    <Grid
      item
      xs={12}
      className={classes.cardWrapper}
      onClick={() => window.open(link, '_blank')}
    >
      <img src={Frame} alt="frame" className={classes.frame} />
      <div className={classes.cardtxt}>
        <div className="cardHeader">{headline}</div>
        <div className="cardDesc">{content}</div>
      </div>
    </Grid>
  )
}

export default Card
