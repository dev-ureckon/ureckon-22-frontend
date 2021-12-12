import React from 'react'
import { useStyles } from './contact.style'
import { useInputState } from '../../hooks/useInputState'
import { ContactLogic, createNewContact } from './contact'

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

  // const { foo } = ContactLogic()
  // console.log(foo)
  const classes = useStyles()

  return <div className={classes.root}>Contact Page</div>
}

export default Contact
