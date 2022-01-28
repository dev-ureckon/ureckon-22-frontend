import { useState, useEffect } from 'react'
import './sponsor.css'
import { Container } from '@mui/material'
import { getAllSponsors } from '../../redux/apis/sponsors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const demoImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkHLKWWnxn9Jna1EITHAVnucqW-hVIX2-fIihfn4WlwTYnTeMtOea31guel_EZu6j9tI&usqp=CAU'

function Sponsor() {
  const dispatch = useDispatch()
  const sponsors = useSelector((state) => state.sponsor.sponsors)

  useEffect(() => {
    dispatch(getAllSponsors())
  }, [])

  useEffect(() => {
    console.log(sponsors)
  }, [sponsors])

  const eventSponsors = sponsors.find((s) => s.categoryName === 'Event')
  const gamingSponsors = sponsors.find((s) => s.categoryName === 'Gaming')
  const foodSponsors = sponsors.find((s) => s.categoryName === 'Food')

  return (
    <Container style={{ minHeight: 'calc(100vh - 255px)' }}>
      <>
        {!!eventSponsors && (
          <div className="one">
            <h2>Event Partners</h2>
          </div>
        )}
        <div className="pic">
          {eventSponsors?.sponsorList.map((s) => (
            <img key={s.sponsorName} src={s.sponsorLogo} alt="sponsor" />
          ))}
        </div>
        {!!gamingSponsors && (
          <div className="one">
            <h2>Gaming Partners</h2>
          </div>
        )}
        <div className="pic">
          {gamingSponsors?.sponsorList.map((s) => (
            <img key={s.sponsorName} src={s.sponsorLogo} alt="sponsor" />
          ))}
        </div>
        {foodSponsors && (
          <div className="one">
            <h2>Food Partners</h2>
          </div>
        )}
        <div className="pic">
          {foodSponsors?.sponsorList.map((s) => (
            <img key={s.sponsorName} src={s.sponsorLogo} alt="sponsor" />
          ))}
        </div>
      </>
    </Container>
  )
}

export default Sponsor
