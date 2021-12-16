import React from 'react'
import { useStyles } from './contact.style'
import { useInputState } from '../../hooks/useInputState'
import { ContactLogic, createNewContact } from './contact'
import { Container, Grid } from '@mui/material'
import Input from '../../components/input'
import Button from '../../components/button'

function Contact() {
  // State for storing contact form data
  // TODO: Inserting the below state and handleChange values for the different form inputs
  const [name, handleNameChange, resetName] = useInputState('ABC XYZ')
  const [email, handleEmailChange, resetEmail] = useInputState('abc@gmail.com')
  const [subject, handleSubjectChange, resetSubject] = useInputState(
    'This is a sample contact'
  )
  const [message, handleMessageChange, resetMessage] = useInputState(
    'This is a sample message'
  )

  // Contact form submit handler
  // TODO: Inserting the below handler after completion of UI
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    if (name && email && subject && message) {
      const { success, msg } = await createNewContact({
        name,
        email,
        subject,
        message,
      })
      if (success) {
        resetName()
        resetEmail()
        resetSubject()
        resetMessage()
      }
    }
  }

  const { foo } = ContactLogic()
  console.log(foo)
  const classes = useStyles()

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit(e)
        }}
      >
        <Grid container spacing={10}>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Email"
              placeholder="abc@gmail.com"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Subject"
              placeholder="What's your question?"
              value={subject}
              onChange={(e) => handleSubjectChange(e)}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Message"
              placeholder="Your message"
              value={message}
              onChange={(e) => handleMessageChange(e)}
              size="big"
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>Submit</Button>
        </div>
      </form>
    </Container>
  )
}

export default Contact
