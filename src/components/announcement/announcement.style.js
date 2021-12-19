import { makeStyles } from '@mui/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    maxWidth: '53rem',
    border: '1px solid black',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  btnWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '181px',
    height: '43px',
    background: '#222222',
    borderRadius: '5px',
    fontFamily: 'IBM Plex Sans',
    fontstyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '26px',
    color: '#FFFFFF',
    marginBottom: '2rem',
    '&:hover': {
      background: '#222222',
    },
  },
}))
