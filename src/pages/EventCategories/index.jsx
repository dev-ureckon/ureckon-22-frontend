import { Container, Grid, Paper, Typography } from '@mui/material'
import { useStyles } from './eventCategories.style'

import SearchIcon from '@mui/icons-material/Search'
import { EventCategoriesLogic } from './EventCategories'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader'

const EventCategories = () => {
  const classes = useStyles()
  const { categories, loading, fakeLoading, setFakeLoading } = EventCategoriesLogic()

  if (loading) {
    return <Loader />
  } else {
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
            <Link to={`/events/search`}>
              <SearchIcon style={{ color: '#fff' }} fontSize="large" />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing="40">
          {categories &&
            categories.map((category) => (
              <Grid item md={3} xs={12}>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/events/category-slug/${category.slug}`}
                >
                  <Paper
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '36px',
                      position: 'static',
                      height: '252px',
                      left: '0px',
                      top: '0px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '3px solid #0DB3B3',
                      borderRadius: '5px',
                      flex: 'none',
                      order: '0',
                      flexGrow: '0',
                    }}
                    // className={classes.categoryPaper}
                  >
                    <img
                      src={category.icon}
                      style={{ width: '100px', marginBottom: '15px' }}
                      alt="event Category"
                    />
                    <Typography
                      textAlign={'center'}
                      variant="h4"
                      style={{ color: '#fff' }}
                    >
                      {category.categoryName}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    )
  }
}

export default EventCategories
