import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAILURE,
} from '../constants'

const initialState = {
  loading: false,
  error: '',
  eventDetails: {}, // All of the existing event details fetched from server, initially empty
}

const eventDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action
  //   The payload here can basically contain both the entire eventDetails list as well as the error message whenever it is applicable
  switch (type) {
    case EVENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case EVENT_DETAILS_SUCCESS:
      return {
        eventDetails: payload,
        loading: false,
        error: '',
      }
    case EVENT_DETAILS_FAILURE:
      return {
        eventDetails: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default eventDetailsReducer
