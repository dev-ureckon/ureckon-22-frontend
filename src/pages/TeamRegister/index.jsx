import './teamregister.css'
import './../../components/TeamRegister/Form'
import { Button, Container, Grid, LinearProgress, Typography } from '@mui/material'
import Input from './../../components/input'
import Form from './../../components/TeamRegister/Form'

const TeamRegister = () => {
  return (
    <>
    
    <div className="heading">
      <Container>
      <h2>Register Your Team</h2>
      </Container>
     
    </div>
    <Form/>
    
    </>
  )
}

export default TeamRegister
