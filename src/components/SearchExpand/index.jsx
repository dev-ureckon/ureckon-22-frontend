import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, FormControl, Input, InputAdornment, TextField } from '@mui/material'

import { makeStyles } from '@mui/styles'
import { useState } from 'react'

import './search.css'

const useStyles = makeStyles({
  icon: {
    color: 'white',
    height: '35px',
    width: '35px',
    marginTop: '0.6rem',
  },
  searchText: {
    color: 'white',
    fontSize: '20px',
    // borderBottom: '2px solid white',
    // transition: 'all 0.2 linear',
    width: '30px',
  },
  // form1: {
  //   overflow: 'hidden',
  //   position: 'relative',
  //   right: '50%',
  //   width: '45px',
  //   '&:active': {
  //     width: '200px',
  //   },
  // },
  // input1: {
  //   width: '0px',
  //   height: '50px',
  //   fontSize: '20px',
  //   lineHeight: '60px',
  //   '&:focus &:active': {
  //     width: '45px',
  //   },
  //   '&:active': {
  //     width: '45px',
  //   },
  // },
})

function SearchExpand({ searchItem }) {
  const classes = useStyles()
  return (
    <>
      <Box>
        <FormControl
          variant="standard"
          className="form1"
          // style={{ display: 'flex', flexDirection: 'row' }}
        >
          <TextField
            variant="standard"
            focused
            className="input1"
            id="input-with-icon-adornment"
            onChange={(e) => searchItem(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
    </>
  )
}

export default SearchExpand
