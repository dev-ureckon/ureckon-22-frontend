import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container } from '@mui/material'
import './events.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import SearchExpand from '../../components/SearchExpand'
import { useStyles } from './eventList.style'
import { EventListLogic } from './eventList'
import { Link } from 'react-router-dom'

const Events = () => {
  const classes = useStyles()
  const { events, eventCategorySlug, makeHeading } = EventListLogic()

  return (
    <>
      <Container>
        <Grid display="flex">
          <Grid flexGrow={1} m={1.7}>
            <h1 className="headingStyle">{makeHeading(eventCategorySlug)} EVENTS</h1>
          </Grid>
          <SearchExpand></SearchExpand>
        </Grid>

        <Grid display="flex" justifyContent="center" flexWrap="wrap">

          {events && events && events.map((event) => (
            <Grid className={classes.mainBox} p={2}>
              <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt={event.eventName} height="180" image={event.icon} />
                <Typography gutterBottom variant="h5" component="div">
                  {event.eventName}
                </Typography>
                <CardActions className={classes.pdng} padding={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button className={classes.btn1} size="small">
                        Register
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Link to={`/event/${event.code}`}>
                        <Button className={classes.btn2} size="small">
                          Know more
                          <IconButton size="large" aria-label="search" color="inherit">
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

export default Events
