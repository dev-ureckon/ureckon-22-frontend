import { FETCH_TEAMS_ERROR, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS } from '../constants'

export const fetchTeamsRequest = () => ({
  type: FETCH_TEAMS_REQUEST,
})

export const fetchTeamsSuccess = (TEAMS, isMain = false) => ({
  type: FETCH_TEAMS_SUCCESS,
  payload: TEAMS,
  isMain, // only true if the TEAMS being fetched are main TEAMS
})

export const fetchTeamsError = (error) => ({
  // here error is basically the error message
  type: FETCH_TEAMS_ERROR,
  payload: error,
})
