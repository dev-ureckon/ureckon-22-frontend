import { Typography } from '@mui/material'
import FacebookIcon from '../../assets/SVGs/fbWhite.svg'
import InstagramIcon from '../../assets/SVGs/instaWhite.svg'
import TwitterIcon from '../../assets/SVGs/twitterWhite.svg'
import LinkedInIcon from '../../assets/SVGs/linkedinNew.svg'
import YoutubeIcon from '../../assets/SVGs/youtubeWhite.svg'
import './index.css'

const ImgStyle = {
  marginLeft: '2rem',
  width: '2rem',
  height: 'auto',
  cursor: 'pointer',
}

const Footer = () => {
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
      <img src={FacebookIcon} alt="facebook" style={ImgStyle} />
      <img src={InstagramIcon} alt="instagram" style={ImgStyle} />
      <img src={TwitterIcon} alt="twitter" style={ImgStyle} />
      <img src={LinkedInIcon} alt="linkedin" style={ImgStyle} />
      <img src={YoutubeIcon} alt="youtube" style={ImgStyle} />
    </div>
  )
}

export default Footer
