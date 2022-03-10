import React from 'react'
import { ReactComponent as Logo1 } from '../../assets/SVGs/problemstatement.svg'
import { ReactComponent as Logo2 } from '../../assets/SVGs/download.svg'
import { Button, Container, Grid } from '@mui/material'
import './EventDetails.css'
import CallIcon from '@mui/icons-material/Call'
import GroupsIcon from '@mui/icons-material/Groups'
import MailIcon from '@mui/icons-material/Mail'
import { EventDetailsLogic } from './eventDetails'

function EventDetails() {
  const { eventDetails } = EventDetailsLogic()

  return (
    <Container>
      <Grid container>
        <div className="blankaa">{eventDetails && eventDetails.event && eventDetails.event.eventName}</div>
      </Grid>
      <Grid container spacing={6}>
        <Grid item lg={8}>
          <Grid className="whitetext" paddingBottom={'25px'}>
            <div className="blankaaTitle">EVENT DESCRIPTION</div>
            <div>{eventDetails && eventDetails.event && eventDetails.event.description}</div>
          </Grid>
          <Grid className="whitetext">
            <div className="blankaaTitle">EVENT COORDINATORS</div>
            {eventDetails && eventDetails.event && eventDetails.event.coordinators.map((coordinator) => (
              <div>
                <div className="inlineclass">{coordinator.name} &nbsp; </div>
                <div className="inlineclass">
                  <CallIcon style={{ paddingTop: '10px' }} /> {coordinator.phone} &nbsp;
                  <MailIcon style={{ paddingTop: '10px' }} /> {coordinator.email}
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <div className="whitetext">
            <img
              className="uembuilding"
              src={eventDetails && eventDetails.event && eventDetails.event.icon}
              alt="UEM Kart"
              style={{ marginBottom: '20px' }}
            />
            <div className="teseclass">
              <Button
                className="buttonEvents"
                variant="contained"
                style={{ backgroundColor: '#242C6B' }}
              >
                <Logo1 className="logo" />
                <div style={{ marginRight: '15px' }}>Register</div>
              </Button>
            </div>
            <div className="teseclass">
              <a target='_blank' href={eventDetails && eventDetails.event && eventDetails.event.problemStatement}>

                <Button
                  className="buttonEvents"
                  variant="contained"
                  style={{ backgroundColor: '#4B4C4F' }}
                >
                  <Logo2 className="logo" />
                  <div>Problem Statement</div>
                </Button>
              </a>
            </div>
            <div>
              <GroupsIcon style={{ paddingTop: '6px', marginRight: '12px' }} />
              {eventDetails && eventDetails.event && eventDetails.event.minParticipants} to{' '}
              {eventDetails && eventDetails.event && eventDetails.event.maxParticipants}
              members per team
            </div>
          </div>
        </Grid>
      </Grid>
    </Container >
  )
}

export default EventDetails
