import {
  FETCH_SPONSORS_ERROR,
  FETCH_SPONSORS_REQUEST,
  FETCH_SPONSORS_SUCCESS,
} from '../constants'

export const fetchSponsorRequest = () => ({
  type: FETCH_SPONSORS_REQUEST,
})

export const fetchSponsorSuccess = (sponsors, isMain = false) => ({
  type: FETCH_SPONSORS_SUCCESS,
  payload: sponsors,
  isMain, // only true if the sponsors being fetched are main sponsors
})

export const fetchSponsorError = (error) => ({ // here error is basically the error message
  type: FETCH_SPONSORS_ERROR,
  payload: error, 
})
