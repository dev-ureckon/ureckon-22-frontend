import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

const DropDown = ({ eventCategories, more }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRedirect = (category) => {
    let slug = navigate(`/events/category-slug/${slug}`)
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
        <div className={classes.btnTxt}>{eventCategories ? 'Events' : 'More'}</div>
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
        {eventCategories ? (
          eventCategories.map((event) => (
            <>
              <a
                href={
                  '/events/category-slug/' +
                  event?.categoryName.replace(/ /g, '-').toLowerCase()
                }
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <MenuItem
                  // onClick={() => handleRedirect(event?.categoryName)}
                  disableRipple
                >
                  <img
                    src={event?.icon}
                    alt="icon"
                    style={{ marginRight: '10px', width: '15px', height: '15px' }}
                  />
                  {event?.categoryName} Events
                </MenuItem>
              </a>
            </>
          ))
        ) : (
          <>
            <a href="/team" style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleClose} disableRipple>
                Team
              </MenuItem>
            </a>
            <a href="/partners" style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleClose} disableRipple>
                Partners
              </MenuItem>
            </a>
            <a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleClose} disableRipple>
                Contact us
              </MenuItem>
            </a>
          </>
        )}
      </StyledMenu>
    </div>
  )
}

export default DropDown
