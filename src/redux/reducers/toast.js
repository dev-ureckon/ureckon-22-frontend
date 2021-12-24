import { SHOW_TOAST, CLEAR_TOAST } from '../constants/toast'

const initialState = {
  isShowing: false,
  message: '', // Toast message to be shown
  toastType: '', // Would indicate whether the toast shows some success or failure
}

const toastReducer = (state = initialState, action) => {
  const { type, message, toastType } = action
  switch (type) {
    case SHOW_TOAST:
      return {
        isShowing: true,
        message,
        toastType,
      }
    case CLEAR_TOAST:
      return {
        isShowing: false,
        message: '',
        toastType: '',
      }
    default:
      return state
  }
}

export default toastReducer
