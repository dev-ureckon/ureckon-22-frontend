import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import './about.css'
import uemk from '../../assets/IMGs/uemk_image.png'
import uemkart from '../../assets/IMGs/uemKart.png'
import line1 from '../../assets/SVGs/Union.svg'
import Loader from '../../components/loader/index'

function About() {
  const [fakeLoading, setFakeLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false)
    }, 2000)
  }, [])

  if (fakeLoading) {
    return <Loader />
  } else {
    return (
      <Container>
        <Grid container spacing={4} alignItems={'center'}>
          <Grid item lg={8} sm={8}>
            <div className="blankaa">
              About UEM Kolkata
              <img className="underlines" src={line1} alt="line" />
            </div>
            <div className="whitetext">
              University Of Engineering &amp; Management, Kolkata was established in the
              year 2014 by Act No 25 of 2014 of Govt of West Bengal and approved by AICTE.
              The institute has stood one out of the top 10 institutes of India including
              all IITs and all NITs of the country in the NPTEL program ranked by IIT
              Kharagpur and IIT Chennai. It is one of the most premier institutes of
              Eastern India.
            </div>
          </Grid>
          <Grid item className="buildingcontainer" lg={4} sm={4}>
            <div>
              <img className="uembuilding" src={uemk} alt="UEM building" />
            </div>
          </Grid>
          <Grid
            item
            className="buildingcontainer"
            lg={4}
            sm={4}
            xl={5}
            order={{ sm: 3, lg: 3, xs: 4 }}
          >
            <div>
              <img className="uembuilding" src={uemkart} alt="UEM building" />
            </div>
          </Grid>
          <Grid item lg={8} sm={8} xl={7} order={{ sm: 4, lg: 4, xs: 3 }}>
            <div className="blankaa">
              About Ureckon
              <img className="underlines" src={line1} alt="line" />
            </div>
            <div className="whitetext">
              Every year it gets Bigger and Better, with more exciting events as well as
              exhibitions. Students and tech enthusiasts from various parts of the country
              are wholeheartedly invited to be a part of this budding Techno-Management
              fest, not only to showcase their talents but also to consider it as a field
              to learn something new. URECKON in association with ISRO exhibits several
              application based robots and also hosts several events based on Robotics,
              Coding, B-plan, Quizzes, Guest lectures, Tech talks and exciting gaming
              events with lucrative prizes to be won.
            </div>
          </Grid>
        </Grid>
        {/* Important! Always set the container height explicitly */}
        <div
          style={{
            height: '300px',
            width: '100%',
            borderRadius: '8px',
            marginTop: '24px',
          }}
        >
          <div className="google-map-code">
            <iframe
              title="UEM Kolkata"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.512695709607!2d88.48771271492477!3d22.559920185189334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sUniversity%20of%20Engineering%20%26%20Management%20(UEM)%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1647544363590!5m2!1sen!2sin"
              width="100%"
              height="300"
              frameborder="0"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </Container>
    )
  }
}

export default About
