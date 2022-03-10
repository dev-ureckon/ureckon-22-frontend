import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid } from '@mui/material'
import SubmitButton from '../../components/SubmitButton/index.jsx'
import Teammates from '../../components/TeamRegister/Teammates/index.jsx'
import './styles.css'
import Form from './../../components/TeamRegister/Form'
import { teamRegisterAction } from '../../redux/actions/eventRegActions'
import { PreviewOutlined } from '@mui/icons-material'

const TeamRegister = () => {
  const dispatch = useDispatch()

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
    dispatch(teamRegisterAction('spyder', formData.team, teamMatesArr))
  }

  return (
    <div>
      <Grid container spacing={'1'}>
        <Grid item xs={12} sm={12} md={6}>
          <div style={{ marginLeft: '10rem' }}>
            <div className="teamReg-header">Register Your Team</div>
            <Form formData={formData} setFormData={setFormData} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
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

export default TeamRegister
