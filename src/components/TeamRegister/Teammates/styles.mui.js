import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  closeButton: {
    width: '10px',
    height: '40px',
    background: 'linear-gradient(92.58deg, #DD5E27 0.6%, #E53D26 99.4%)',
    borderRadius: '4px',
    '&:hover': {
      background: 'linear-gradient(92.58deg, #DD5E27 0.6%, #E53D26 99.4%)',
    },
  },
}))
