import { Container, Button } from '@mui/material'
import SubmitButton from '../../components/SubmitButton/index.jsx'
import Teammates from '../../components/TeamRegister/Teammates/index.jsx'
import Input from './../../components/input'
import './teamregister.css'
import Form from './../../components/TeamRegister/Form'

const TeamRegister = () => {
  return (
    <>
      <div className="teamReg-container">
        <div className="teamReg-form-wrapper">
          <div className="teamReg-header">Register Your Team</div>
          <Form />
        </div>
        <Teammates />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button>
          <SubmitButton label={'Register'} />
        </Button>
      </div>
    </>
  )
}

export default TeamRegister
