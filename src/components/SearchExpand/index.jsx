import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  Button,
  IconButton,
  CardActions,
  Grid,
  Container,
  Box,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  icon: {
    color: 'white',
    height: '40px',
    width: '40px',
  },
  searchText: {
    color: 'white',
    fontSize: '20px',
    borderBottom: '2px solid white',
    transition: 'all 0.2 linear',
  },
})

function SearchExpand() {
  const classes = useStyles()
  return (
    <div>
      <IconButton size="large" aria-label="search" color="inherit">
        <input type="text" className={classes.searchText} placeholder="Search here" />
        <SearchIcon className={classes.icon} />
      </IconButton>
    </div>
  )
}

export default SearchExpand
