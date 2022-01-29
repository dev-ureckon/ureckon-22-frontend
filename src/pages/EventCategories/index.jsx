import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './eventCategories.style'

import SearchIcon from '@mui/icons-material/Search'
import { EventCategoriesLogic } from './EventCategories'
import { Link } from 'react-router-dom'

const EventCategories = () => {
  const classes = useStyles()
  const { categories } = EventCategoriesLogic()

  return (
    <Container>
      <Grid container justifyContent={'space-between'} style={{ marginBottom: '30px' }}>
        <Grid item md={4}>
          <Typography variant="h2">Event Categories</Typography>
        </Grid>
        <Grid
          item
          md={2}
          alignSelf={'center'}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          {categories && categories[0] && (
            <Link to={`/events/${categories[0].categoryName}`}>
              <SearchIcon style={{ color: '#fff' }} fontSize="large" />
            </Link>
          )}
        </Grid>
      </Grid>
      <Grid container spacing="40">
        {categories &&
          categories.map((category) => (
            <Grid item md={3} xs={12}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/event/${category.categoryName}`}
              >
                <Paper className={classes.categoryPaper}>
                  <img
                    src={category.icon}
                    style={{ width: '100px', marginBottom: '15px' }}
                    alt="event Category"
                  />
                  <Typography textAlign={'center'} variant="h4" style={{ color: '#fff' }}>
                    {`${category.categoryName} Event`}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default EventCategories
