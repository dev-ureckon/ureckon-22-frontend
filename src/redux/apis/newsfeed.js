import axios from '../../axios/axiosInstance'
import {
  fetchNewsfeedRequest,
  fetchNewsfeedSuccess,
  fetchNewsfeedError,
} from '../actions'

export const getAllNewsfeed = () => async (dispatch) => {
  dispatch(fetchNewsfeedRequest())
  try {
    const response = await axios.get('/news/feed')
    const actualData = response.data
    dispatch(fetchNewsfeedSuccess(actualData))
  } catch (error) {
    dispatch(fetchNewsfeedError(error.message))
  }
}
