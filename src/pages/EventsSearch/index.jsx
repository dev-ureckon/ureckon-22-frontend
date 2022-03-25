import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container } from '@mui/material'
import './eventsSearch.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { Box } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import SearchExpand from '../../components/SearchExpand'
import { useStyles } from './eventSearch.style'
import { Link as a } from 'react-router-dom'
import { EventSearchLogic } from './EventsSearch'
import Loader from '../../components/loader'

const EventsSearch = () => {
  const classes = useStyles()
  const { eventsList, setSearchedEventName, fakeLoading } = EventSearchLogic()

  if (fakeLoading) {
    return <Loader />
  } else {
    return (
      <>
        <Container>
          <Grid container>
            <Grid item flexGrow={1} m={2}>
              <h1 className="headingStyle">Searched EVENTS</h1>
            </Grid>
            <Grid item md={2}>
              <SearchExpand setSearchedEventName={setSearchedEventName} />
            </Grid>
          </Grid>

          <Grid display="flex" justifyContent="center" flexWrap="wrap">
            {eventsList ? (
              eventsList &&
              eventsList.map((event) => (
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
                          bgcolor: 'rgba(0, 0, 0, 0.72)',
                          color: 'white',
                          padding: '10px',
                        }}
                      ></Box>
                      <CardMedia
                        component="img"
                        alt={event.eventName}
                        height="180"
                        image={event.icon}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          fontSize: '14px',
                          color: 'white',
                          top: 10,
                          left: 10,
                        }}
                      >
                        {event.isOnline ? 'Online event' : 'Offline Event'}
                      </div>
                      <Typography
                        style={{
                          position: 'absolute',
                          color: 'white',
                          bottom: 0,
                          left: 10,
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {event.eventName}
                      </Typography>
                    </div>

                    <CardActions
                      style={{
                        padding: '0',
                      }}
                      // className={classes.pdng}
                      padding={0}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <a
                            style={{ textDecoration: 'none' }}
                            href={event.registrationLink}
                            target="_blank"
                          >
                            <Button
                              style={{
                                fontSize: 16,
                                backgroundColor: '#2A3B97',
                                width: 184,
                                height: 56,
                                padding: 12,
                                borderRadius: '0',
                                '&:hover': {
                                  backgroundColor: '#0b053a',
                                },
                              }}
                              // className={classes.btn1}
                              size="small"
                            >
                              Register
                            </Button>
                          </a>
                        </Grid>
                        <Grid item xs={6}>
                          <a
                            style={{ textDecoration: 'none' }}
                            to={`/event/${event.code}`}
                          >
                            <Button
                              style={{
                                backgroundColor: '#4B4C4F',
                                fontSize: 16,
                                width: 184,
                                height: 56,
                                padding: 12,
                                borderRadius: '0',
                                '&:hover': {
                                  backgroundColor: '#1f1f1f',
                                },
                              }}
                              // className={classes.btn2}
                              size="small"
                            >
                              Know more
                              <IconButton
                                size="large"
                                aria-label="search"
                                color="inherit"
                              >
                                <ArrowForwardIcon className={classes.icon} />
                              </IconButton>
                            </Button>
                          </a>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Container>
                <Typography
                  textAlign={'center'}
                  style={{ padding: '4rem', fontSize: '1.6rem' }}
                  variant="h3"
                >
                  Type Something to search
                </Typography>
              </Container>
            )}
          </Grid>
        </Container>
      </>
    )
  }
}

export default EventsSearch
