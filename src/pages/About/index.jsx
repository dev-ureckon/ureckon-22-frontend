import React from 'react'
import { Container, containerClasses, Grid } from '@mui/material'
import './about.css'
import uemk from '../../assets/IMGs/uemk_image.png'
import Button from '@mui/material/Button'
import line1 from '../../assets/SVGs/Union.svg'

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
}

function About() {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item lg={6} md={12} sm={12}>
          <Grid container>
            <Grid lg={12}>
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
            <Grid lg={12}>
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
        </Grid>
        <Grid item>
          <div>
            <img src={uemk} alt="UEM building" />
          </div>
        </Grid>
      </Grid>
      <Grid paddingTop={'20px'}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="contactbutton"
            variant="contained"
            style={{
              borderRadius: '5px',
              backgroundColor: '#222222',
              width: '228px',
              height: '49px',
              color: 'white',
            }}
          >
            Contact Us
          </Button>
        </div>
      </Grid>
    </Container>
  )
}

export default About
