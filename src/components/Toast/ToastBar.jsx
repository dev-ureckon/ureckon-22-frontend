import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector, useDispatch } from 'react-redux'

import { clearToast } from '../../redux/actions/toast'
import MuiAlert from '@mui/material/Alert'

export default function ToastBar() {
  const dispatch = useDispatch()
  const { isShowing, message, toastType } = useSelector((state) => state.toast)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(clearToast())
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  return (
    <div>
      <Snackbar open={isShowing} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toastType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
