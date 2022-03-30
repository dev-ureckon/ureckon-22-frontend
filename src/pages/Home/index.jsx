import { useState, useEffect } from 'react'
import { useStyles } from './home.style'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Transition } from 'react-transition-group'
import { Modal, Grid } from '@mui/material'
import './fonts.css'
import './home.css'
import line1 from '../../assets/SVGs/Union.svg'
import line2 from '../../assets/SVGs/unionTwo.svg'
import { Link, useLocation } from 'react-router-dom'
import { moreFunction, backoptions } from './home'

import { getMainSponsors, getAllNewsfeed, getUserProfile } from '../../redux/apis'
import SocialIcons from '../../components/SocialIcons'

import News from '../../components/announcement/index.jsx'
import './home.animation.css'
import '../../app.css'
import Loader from '../../components/loader/index'

function Home({ open, setOpen, handleOpen, handleClose, inProp, setInProp }) {
  const [fakeLoading, setFakeLoading] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const classes = useStyles()
  const mainSponsors = useSelector((state) => state.sponsor.mainSponsors)

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
    if (userInfo) {
      dispatch(getUserProfile(navigate, location.pathname))
    }
    dispatch(getMainSponsors())
    dispatch(getAllNewsfeed())
  }, [dispatch, userInfo, location, navigate])

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])

  if (fakeLoading) {
    return <Loader />
  } else {
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
                    {/* {userInfo ? (
                      <Link to="/profile" className="menulink">
                        Profile
                        <div>
                          <img className="test1" src={line1} alt="line" />
                        </div>
                      </Link>
                    ) : (
                      <Link to="/login" className="menulink">
                        Login
                        <div>
                          <img className="test0" src={line1} alt="line" />
                        </div>
                      </Link>
                    )} */}
                    <Link to="/about" className="menulink">
                      About
                      <div>
                        <img className="test3" src={line1} alt="line" />
                      </div>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent={{ lg: 'flex-end', xs: 'center' }}
                    lg={6}
                    xs={12}
                    order={{ lg: 2, xs: 5 }}
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
                    className={classes.News}
                  >
                    <div
                      className="menulink"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleOpen()
                        setInProp(true)
                      }}
                    >
                      News
                      <div>
                        <img className="test4" src={line2} alt="line" />
                      </div>
                    </div>
                  </Grid>
                  {/* <Grid
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
                  </Grid> */}
                </Grid>
              </Grid>

              {/* -------------------------------------------------------------------------------- */}

              <Grid item lg={12} className="menupad2" id="moreoptions">
                <Grid className="menufont" container alignItems="center">
                  <Grid item container justifyContent="center" lg={6} xs={12}>
                    <Link to="/team" className="menulink">
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
                    <Link to="/partners" className="menulink">
                      Partners
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

            {mainSponsors.length && (
              <>
                <div className={classes.Sponsor}>Partnered By</div>
                <div className={classes.SponsorImg}>
                  {mainSponsors.map((aMainSponsor) => (
                    <img
                      src={aMainSponsor.sponsorLogo}
                      height={100}
                      width={100}
                      style={{ margin: '0 1.5rem' }}
                      alt="UEM"
                    />
                  ))}
                </div>
              </>
            )}

            {/* ------------------------------------Main Sponser Icons----------------------------------------------------- */}

            {/* ------------------------------------End Main Sponser Icons----------------------------------------------------- */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home
