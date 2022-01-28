import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
    cursor: 'pointer',
  },
  frame: {
    background:
      'linear-gradient(93.26deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.105) 34.86%, rgba(255, 255, 255, 0.05) 67.19%)',
  },
  cardtxt: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '19rem',
  },
}))
