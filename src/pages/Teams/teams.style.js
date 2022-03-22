import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  teamMember_name: {
    padding: '0.6rem',
    width: '100%',
    position: 'absolute',
    top: '75%',
    color: '#fff',
  },
  teamMember_image: {
    color: '#fff',
    height: '272px',
    position: 'relative',
    borderRadius: '0',
  },
  teamMember_social: {
    background: '#2A3B97',
    color: '#fff',
    margin: '0 auto',
    borderRadius: '0',
    padding: '0.6rem 0 0 0',
  },
  socialIcon: {
    margin: '0.1rem 0.5rem',
    color: theme.palette.primary,
    borderRadius: '0',
  },
  anchor: {
    textDecoration: 'none',
    color: '#fff',
  },
}))
