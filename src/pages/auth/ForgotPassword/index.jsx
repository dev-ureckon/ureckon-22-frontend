import { Container, Typography, Button } from '@mui/material'
import { useStyles } from '../auth.style.js'
import SubmitButton from '../../../components/SubmitButton'

import Input from '../../../components/input'
import { ForgotPasswordLogic } from './forgotPassword'

const ForgotPassword = () => {
  const classes = useStyles()
  const { handleChange, formData, handleFormSubmit } = ForgotPasswordLogic()

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e)
      }}
    >
      <Container maxWidth="sm">
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
        <Typography align="center">
          <Button
            type="submit"
            variant="text"
            color="secondary"
            className={classes.submitButtonLogin}
          >
            <SubmitButton label="Submit" />
          </Button>
        </Typography>
      </Container>
    </form>
  )
}

export default ForgotPassword
