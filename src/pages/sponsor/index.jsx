import React from 'react'
import './sponsor.css'
import { Container } from '@mui/material'

const demoImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkHLKWWnxn9Jna1EITHAVnucqW-hVIX2-fIihfn4WlwTYnTeMtOea31guel_EZu6j9tI&usqp=CAU'

function Sponsor() {
  return (
    <Container>
      <>
        <div className="one">
          <h2>Event Partners</h2>
        </div>
        <div className="pic">
          {new Array(6).fill(0).map((_) => (
            <img src={demoImg} alt="sponsor" />
          ))}
        </div>
        <div className="one">
          <h2>Gaming Partners</h2>
        </div>
        <div className="pic">
          {new Array(6).fill(0).map((_) => (
            <img src={demoImg} alt="sponsor" />
          ))}
        </div>
        <div className="one">
          <h2>Food Partners</h2>
        </div>
        <div className="pic">
          {new Array(6).fill(0).map((_) => (
            <img src={demoImg} alt="sponsor" />
          ))}
        </div>
      </>
    </Container>
  )
}

export default Sponsor
