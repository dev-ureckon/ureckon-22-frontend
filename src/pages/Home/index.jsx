import React from 'react'
import { useStyles } from './home.style'

import { HomeLogic } from './home'

function Home() {
  const { foo } = HomeLogic()
  console.log(foo)
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default Home
