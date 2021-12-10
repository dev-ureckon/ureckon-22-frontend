import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Container, Grid, Link } from '@mui/material'
import Input from '../../components/input'


const Register = (props) => {
  let history = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={10}>
        <Grid item lg={6} md={12}>
          <Input
            width="100%"
            label="Name"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item lg={6} md={12}>
          <Input
            width="100%"
            label="Email"
            placeholder="John Doe"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>

      <Grid>
         <Button onClick={()=> {navigate("/forgetPassword");
        }}>Forget password?</Button>
      </Grid>
     
    </Container>
  )
}

export default Register
