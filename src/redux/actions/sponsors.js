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
  isMain,
})

export const fetchSponsorError = (error) => ({
  type: FETCH_SPONSORS_ERROR,
  payload: error,
})
