import {
  FETCH_NEWSFEED_REQUEST,
  FETCH_NEWSFEED_SUCCESS,
  FETCH_NEWSFEED_FAILURE,
} from '../constants'

export const fetchNewsfeedRequest = () => ({
  type: FETCH_NEWSFEED_REQUEST,
})

export const fetchNewsfeedSuccess = (newsfeed) => ({
  type: FETCH_NEWSFEED_SUCCESS,
  payload: newsfeed,
})

export const fetchNewsfeedError = (error) => ({
  // here error is basically the error message
  type: FETCH_NEWSFEED_FAILURE,
  payload: error,
})
