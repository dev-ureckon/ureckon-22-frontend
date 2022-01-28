import { Button, Grid, Container } from '@mui/material'
import './eventCards.style.css'
import SubmitButton from '../../SubmitButton'
import { useStyles } from './eventCards.style.js'

const EventCards = ({ event, handleDisbandTeam }) => {
  const classes = useStyles()

  return (
    <Container className="card-container">
      <Grid className="card">
        <Grid item lg={3} md={3} sm={4} xs={8} xl={5}>
          <img src={event.event.icon} alt="event-logo" className="eventImg"></img>
        </Grid>

        <Grid item className="event-details" lg={5} md={5} sm={4} xs={12}>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>
            {event.event.eventName}
          </div>
          <div style={{ color: 'white' }}>
            <span style={{ fontWeight: 'bold' }}>Team Name:</span> {event.teamName}
          </div>
          <div style={{ color: 'white' }}>
            <span style={{ fontWeight: 'bold' }}>Lead:</span> {event.leader.name}
          </div>
          <div style={{ color: 'white' }}>
            <span style={{ fontWeight: 'bold' }}>Team:</span>{' '}
            {event && event.teamMembers.length
              ? event.teamMembers.map((member) => member.name).join(', ')
              : 'None'}
          </div>
        </Grid>
        <Grid item>
          <div className="btn-wrapper">
            <Button
              type="submit"
              variant="text"
              color="secondary"
              className="eventButton"
            >
              <SubmitButton label={'View Event'} />
            </Button>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              className={classes.disbandButton}
              onClick={() => handleDisbandTeam(event._id)}
            >
              Disband team
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EventCards
