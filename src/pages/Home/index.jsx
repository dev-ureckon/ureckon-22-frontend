import { useState, useEffect, forwardRef } from 'react'
import { useStyles } from './home.style'
import { useSelector, useDispatch } from 'react-redux'
import { Transition } from 'react-transition-group'
import { Modal, Grid, Slide, Backdrop } from '@mui/material'
import './fonts.css'
import line1 from '../../assets/SVGs/Union.svg'
import line2 from '../../assets/SVGs/unionTwo.svg'
import { Link } from 'react-router-dom'
import { moreFunction, backoptions } from './home'

import { getMainSponsors, getAllNewsfeed } from '../../redux/apis'
import SocialIcons from '../../components/SocialIcons'

import Announcements from '../../components/announcement/index.jsx'
import './home.animation.css'

function Home({ open, setOpen, handleOpen, handleClose }) {
  const [inProp, setInProp] = useState(false)

  const classes = useStyles()
  const mainSponsors = useSelector((state) => state.sponsor.mainSponsors)
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

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

  // const Transition = forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />
  // })

  useEffect(() => {
    dispatch(getMainSponsors())
    dispatch(getAllNewsfeed())
  }, [dispatch])
  return (
    <div className={classes.root} style={{ marginTop: '-2.4rem' }}>
      {/* Announcement Modal */}
      <Transition in={inProp} timeout={500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
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
              <Announcements open={open} handleClose={handleClose} />
            </Modal>
          </div>
        )}
      </Transition>

      {/* for main container */}
      {/* for Navbar */}
      <Grid>
        <Grid container>
          {/* for Menu */}
          <Grid
            container
            columns={{ lg: 13, sm: 12, xs: 12 }}
            className="menuwithsocial"
            justifyContent={{ md: 'center', xs: 'center', sm: 'center' }}
          >
            <Grid item lg={12} className="menupad" id="mainpage">
              <Grid className="menufont" container alignItems="center">
                <Grid item container justifyContent="center" lg={6} xs={12}>
                  {userInfo ? (
                    <Link to="/Profile" className="menulink">
                      Profile
                      <div>
                        <img className="test1" src={line1} alt="line" />
                      </div>
                    </Link>
                  ) : (
                    <Link to="/Login" className="menulink">
                      Login
                      <div>
                        <img className="test0" src={line1} alt="line" />
                      </div>
                    </Link>
                  )}
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={{ lg: 'flex-end', xs: 'center' }}
                  lg={6}
                  xs={12}
                  order={{ lg: 2, xs: 4 }}
                >
                  <div onClick={moreFunction}>
                    <Link to="" className="menulink">
                      More..
                      <div>
                        <img className="test2" src={line2} alt="line" />
                      </div>
                    </Link>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={{ lg: 'flex-end', xs: 'center' }}
                  lg={6}
                  xs={12}
                  order={{ lg: 3, xs: 2 }}
                  className={classes.events}
                >
                  <Link to="/events" className="menulink">
                    Events
                    <div>
                      <img className="test3" src={line1} alt="line" />
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  lg={6}
                  xs={12}
                  order={{ lg: 4, xs: 3 }}
                  className={classes.announcements}
                >
                  <div
                    className="menulink"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      handleOpen()
                      setInProp(true)
                    }}
                  >
                    Announcements
                    <div>
                      <img className="test4" src={line2} alt="line" />
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  lg={12}
                  xs={12}
                  order={{ lg: 5, xs: 4 }}
                >
                  <Link to="/about" className="menulink">
                    About Us
                    <div>
                      <img className="test5" src={line2} alt="line" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* -------------------------------------------------------------------------------- */}

            <Grid item lg={12} className="menupad2" id="moreoptions">
              <Grid className="menufont" container alignItems="center">
                <Grid item container justifyContent="center" lg={6} xs={12}>
                  <Link to="/teams" className="menulink">
                    Team
                    <div>
                      <img className="test8" src={line1} alt="line" />
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={{ lg: 'flex-end', xs: 'center' }}
                  lg={6}
                  xs={12}
                  order={{ lg: 2, xs: 4 }}
                >
                  <div onClick={backoptions}>
                    <Link to="" className="menulink">
                      Back..
                      <div>
                        <img className="test2" src={line2} alt="line" />
                      </div>
                    </Link>
                  </div>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent={{ lg: 'flex-end', xs: 'center' }}
                  lg={6}
                  xs={12}
                  order={{ lg: 3, xs: 2 }}
                >
                  <Link to="/contact" className="menulink">
                    Contact
                    <div>
                      <img className="test7" src={line1} alt="line" />
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="center"
                  lg={6}
                  xs={12}
                  order={{ lg: 4, xs: 3 }}
                >
                  <Link to="/sponsers" className="menulink">
                    Sponsors
                    <div>
                      <img className="test6" src={line2} alt="line" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* ------------------------------------Social Icons----------------------------------------------------- */}

            <SocialIcons />
            {/* ------------------------------------End of Social Icons----------------------------------------------------- */}
          </Grid>
          {/* ------------------------------------Main Sponser Icons----------------------------------------------------- */}
          {mainSponsors.length && (
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              sx={{ paddingX: 31 }}
              flexWrap="nowrap"
            >
              <Grid item alignSelf="center">
                <div className="Sponsor">Partnered By</div>
              </Grid>
              {mainSponsors.map((aMainSponsor) => (
                <Grid item className="headimgcontain">
                  <img
                    src={aMainSponsor.sponsorLogo}
                    height={100}
                    width={100}
                    alt="UEM"
                  />
                </Grid>
              ))}
            </Grid>
          )}
          {/* ------------------------------------End Main Sponser Icons----------------------------------------------------- */}
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
