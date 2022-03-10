import axios from '../../axios/axiosInstance'
import {
    fetchEventListRequest,
    fetchEventListSuccess,
    fetchEventListError,
} from '../actions'

export const getAllEventList = () => async (dispatch) => {
    dispatch(fetchEventListRequest())
    try {
        const response = await axios.get('/events')
        const actualData = response.data
        dispatch(fetchEventListSuccess(actualData))
    } catch (error) {
        dispatch(fetchEventListError(error.message))
    }
}
