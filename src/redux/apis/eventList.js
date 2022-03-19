import axios from '../../axios/axiosInstance'
import {
  fetchEventListRequest,
  fetchEventListSuccess,
  fetchEventListError,
  fetchEventSearchRequest,
  fetchEventSearchSuccess,
  fetchEventSearchError,
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
  dispatch(fetchEventSearchRequest())
  try {
    const response = await axios.get(`events/search?event=${query}`)
    const actualData = response.data
    console.log(actualData)
    dispatch(fetchEventSearchSuccess(actualData))
  } catch (error) {
    dispatch(fetchEventSearchError(error.message))
  }
}
