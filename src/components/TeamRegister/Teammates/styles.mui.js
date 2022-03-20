import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  addButton: {
    width: '10px',
    height: '40px',
    background: '#0DB3B3',
    borderRadius: '4px',
    '&:hover': {
      background: '#0DB3B3',
    },
  },

  removeButton: {
    width: '10px',
    height: '40px',
    background: 'linear-gradient(92.58deg, #DD5E27 0.6%, #E53D26 99.4%)',
    borderRadius: '4px',
    '&:hover': {
      background: 'linear-gradient(92.58deg, #DD5E27 0.6%, #E53D26 99.4%)',
    },
  },
}))
