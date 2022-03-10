import React from 'react'
import {ReactComponent as Logo1} from '../../assets/SVGs/problemstatement.svg';
import {ReactComponent as Logo2} from '../../assets/SVGs/download.svg';
import { Button, Container, Grid } from '@mui/material'
import './EventDetails.css'
import uemkart from '../../assets/IMGs/uemKart.png'
import CallIcon from '@mui/icons-material/Call'
import GroupsIcon from '@mui/icons-material/Groups'
import MailIcon from '@mui/icons-material/Mail'

function EventDetails() {
  return (
    <Container>
      <Grid container>
        <div className="blankaa">URECKON INNOVATION CHALLENGE</div>
      </Grid>
      <Grid container spacing={6}>
        <Grid item lg={8}>
          <Grid className="whitetext" paddingBottom={'25px'}>
            <div className="blankaaTitle">EVENT DESCRIPTION</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eligendi
              libero laborum fugiat quibusdam velit nulla architecto necessitatibus ea
              perspiciatis dicta aliquid! Quibusdam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Similique recusandae laborum, consequatur
              excepturi accusamus vero voluptatem dolore minus odit atque animi,
              consectetur tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Beatae odit harum culpa. Lorem ipsum dolor sit amet.
            </div>
          </Grid>
          <Grid className="whitetext">
            <div className="blankaaTitle">EVENT COORDINATORS</div>
            <div>
              <div>
                <div className="inlineclass">Somsubhra &nbsp; </div>
                <div className="inlineclass">
                  <CallIcon style={{ paddingTop: '10px' }} /> 9876543210 &nbsp;
                  <MailIcon style={{ paddingTop: '10px' }} /> xyz@gmail.com
                </div>
              </div>
              <div>
                <div className="inlineclass">Somsubhra &nbsp; </div>
                <div className="inlineclass">
                  <CallIcon style={{ paddingTop: '10px' }} /> 9876543210 &nbsp;
                  <MailIcon style={{ paddingTop: '10px' }} /> xyz@gmail.com
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <div className="whitetext">
            <img
              className="uembuilding"
              src={uemkart}
              alt="UEM Kart"
              style={{ marginBottom: '20px' }}
            />
            <div className="teseclass">
              <Button
                className="buttonEvents"
                variant="contained"
                style={{ backgroundColor: '#242C6B' }}
              >
                <Logo1 className='logo' />
                <div style={{marginRight: '15px'}}>Register</div>
              </Button>
            </div>
            <div className="teseclass">
              <Button
                className="buttonEvents"
                variant="contained"
                style={{ backgroundColor: '#4B4C4F' }}
              >
                <Logo2 className='logo' />
                <div>Problem Statement</div>
              </Button>
            </div>
            <div>
              <GroupsIcon style={{ paddingTop: '6px', marginRight: '12px' }} />2 to 4
              members per team
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EventDetails
