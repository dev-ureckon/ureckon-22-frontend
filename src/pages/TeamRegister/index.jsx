import { Button, Grid } from '@mui/material'
import SubmitButton from '../../components/SubmitButton/index.jsx'
import Teammates from '../../components/TeamRegister/Teammates/index.jsx'
import './styles.css'
import Form from './../../components/TeamRegister/Form'

const TeamRegister = () => {
  return (
    <div>
      {/* <div className="teamReg-container">
        <div className="teamReg-form-wrapper">
          <div className="teamReg-header">Register Your Team</div>
          <Form />
        </div>
        <Teammates />
      </div> */}
      <Grid container spacing={'1'}>
        <Grid item xs={12} sm={12} md={6}>
          <div style={{ marginLeft: '10rem' }}>
            <div className="teamReg-header">Register Your Team</div>
            <Form />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Teammates />
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
        <Button>
          <SubmitButton label={'Register'} />
        </Button>
      </div>
    </div>
  )
}

export default TeamRegister
