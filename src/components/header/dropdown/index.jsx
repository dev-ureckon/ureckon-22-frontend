import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import DropdownIMG from '../../../assets/IMGs/dropdown.png'
import flagship from '../../../assets/SVGs/flagship.svg'
import robotics from '../../../assets/SVGs/robotics.svg'
import gaming from '../../../assets/SVGs/gaming.svg'
import coding from '../../../assets/SVGs/coding.svg'
import design from '../../../assets/SVGs/design.svg'
import business from '../../../assets/SVGs/business.svg'
import biotech from '../../../assets/SVGs/biotech.svg'
import quiz from '../../../assets/SVGs/quiz.svg'
import school from '../../../assets/SVGs/school.svg'
import { useStyles } from './styles'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    backgroundColor: 'rgba(1, 2, 8, 0.8)',
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'white',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'rgba(1, 2, 8, 0.8)',
      },
    },
  },
}))

const DropDown = ({ events, more }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div style={{ marginRight: '2rem', marginLeft: '2rem' }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<img src={DropdownIMG} alt="icon" />}
      >
        <div className={classes.btnTxt}>{events ? 'Events' : 'More'}</div>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {events ? (
          <>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={flagship} alt="icon" style={{ marginRight: '10px' }} />
              Flagship Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={robotics} alt="icon" style={{ marginRight: '10px' }} />
              Robotics Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={gaming} alt="icon" style={{ marginRight: '10px' }} />
              Gaming Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={coding} alt="icon" style={{ marginRight: '10px' }} />
              Coding Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={design} alt="icon" style={{ marginRight: '10px' }} />
              Design Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={business} alt="icon" style={{ marginRight: '10px' }} />
              Business Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={biotech} alt="icon" style={{ marginRight: '10px' }} />
              Biotech Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={quiz} alt="icon" style={{ marginRight: '10px' }} />
              Quiz Events
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <img src={school} alt="icon" style={{ marginRight: '10px' }} />
              School Events
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClose} disableRipple>
              Team
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Partners
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Contact us
            </MenuItem>
          </>
        )}
      </StyledMenu>
    </div>
  )
}

export default DropDown
