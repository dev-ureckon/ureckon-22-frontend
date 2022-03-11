import { useSelector } from 'react-redux'
import { Grid, Button, Fade } from '@mui/material'
import { useStyles } from './announcement.style'
import './announcement.font.css'
import UnionPointer from '../../assets/SVGs/unionTwo.svg'
import Card from './card/index.jsx'

const Announcement = ({ open, handleClose }) => {
  const classes = useStyles()
  const newsfeed = useSelector((state) => state.news.newsfeed)
  return (
    <Fade in={open}>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container className={classes.contentWrapper}>
            <Grid item xs={12} className={classes.headerWrapper}>
              <div className="header">News</div>
              <img
                src={UnionPointer}
                style={{ marginRight: '15rem', marginTop: '-1rem' }}
                alt="Union"
              />
            </Grid>
            {newsfeed.length !== 0 ? (
              newsfeed.map((card, i) => <Card key={i} {...card} />)
            ) : (
              <Card headline="No News to show" />
            )}
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
