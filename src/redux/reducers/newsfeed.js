import {
  FETCH_NEWSFEED_REQUEST,
  FETCH_NEWSFEED_SUCCESS,
  FETCH_NEWSFEED_FAILURE,
} from '../constants'

const initialState = {
  loading: false,
  error: '',
  newsfeed: [], // All of the existing newsfeed fetched from server, initially empty
}

const newsfeedReducer = (state = initialState, action) => {
  const { type, payload } = action
  //   The payload here can basically contain both the entire newsfeed list as well as the error message whenever it is applicable
  switch (type) {
    case FETCH_NEWSFEED_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_NEWSFEED_SUCCESS:
      return {
        newsfeed: payload,
        loading: false,
        error: '',
      }
    case FETCH_NEWSFEED_FAILURE:
      return {
        newsfeed: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default newsfeedReducer
