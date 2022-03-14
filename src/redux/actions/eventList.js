import {
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAILURE,
  EVENT_LIST_SEARCH_REQUEST,
  EVENT_LIST_SEARCH_SUCCESS,
  EVENT_LIST_SEARCH_FAILURE,
} from '../constants'


// Event List
export const fetchEventListRequest = () => ({
  type: EVENT_LIST_REQUEST,
})

export const fetchEventListSuccess = (newsfeed) => ({
  type: EVENT_LIST_SUCCESS,
  payload: newsfeed,
})

export const fetchEventListError = (error) => ({
  // here error is basically the error message
  type: EVENT_LIST_FAILURE,
  payload: error,
})

// Event Search
export const fetchEventSearchRequest = () => ({
  type: EVENT_LIST_SEARCH_REQUEST,
})

export const fetchEventSearchSuccess = (newsfeed) => ({
  type: EVENT_LIST_SEARCH_SUCCESS,
  payload: newsfeed,
})

export const fetchEventSearchError = (error) => ({
  // here error is basically the error message
  type: EVENT_LIST_SEARCH_FAILURE,
  payload: error,
})
