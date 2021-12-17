import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography, Button, Fade } from '@mui/material'
import { useStyles } from './announcement.style'
import './announcement.font.css'
import UnionPointer from '../../assets/SVGs/unionTwo.svg'
import Frame from '../../assets/SVGs/Frame.svg'
import Card from './card/index.jsx'
import { getAllNewsfeed } from '../../redux/apis'

const Announcement = ({ open, handleClose }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const newsfeed = useSelector((state) => state.news.newsfeed)
  useEffect(() => {
    dispatch(getAllNewsfeed())
  }, [])
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
            {newsfeed.map((card, i) => (
              <Card key={i} {...card} />
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
