import { Typography, useMediaQuery } from '@mui/material'
import FacebookIcon from '../../assets/SVGs/fbWhite.svg'
import InstagramIcon from '../../assets/SVGs/instaWhite.svg'
import TwitterIcon from '../../assets/SVGs/twitterWhite.svg'
import LinkedInIcon from '../../assets/SVGs/linkedinNew.svg'
import YoutubeIcon from '../../assets/SVGs/youtubeWhite.svg'
import APKIcon from '../../assets/SVGs/android_app_button.svg'
import './index.css'
import { useMatch } from 'react-router-dom'

const ImgStyle = {
  marginLeft: '2rem',
  width: '2rem',
  height: 'auto',
  cursor: 'pointer',
}

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:900px)')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        paddingBottom: '25px',
        paddingTop: '50px',
        width: '100%',
        padding: '1rem 0',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" className="TextStyle">
        © Copyright Ureckon 2022 - All Rights Reserved
      </Typography>
      <a href="https://www.facebook.com/ureckon.uemk" target="_blank">
        <img
          src={FacebookIcon}
          alt="facebook"
          style={{ ...ImgStyle, marginLeft: isMobile ? '0rem' : '2rem' }}
        />
      </a>
      <a href="https://www.instagram.com/ureckon.uemk/" target="_blank">
        <img src={InstagramIcon} alt="instagram" style={ImgStyle} />
      </a>
      <a href="https://twitter.com/Ureckon_Uemk" target="_blank">
        <img src={TwitterIcon} alt="twitter" style={ImgStyle} />
      </a>
      <a href="https://www.linkedin.com/company/ureckon/" target="_blank">
        <img src={LinkedInIcon} alt="linkedin" style={ImgStyle} />
      </a>
      <a href="https://www.youtube.com/c/UreckonUEMKolkata" target="_blank">
        <img src={YoutubeIcon} alt="youtube" style={ImgStyle} />
      </a>
      <a href="https://bit.ly/ureckon22_app">
        <img
          src={APKIcon}
          alt="youtube"
          style={{
            marginLeft: isMobile ? '0rem' : '2rem',
            marginTop: isMobile ? '1rem' : 'initial',
          }}
        />
      </a>
    </div>
  )
}

export default Footer
