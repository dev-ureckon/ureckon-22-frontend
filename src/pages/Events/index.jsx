import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import './events.css'
import SearchIcon from '@mui/icons-material/Search'

const useStyles = makeStyles({
  btn1: {
    fontSize: 16,
    backgroundColor: 'blue',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: 'blueviolet',
    },
  },
  btn2: {
    backgroundColor: 'black',
    fontSize: 16,
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
          <Grid p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ureckon Innovation Challenge (UIC)
                </Typography>
              </CardContent>
              <CardActions padding={0}>
                <Button className={classes.btn1} size="small">
                  Register
                </Button>
                <Button className={classes.btn2} size="small">
                  Know more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ureckon Innovation Challenge (UIC)
                </Typography>
              </CardContent>
              <CardActions padding={0}>
                <Button className={classes.btn1} size="small">
                  Register
                </Button>
                <Button className={classes.btn2} size="small">
                  Know more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid p={2}>
            <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="uic" height="140" image="/" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ureckon Innovation Challenge (UIC)
                </Typography>
              </CardContent>
              <CardActions padding={0}>
                <Button className={classes.btn1} size="small">
                  Register
                </Button>
                <Button className={classes.btn2} size="small">
                  Know more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Events
