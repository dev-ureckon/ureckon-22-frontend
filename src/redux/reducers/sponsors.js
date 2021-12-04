import {
  FETCH_SPONSORS_ERROR,
  FETCH_SPONSORS_REQUEST,
  FETCH_SPONSORS_SUCCESS,
} from '../types'

const initialState = {
  loading: false,
  error: '',
  mainSponsors: [], // Only the main sponsors of Ureckon
  sponsors: [], // All the sponsors of Ureckon sorted by order
}

const sponsorReducer = (state = initialState, action) => {
  const { type, payload, isMain } = action
  //   The payload here can basically contain both the sponsors list as well as the error message
  //   isMain: Boolean denoting if the sponsors list is main sponsors or all sponsors
  switch (type) {
    case FETCH_SPONSORS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SPONSORS_SUCCESS:
      const newState = {
        ...state,
        loading: true,
        error: '',
      }
      if (isMain) newState.mainSponsors = payload
      else newState.sponsors = payload
      return newState
    case FETCH_SPONSORS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default sponsorReducer
