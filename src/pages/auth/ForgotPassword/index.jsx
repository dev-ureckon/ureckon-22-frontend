import { Container, Grid, Typography, Button } from '@mui/material'
import { useStyles } from '../auth.style.js'
import SubmitButton from "../../../components/SubmitButton"

import Input from '../../../components/input'
import { ForgotPasswordLogic } from './forgotPassword'

const ForgotPassword = (props) => {
  const classes = useStyles()
  const { handleChange, formData, loading, handleFormSubmit } = ForgotPasswordLogic()

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e)
      }}
    >
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
            <Typography align="center">
              <Button
                type="submit"
                variant="text"
                color="secondary"
                className={classes.submitButtonLogin}
              >
                <SubmitButton label={'Submit'} />
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </form>
  )
}

export default ForgotPassword
