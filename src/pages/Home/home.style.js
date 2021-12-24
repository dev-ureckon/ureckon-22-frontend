import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {},
  voot: {
    color: 'black',
  },
  modal: {
    overflow: 'scroll',
  },
  '@media (min-width: 1440px)': {
    events: {
      marginLeft: '-8rem',
    },
    News: {
      marginLeft: '8rem',
    },
  },
}))
