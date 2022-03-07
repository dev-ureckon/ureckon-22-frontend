import { useState, useEffect } from 'react'
import { TextField, InputAdornment, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import Userlist from './Userlist'
import './styles.css'
import { userSearchAction } from '../../../redux/actions/userSearchActions'

const Teammates = () => {
  const dispatch = useDispatch()

  const { loading, userInfo, error } = useSelector((state) => state.userSearch)

  const [wordEntered, setWordEntered] = useState('')

  useEffect(() => {
    dispatch(userSearchAction(wordEntered))
  }, [dispatch, wordEntered])

  // const [filteredData, setFilteredData] = useState([])

  const clearInput = () => {
    // setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="teammates-wrapper">
      <div className="search-wrapper">
        <Grid container>
          <Grid item xs={12} sm={12} md={7} className="add-teammates-header">
            Add Teammates
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField
              placeholder="Enter Ureckon-ID"
              variant="standard"
              color="searchbar"
              value={wordEntered}
              onChange={(e) => setWordEntered(e.target.value)}
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="searchbar" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>

      {userInfo && <Userlist userInfo={userInfo} />}
    </div>
  )
}

export default Teammates
