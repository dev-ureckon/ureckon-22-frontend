import {
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAILURE,
  TEAM_REGISTER_REQUEST,
  TEAM_REGISTER_SUCCESS,
  TEAM_REGISTER_FAILURE,
} from '../constants/eventRegister'
import axios from 'axios'

export const userSearchAction = (searchText) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_SEARCH_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.accessToken}`,
      },
    }

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/usersearch?userId=${searchText}`,
      config
    )
    dispatch({
      type: USER_SEARCH_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const teamRegisterAction =
  (eventcode, teamName, teamMembers) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TEAM_REGISTER_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/events/${eventcode}/register`,
        {
          teamName,
          teamMembers,
        },
        config
      )
      dispatch({
        type: TEAM_REGISTER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: TEAM_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
