import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import { Modal } from '@mui/material'
import line1 from '../../../assets/SVGs/Union.svg'
import line2 from '../../../assets/SVGs/unionTwo.svg'
import { useStyles } from '../../../pages/Home/home.style'
import News from '../../announcement/index.jsx'
import './drawer.css'

const Drawer = (open, setOpen, close, handleOpen, handleClose, inProp, setInProp) => {
  const classes = useStyles()

  const [modal, setModal] = useState(false)

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
      {modal && (
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
      )}
      <div className="drawer-container">
        <a href="/" className="menufont">
          Home
        </a>
        <a href="/events" className="menufont">
          Events
        </a>
        {/* <img src={line1} alt="line" style={{ marginTop: '-2rem', marginLeft: '2rem' }} /> */}
        <a href="/about" className="menufont">
          About Us
        </a>
        {/* <img src={line2} alt="line" style={{ marginTop: '-2rem', marginRight: '7rem' }} /> */}
        {/* <div className="menufont" onClick={() => setModal(true)}>
          News
        </div> */}
        {/* <img src={line2} alt="line" style={{ marginTop: '-2rem', marginRight: '1rem' }} /> */}
        <a href="/team" className="menufont">
          Team
        </a>
        {/* <img src={line1} alt="line" style={{ marginTop: '-2rem', marginLeft: '1rem' }} /> */}
        <a href="/partners" className="menufont">
          Partners
        </a>
        {/* <img src={line1} alt="line" style={{ marginTop: '-2rem', marginLeft: '7rem' }} /> */}
        <a href="/contact" className="menufont">
          Contact Us
        </a>
        {/* <img
          src={line2}
          alt="line"
          style={{ marginTop: '-2rem', marginRight: '12rem' }}
        /> */}
      </div>
    </>
  )
}

export default Drawer
