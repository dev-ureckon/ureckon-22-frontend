import { useState, useEffect } from 'react'
import './sponsor.css'
import { Container } from '@mui/material'
import { getAllSponsors } from '../../redux/apis/sponsors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Sponsor() {
  const dispatch = useDispatch()
  const sponsors = useSelector((state) => state.sponsor.sponsors)

  useEffect(() => {
    dispatch(getAllSponsors())
  }, [dispatch])

  return (
    <Container style={{ minHeight: 'calc(100vh - 255px)' }}>
      <>
        {sponsors
          .sort((a, b) => a.order - b.order)
          .map((sponsor) => (
            <>
              <div className="one">
                <h2>{sponsor.categoryName}</h2>
              </div>
              <div className="pic">
                {sponsor?.sponsorList.map((s) => (
                  <img key={s.sponsorName} src={s.sponsorLogo} alt="sponsor" />
                ))}
              </div>
            </>
          ))}
      </>
    </Container>
  )
}

export default Sponsor
