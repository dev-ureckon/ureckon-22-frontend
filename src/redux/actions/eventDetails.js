import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAILURE,
} from '../constants'

export const fetchEventDetailsRequest = () => ({
  type: EVENT_DETAILS_REQUEST,
})

export const fetchEventDetailsSuccess = (event) => ({
  type: EVENT_DETAILS_SUCCESS,
  payload: event,
})

export const fetchEventDetailsError = (error) => ({
  // here error is basically the error message
  type: EVENT_DETAILS_FAILURE,
  payload: error,
})
