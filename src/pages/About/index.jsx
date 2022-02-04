import React from 'react'
import { Container, Grid } from '@mui/material'
import './about.css'
import uemk from '../../assets/IMGs/uemk_image.png'
import uemkart from '../../assets/IMGs/uemKart.png'
import line1 from '../../assets/SVGs/Union.svg'

function About() {
  return (
    <Container>
      <Grid container spacing ={4} alignItems={'center'}>
          <Grid item lg={8} sm={8}>
            <div className="blankaa">
              About UEM Kolkata
              <img className="underlines" src={line1} alt="line" />
            </div>
            <div className="whitetext">
              University Of Engineering &amp; Management, Kolkata was established in the
              year 2014 by Act No 25 of 2014 of Govt of West Bengal and approved by
              AICTE. The institute has stood one out of the top 10 institutes of India
              including all IITs and all NITs of the country in the NPTEL program ranked
              by IIT Kharagpur and IIT Chennai. It is one of the most premier institutes
              of Eastern India.
            </div>
          </Grid>
          <Grid item className="buildingcontainer" lg={4} sm={4}>
            <div>
              <img className="uembuilding" src={uemk} alt="UEM building" />
            </div>
          </Grid>
          <Grid item className="buildingcontainer" lg={4} sm={4} order={{sm:3, lg:3, xs:4}}>
            <div>
              <img className="uembuilding" src={uemkart} alt="UEM building" />
            </div>
          </Grid>
          <Grid item lg={8} sm={8} order={{sm:4, lg:4, xs:3}}>
            <div className="blankaa">
              About Ureckon
              <img className="underlines" src={line1} alt="line" />
            </div>
            <div className="whitetext">
              Every year it gets Bigger and Better, with more exciting events as well as
              exhibitions. Students and tech enthusiasts from various parts of the
              country are wholeheartedly invited to be a part of this budding
              Techno-Management fest, not only to showcase their talents but also to
              consider it as a field to learn something new. URECKON in association with
              ISRO exhibits several application based robots and also hosts several
              events based on Robotics, Coding, B-plan, Quizzes, Guest lectures, Tech
              talks and exciting gaming events with lucrative prizes to be won.
            </div>
          </Grid>

      </Grid>
    </Container>
  )
}

export default About
