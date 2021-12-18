import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Grid } from '@mui/material'
import Input from '../../../components/input'
import { requestPasswordReset } from '../../../redux/apis'

const ForgetPassword = (props) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  // Handler function for submiting the form data and requesting password reset
  const handleFormSubmit = (event) => {
    dispatch(requestPasswordReset(formData.email))
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10}>
        <Grid item lg={12} md={12}>
          <Input
            width="100%"
            label="Enter Email ID"
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
