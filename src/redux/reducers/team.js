import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_ERROR
} from '../constants'

const initialState = {
  loading: false,
  error: '',
  teams: {}, // All of the existing TEAMS fetched from server, initially empty
}

const teamsReducer = (state = initialState, action) => {
  const { type, payload } = action
  //   The payload here can basically contain both the entire TEAMS list as well as the error message whenever it is applicable
  switch (type) {
    case FETCH_TEAMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_TEAMS_SUCCESS:
      return {
        teams: payload,
        loading: false,
        error: '',
      }
    case  FETCH_TEAMS_ERROR:
      return {
        teams: [],
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default teamsReducer
