import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {},
  voot: {
    color: 'black',
  },
  modal: {
    position: 'fixed',
    top: '0%',
    left: '10%',
    overflow: 'scroll',
    height: '100%',
    display: 'block',
  },
  '@media (min-width: 1440px)': {
    events: {
      marginLeft: '-8rem',
    },
    announcements: {
      marginLeft: '8rem',
    },
  },
}))
