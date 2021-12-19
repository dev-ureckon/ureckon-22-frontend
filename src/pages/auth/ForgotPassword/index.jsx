import { Container, Grid } from '@mui/material'
import Input from '../../../components/input'
import { ForgotPasswordLogic } from './forgotPassword'

const ForgetPassword = (props) => {
  const { handleChange, formData, loading, handleFormSubmit } = ForgotPasswordLogic()

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10}>
        <Grid item lg={12} md={12}>
          <Input
            width="100%"
            label="Your Email"
            type="email"
            placeholder="John Doe"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button onClick={handleFormSubmit}>Submit</button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ForgetPassword
