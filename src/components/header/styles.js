import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
    marginBottom: '5rem',
  },
  navbar: {
    padding: '12px',
  },

  navEle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  font: {
    fontFamily: 'IBM Plex Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
    color: '#FFFFFF',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    flex: ' none',
    order: '0',
    margin: '0px 86px',
  },
}))
