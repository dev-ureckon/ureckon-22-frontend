import axios from '../../axios/axiosInstance'
import {
  fetchEventDetailsRequest,
  fetchEventDetailsSuccess,
  fetchEventDetailsError,
} from '../actions'

export const getAllEventDetails = (eventCode) => async (dispatch) => {
  dispatch(fetchEventDetailsRequest())
  try {
    const response = await axios.get(`/events/details/${eventCode}`)
    const actualData = response.data
    dispatch(fetchEventDetailsSuccess(actualData))
  } catch (error) {
    dispatch(fetchEventDetailsError(error.message))
  }
}
