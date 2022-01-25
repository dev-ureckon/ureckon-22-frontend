import axios from '../../axios/axiosInstance'
import { fetchTeamsSuccess, fetchTeamsError, fetchTeamsRequest } from '../actions'

export const getAllTeams = () => async (dispatch) => {
  dispatch(fetchTeamsRequest())
  try {
    const response = await axios.get('/team')
    const actualData = response.data
    console.log(actualData)
    dispatch(fetchTeamsSuccess(actualData))
  } catch (error) {
    dispatch(fetchTeamsError(error.message))
  }
}
