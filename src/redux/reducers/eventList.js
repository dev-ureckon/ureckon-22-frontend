import { EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAILURE } from '../constants'

const initialState = {
  loading: false,
  error: '',
  events: [], // All of the existing event events fetched from server, initially empty
}

const eventListReducer = (state = initialState, action) => {
  const { type, payload } = action

  //   The payload here can basically contain both the entire events list as well as the error message whenever it is applicable
  switch (type) {
    case EVENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case EVENT_LIST_SUCCESS:
      return {
        events: payload,
        loading: false,
        error: '',
      }
    case EVENT_LIST_FAILURE:
      return {
        events: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default eventListReducer
