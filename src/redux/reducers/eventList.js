import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAILURE,
  EVENT_LIST_SEARCH_REQUEST,
  EVENT_LIST_SEARCH_SUCCESS,
  EVENT_LIST_SEARCH_FAILURE,
} from '../constants'

const initialState = {
  loading: true,
  error: '',
  events: [], // All of the existing event events fetched from server, initially empty
}

export const eventListReducer = (state = initialState, action) => {
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

export const eventSearchReducer = (state = initialState, action) => {
  const { type, payload } = action

  //   The payload here can basically contain both the entire events list as well as the error message whenever it is applicable
  switch (type) {
    case EVENT_LIST_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case EVENT_LIST_SEARCH_SUCCESS:
      return {
        events: payload,
        loading: false,
        error: '',
      }
    case EVENT_LIST_SEARCH_FAILURE:
      return {
        events: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
