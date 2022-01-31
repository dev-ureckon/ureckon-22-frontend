import React from 'react'
import './form.css'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import Input from '../../../components/input'
import Dropdown from '../../../components/Dropdown'
import SubmitButton from '../../../components/SubmitButton'

const Form = () => {
  return (
    <>
    <div>
    <Container>
    <form style={{ paddingLeft: '26px' }}>
    <Grid item lg={6} md={6} sm={12} xs={12}>
       <Input
       
        width="100%"
        label="Team Name"
        placeholder="Stephen Strange"
        name="name"
       // value={formData.name}
        //onChange={(e) => handleChange(e)}
       />
       <div style={{height:50}}/>

       
       <Input
        width="100%"
        label="Team Leader"
        
        placeholder="Kaustav Royyy"
        name="name"
       // value={formData.name}
        //onChange={(e) => handleChange(e)}
       />
    </Grid>
    

      </form>
    </Container>
    </div>
    </>
  )

}

export default Form
