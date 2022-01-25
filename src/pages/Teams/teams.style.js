import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  teamMember_name: {
    padding: '0.6rem',
    width: '100%',
    position: 'absolute',
    top: '75%',
  },
  teamMember_image:{
    color: '#fff',
    height: '272px',
    position: 'relative',
  },
  teamMember_social:{
    color: '#fff',
    background: theme.palette.secondary.purple,
    margin: '0 auto'
  },
  socialIcon:{
    margin: '0.1rem 0.5rem',
    color: theme.palette.primary,
  },
  anchor:{
    textDecoration: 'none', color: '#fff'
  }
}))
