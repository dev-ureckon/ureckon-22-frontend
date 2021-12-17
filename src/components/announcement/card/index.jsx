import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useStyles } from './card.styles'
import './card.font.css'
import Frame from '../../../assets/SVGs/Frame.svg'

const Card = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} className={classes.cardWrapper}>
      <img src={Frame} alt="frame" className={classes.frame} />
      <div className={classes.cardtxt}>
        <div className="cardHeader">UIC Registraion ending soon!</div>
        <div className="cardDesc">
          Ureckon Innovation Challenge (UIC) registration ENDS TOMORROW !! Register now to
          book your slots ...
        </div>
      </div>
    </Grid>
  )
}

export default Card
