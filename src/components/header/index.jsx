import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Transition } from 'react-transition-group'
import { Modal } from '@mui/material'
import NavUreckon from '../../assets/IMGs/navbar-ureckon-logo.png'
import Hamburger from '../../assets/IMGs/hamburger.png'
import CloseIcon from '../../assets/IMGs/close.png'
import './header.css'
import { useStyles } from './styles'
import DropDown from './dropdown/index.jsx'
import { userLogout } from '../../redux/actions/authActions'
import { fetchCategory } from '../../redux/actions/eventCategoryAction'
import News from '../announcement/index.jsx'

const Header = ({
  open,
  setOpen,
  close,
  handleOpen,
  handleClose,
  inProp,
  setInProp,
  drawer,
  setDrawer,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [events, setEvents] = useState(true)

  const isMobile = useMediaQuery('(max-width:900px)')

  const { userInfo } = useSelector((state) => state.userLogin)
  const { eventCategories } = useSelector((state) => state.eventCategory)

  const logoutHandler = () => {
    dispatch(userLogout())
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  const duration = 300

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <>
      <Transition in={inProp} timeout={500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="modal"
          >
            <Modal
              open={open}
              onClose={handleClose}
              className={classes.modal}
              // closeAfterTransition
              // BackdropComponent={Backdrop}
              // BackdropProps={{
              //   timeout: 500,
              // }}
            >
              <News open={open} handleClose={handleClose} />
            </Modal>
          </div>
        )}
      </Transition>
      <Box className={classes.root}>
        <AppBar position="static" color="navbar" className={classes.navbar}>
          <Toolbar className={isMobile ? classes.navEleMob : classes.navEle}>
            {!isMobile ? (
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
                <a
                  href="/partners"
                  className="nav-font"
                  style={{ marginLeft: '20px', marginRight: '20px' }}
                >
                  Partners
                </a>
                {userInfo && (
                  <div className="nav-font" onClick={logoutHandler}>
                    Logout
                  </div>
                )}
                <div
                  className="nav-font"
                  onClick={() => {
                    handleOpen()
                    setInProp(true)
                  }}
                >
                  News
                </div>
              </>
            ) : (
              <>
                {drawer ? (
                  <img
                    src={CloseIcon}
                    alt="menu"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setDrawer(false)}
                  />
                ) : (
                  <img
                    src={Hamburger}
                    alt="menu"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setDrawer(true)}
                  />
                )}

                <img src={NavUreckon} alt="ureckon-logo" style={{ cursor: 'pointer' }} />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
