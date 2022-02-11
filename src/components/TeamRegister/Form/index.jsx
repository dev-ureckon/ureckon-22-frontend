import { useState } from 'react'
import './styles.css'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import Input from '../../../components/input'
import Dropdown from '../../../components/Dropdown'
import SubmitButton from '../../../components/SubmitButton'

const Form = () => {
  const [formData, setFormData] = useState({
    team: '',
    leader: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <div>
        <form>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Input
              width="100%"
              label="Team Name"
              placeholder="Enter Team Name"
              name="team"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <div style={{ height: 50 }} />

            <Input
              width="100%"
              label="Team Leader"
              placeholder="Enter Leader Name"
              name="leader"
              value={formData.leader}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
        </form>
      </div>
    </>
  )
}

export default Form
