import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import SubmitButton from '../../components/SubmitButton/index.jsx'
import Teammates from '../../components/TeamRegister/Teammates/index.jsx'
import './styles.css'
import Form from '../../components/TeamRegister/Form'
import { teamRegisterAction } from '../../redux/actions/eventRegActions'
import { PreviewOutlined } from '@mui/icons-material'

const EventRegister = () => {
  const dispatch = useDispatch()

  const { eventCode } = useParams()

  const { loading, error, isAuthenticated, userInfo } = useSelector(
    (state) => state.userLogin
  )

  const [teamMatesArr, setTeamMatesArr] = useState([])
  const [formData, setFormData] = useState({
    team: '',
    leader: userInfo?.name,
  })

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(teamRegisterAction(eventCode, formData.team, teamMatesArr))
  }

  return (
    <div>
      <Grid container spacing={'1'} className="event-reg-container">
        <Grid item xs={12} sm={12} md={6} className="form-container">
          <div className="teamReg-header">Register Your Team</div>
          <Form formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} className="teammates-container">
          <Teammates teamMatesArr={teamMatesArr} setTeamMatesArr={setTeamMatesArr} />
        </Grid>
      </Grid>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4rem',
        }}
      >
        <Button onClick={submitHandler}>
          <SubmitButton label={'Register'} />
        </Button>
      </div>
    </div>
  )
}

export default EventRegister
