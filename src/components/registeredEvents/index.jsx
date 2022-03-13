import line1 from '../../assets/SVGs/Union.svg'
import './registeredEvents.styles.css'
import EventCards from './eventCards/index.jsx'

const RegisteredEvents = ({ handleDisbandTeam, registeredEvents }) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>Registered Events</div>
          <div>
            <img className="line1" src={line1} alt="line" />
          </div>
        </div>
      </div>
      {registeredEvents &&
        registeredEvents.map((event, key) => (
          <EventCards handleDisbandTeam={handleDisbandTeam} key={key} event={event} />
        ))}
    </>
  )
}

export default RegisteredEvents
