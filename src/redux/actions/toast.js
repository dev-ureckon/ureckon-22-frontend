import { SHOW_TOAST, CLEAR_TOAST } from '../constants/toast'

export const showToast = (message, toastType) => ({
  type: SHOW_TOAST,
  message,
  toastType
})

export const clearToast = () => ({
  type: CLEAR_TOAST
})

export const showToastTimer =
  (message, toastType, timeOut = 3000) =>
    (dispatch) => {
      dispatch(showToast(message, toastType))
      setTimeout(() => {
        dispatch(clearToast())
      }, timeOut) // After timeOut seconds the Toast message should disappear
    }
