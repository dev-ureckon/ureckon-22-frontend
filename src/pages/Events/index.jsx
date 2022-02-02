import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import './events.css'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const useStyles = makeStyles({
  btn1: {
    fontSize: 16,
    backgroundColor: '#2A3B97',
    width: 184,
    height: 56,
    padding: 12,
    borderRadius: '0',
    '&:hover': {
      backgroundColor: 'blueviolet',
    },
  },
  btn2: {
    backgroundColor: '#4B4C4F',
    fontSize: 16,
    width: 184,
    height: 56,
    padding: 12,
    borderRadius: '0',
    '&:hover': {
      backgroundColor: 'blueviolet',
    },
  },
  cardStyle: {
    borderRadius: '0',
  },
  icon: {
    color: 'white',
  },
  pdng: {
    padding: '0',
  },
  mainBox: {
    width: 368,
    height: 304,
  },
})

const Events = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Grid display="flex">
          <Grid flexGrow={1}>
            <h1 className="headingStyle">FLAGSHIP EVENTS</h1>
          </Grid>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon className={classes.icon} />
          </IconButton>
        </Grid>

        <Grid display="flex" justifyContent="center" flexWrap="wrap">
          <Grid className={classes.mainBox} p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ureckon Innovation Challenge (UIC)
                </Typography>
              </CardContent>

              <CardActions className={classes.pdng} padding={0}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {' '}
                    <Button className={classes.btn1} size="small">
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button className={classes.btn2} size="small">
                      Know more
                      <IconButton size="large" aria-label="search" color="inherit">
                        <ArrowForwardIcon className={classes.icon} />
                      </IconButton>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.mainBox} p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tech-Expo
                </Typography>
              </CardContent>
              <CardActions className={classes.pdng} padding={0}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {' '}
                    <Button className={classes.btn1} size="small">
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button className={classes.btn2} size="small">
                      Know more{' '}
                      <IconButton size="large" aria-label="search" color="inherit">
                        <ArrowForwardIcon className={classes.icon} />
                      </IconButton>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.mainBox} p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ureck-a-thon
                </Typography>
              </CardContent>
              <CardActions className={classes.pdng} padding={0}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {' '}
                    <Button className={classes.btn1} size="small">
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button className={classes.btn2} size="small">
                      Know more
                      <IconButton size="large" aria-label="search" color="inherit">
                        <ArrowForwardIcon className={classes.icon} />
                      </IconButton>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Events
