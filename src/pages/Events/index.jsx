import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import SearchIcon from '@mui/icons-material/Search'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container } from '@mui/material'
import './events.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box } from '@mui/material';

import SearchExpand from '../../components/SearchExpand'
import { useStyles } from './eventList.style'
import { EventListLogic } from './eventList'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader'

const Events = () => {
  const classes = useStyles()
  const { events, eventCategorySlug, makeHeading, loading, fakeLoading } =
    EventListLogic()

  if (fakeLoading) {
    return <Loader />
  } else {
    return (
      <>
        <Container>
          <Grid display="flex">
            <Grid flexGrow={1} m={1.7}>
              <h1 className="headingStyle">{makeHeading(eventCategorySlug)} EVENTS</h1>
            </Grid>
            <Grid
              item
              md={2}
              alignSelf={'center'}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Link to={`/events/search`}>
                <SearchIcon style={{ color: '#fff' }} fontSize="large" />
              </Link>
            </Grid>
          </Grid>

          <Grid display="flex" justifyContent="center" flexWrap="wrap">
            {events &&
              events &&
              events.map((event) => (
                <Grid className={classes.mainBox} p={2}>
                  <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
                  <div style={{ position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.54)',
                        color: 'white',
                        padding: '10px',
                      }} >
                    </Box>
                    <CardMedia
                        component="img"
                        alt={event.eventName}
                        height="180"
                        image={event.icon}
                    />
                    <div style={{position: "absolute", fontSize:"15px", color: "white",top: 10, left:50, transform: "translateX(-50%)",}}> Offline event</div>
                  </div>
                    
                    <Typography gutterBottom variant="h5" component="div">
                      {event.eventName}
                    </Typography>
                    <CardActions className={classes.pdng} padding={0}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/events/${event.code}/event-register`}
                          >
                            <Button className={classes.btn1} size="small">
                              Register
                            </Button>
                          </Link>
                        </Grid>
                        <Grid item xs={6}>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/event/${event.code}`}
                          >
                            <Button className={classes.btn2} size="small">
                              Know more
                              <IconButton
                                size="large"
                                aria-label="search"
                                color="inherit"
                              >
                                <ArrowForwardIcon className={classes.icon} />
                              </IconButton>
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </>
    )
  }
}

export default Events
