import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import Input from '../../../components/input'
import Dropdown from '../../../components/Dropdown'
import SubmitButton from '../../../components/SubmitButton'
import { teamRegisterAction } from '../../../redux/actions/eventRegActions'

const Form = ({ formData, setFormData }) => {

  const dispatch = useDispatch()

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
          <Grid item md={6} sm={12} xs={12}>
            <Input
              width="100%"
              label="Team Name"
              placeholder="Enter Team Name"
              name="team"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </Grid>

          <Grid item md={6} sm={12} xs={12} style={{ marginTop: '3rem' }}>
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
