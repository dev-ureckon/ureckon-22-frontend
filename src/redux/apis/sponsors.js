import axios from '../../axios/axiosInstance'
import { fetchSponsorError, fetchSponsorRequest, fetchSponsorSuccess } from '../actions'

export const getMainSponsors = () => async (dispatch) => {
  dispatch(fetchSponsorRequest())
  try {
    const response = await axios.get('/partners/main')
    const actualData = response.data
    dispatch(fetchSponsorSuccess(actualData.mainSponsors, true))
  } catch (error) {
    dispatch(fetchSponsorError(error.message))
  }
}

export const getAllSponsors = () => async (dispatch) => {
  dispatch(fetchSponsorRequest())
  try {
    const response = await axios.get('/partners')
    const actualData = response.data
    dispatch(fetchSponsorSuccess(actualData.sponsors))
  } catch (error) {
    dispatch(fetchSponsorError(error.message))
  }
}
