import axios from '../../axios/axiosInstance'
import {
  fetchEventListRequest,
  fetchEventListSuccess,
  fetchEventListError,
} from '../actions'

export const getAllEventList = (slug) => async (dispatch) => {
  dispatch(fetchEventListRequest())
  try {
    const response = await axios.get(`/events/category-slug/${slug}`)
    const actualData = response.data
    dispatch(fetchEventListSuccess(actualData))
  } catch (error) {
    dispatch(fetchEventListError(error.message))
  }
}


export const getEventsSearch = (query) => async (dispatch) => {
  dispatch(fetchEventListRequest())
  try {
    const response = await axios.get(`events/search?query=${query}`)
    const actualData = response.data
    dispatch(fetchEventListSuccess(actualData))
  } catch (error) {
    dispatch(fetchEventListError(error.message))
  }
}
