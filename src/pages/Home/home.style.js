import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {},
  voot: {
    color: 'black'
  },
  Sponsor: {
    fontFamily: 'IBM Plex Sans, sans- serif',
    color: 'aliceblue',
    fontSize: '36px',
    marginLeft: '6rem',
    marginBottom: '1rem'
  },
  SponsorImg: {
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    margin: '0 auto'
  },
  modal: {
    overflow: 'scroll'
  },
  '@media (min-width: 1440px)': {
    events: {
      marginLeft: '-8rem'
    },
    News: {
      marginLeft: '8rem'
    }
  }
}))
