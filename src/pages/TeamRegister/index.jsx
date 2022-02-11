import { Container } from '@mui/material'
import Teammates from '../../components/TeamRegister/Teammates/index.jsx'
import Input from './../../components/input'
import './teamregister.css'
import Form from './../../components/TeamRegister/Form'

const TeamRegister = () => {
  return (
    <div className="teamReg-container">
      <div className="teamReg-form-wrapper">
        <div className="teamReg-header">Register Your Team</div>
        <Form />
      </div>
      <Teammates />
    </div>
  )
}

export default TeamRegister
