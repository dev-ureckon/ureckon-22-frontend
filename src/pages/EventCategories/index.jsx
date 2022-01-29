import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './eventCategories.style'

import eventCategorySample from '../../assets/SVGs/eventCategorySample.svg'
import { EventCategoriesLogic } from './EventCategories'
import { Link } from 'react-router-dom'

const EventCategories = () => {
  const classes = useStyles()
  const { categories } = EventCategoriesLogic();

  console.log(categories);

  return (
    <Container>
      <Typography variant="h2" style={{ marginBottom: "20px" }}>Event Categories</Typography>
      <Grid container spacing='40'>
        {categories && categories.map((category) => (
          <Grid item md={3} xs={12}>
            <Link style={{ textDecoration: 'none' }} to={`/event/${category._id}`}>
              <Paper className={classes.categoryPaper}>
                <img src={category.icon} style={{ width: '100px', marginBottom: "15px" }} alt="event Category" />
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
