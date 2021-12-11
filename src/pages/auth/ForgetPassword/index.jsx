import { useState } from 'react'
import { Container, Grid } from '@mui/material'
import Input from '../../../components/input'

const ForgetPassword = (props) => {
  const [formData, setFormData] = useState({
    email: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.email]: e.target.value }))
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default ForgetPassword
