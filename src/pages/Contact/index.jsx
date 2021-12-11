import React from 'react'
import { useStyles } from './contact.style'

import { ContactLogic } from './contact'

function Contact() {
  const { foo } = ContactLogic()
  console.log(foo)
  const classes = useStyles()

  return <div className={classes.root}>Contact Page</div>
}

export default Contact