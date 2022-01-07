import React from 'react'
import { useInputState } from '../../hooks/useInputState'
import { createNewContact } from './contact'
import { Container, Grid } from '@mui/material'
import Input from '../../components/input'
import Button from '../../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { showToastTimer } from '../../redux/actions/toast'

function Contact() {
  // If user is logged in autofill name and email
  const { userInfo } = useSelector((state) => state.userLogin)

  // States for storing contact form data
  const [name, handleNameChange, resetName] = useInputState(userInfo?.name || '')
  const [email, handleEmailChange, resetEmail] = useInputState(userInfo?.email || '')
  const [subject, handleSubjectChange, resetSubject] = useInputState('')
  const [message, handleMessageChange, resetMessage] = useInputState('')

  const dispatch = useDispatch()
  // Contact form submit handler
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
        if (userInfo) {
          resetSubject()
          resetMessage()
        } else {
          resetName()
          resetEmail()
          resetSubject()
          resetMessage()
        }
        dispatch(showToastTimer(msg, 'success'))
      } else {
        dispatch(showToastTimer('Encountered error while saving contact', 'error'))
      }
    }
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit(e)
        }}
      >
        <Grid container spacing={{ lg: 10, xs: 4 }}>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleNameChange(e)}
              disabled={userInfo ? true : false}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
              disabled={userInfo ? true : false}
            />
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Input
              width="100%"
              label="Subject"
              placeholder="Subject"
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
