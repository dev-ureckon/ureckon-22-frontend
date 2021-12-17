import { useState } from 'react'
import { Grid, Typography, Button, Fade } from '@mui/material'
import { useStyles } from './announcement.style'
import './announcement.font.css'
import UnionPointer from '../../assets/SVGs/unionTwo.svg'
import Frame from '../../assets/SVGs/Frame.svg'
import Card from './card/index.jsx'

const Announcement = ({ open, handleClose }) => {
  const classes = useStyles()

  const cardArr = [0, 1, 2, 3]
  return (
    <Fade in={open}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentWrapper}>
            <Grid item xs={12} className={classes.headerWrapper}>
              <div className="header">Announcements</div>
              <img
                src={UnionPointer}
                style={{ marginRight: '15rem', marginTop: '-1rem' }}
                alt="Union"
              />
            </Grid>
            {cardArr.map((card, i) => (
              <Card key={i} />
            ))}
            <Grid item xs={12} className={classes.btnWrapper}>
              <Button variant="contained" className={classes.btn} onClick={handleClose}>
                Back
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fade>
  )
}

export default Announcement
