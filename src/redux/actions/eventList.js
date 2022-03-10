import { EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAILURE } from '../constants'

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
