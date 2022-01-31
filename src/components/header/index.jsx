import { useState } from 'react'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import NavUreckon from '../../assets/IMGs/navbar-ureckon-logo.png'
import ureckonLogo from '../../assets/UreckonWhiteLogo.png'
import headingLogo from '../../assets/IMGs/Heading.png'
import uemLogo from '../../assets/IMGs/uemLogo.png'
import './header.css'
import { useStyles } from './styles'
import DropDown from './dropdown/index.jsx'

const Header = () => {
  const classes = useStyles()
  const [events, setEvents] = useState(true)
  return (
    <Box className={classes.root}>
      <AppBar position="static" color="navbar" className={classes.navbar}>
        <Toolbar className={classes.navEle}>
          <div className="nav-font">Home</div>
          <DropDown events={events} />
          <DropDown />
          <img src={NavUreckon} alt="ureckon-logo" style={{ marginLeft: '2rem' }} />
          <div className="nav-font">About Us</div>
          <div className="nav-font">Logout</div>
          <div className="nav-font">News</div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
