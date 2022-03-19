import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import NavUreckon from '../../assets/IMGs/navbar-ureckon-logo.png'
import './header.css'
import { useStyles } from './styles'
import DropDown from './dropdown/index.jsx'
import { userLogout } from '../../redux/actions/authActions'
import { fetchCategory } from '../../redux/actions/eventCategoryAction'

const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [events, setEvents] = useState(true)

  const isMobile = useMediaQuery('(min-width:900px)')

  const { userInfo } = useSelector((state) => state.userLogin)
  const { eventCategories } = useSelector((state) => state.eventCategory)

  const logoutHandler = () => {
    dispatch(userLogout())
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="navbar" className={classes.navbar}>
        <Toolbar className={classes.navEle}>
          {isMobile ? (
            <>
              <a href="/" className="nav-font">
                Home
              </a>
              <DropDown eventCategories={eventCategories} />
              <DropDown />
              <img
                src={NavUreckon}
                alt="ureckon-logo"
                style={{ marginLeft: '2rem', cursor: 'pointer' }}
              />
              <a href="/about" className="nav-font">
                About Us
              </a>
              {userInfo && (
                <div className="nav-font" onClick={logoutHandler}>
                  Logout
                </div>
              )}
              <div className="nav-font">News</div>
            </>
          ) : (
            <>
              <img
                src={NavUreckon}
                alt="ureckon-logo"
                style={{ marginLeft: '2rem', cursor: 'pointer' }}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
