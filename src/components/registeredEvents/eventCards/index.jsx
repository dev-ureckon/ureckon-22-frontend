import { Button } from '@mui/material'
import './eventCards.style.css'
import SubmitButton from '../../SubmitButton'
import { useStyles } from './eventCards.style.js'

const EventCards = ({ event, handleDisbandTeam }) => {
  const classes = useStyles()

  return (
    <div className="card-container">
      <div className="card">
        <div className="event">
          <img src={event.event.icon} alt="event-logo" style={{ width: '30%' }}></img>
          <div className="event-details">
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>
              {event.event.eventName}
            </div>
            <div style={{ color: 'white' }}>
              <span style={{ fontWeight: 'bold' }}>Lead:</span> {event.leader.name}
            </div>
            <div style={{ color: 'white' }}>
              <span style={{ fontWeight: 'bold' }}>Team:</span>{' '}
              {event && event.teamMembers.map((member) => member.name).join(', ')}
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button type="submit" variant="text" color="secondary" className="eventButton">
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
      </div>
    </div>
  )
}

export default EventCards
