import {
  USER_COMPLETE_PROFILE_FAILED,
  USER_COMPLETE_PROFILE_REQUEST,
  USER_COMPLETE_PROFILE_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants'
import { loginUser, registerUser, signUpSocial } from '../apis/auth'
import { completeProfile } from '../apis/authManagement'
import swal from 'sweetalert'

// user register action
export const userRegister =
  (email, password, name, college, phone, gender) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
      const { data } = await registerUser(email, password, name, college, phone, gender)
      console.log(data)
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
      swal('Success', 'Successfully Logged in', 'success')

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      console.log(error.response.data.message)
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: error.response.data.message,
      })
    }
  }

//user Login action
export const userLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const { data } = await loginUser(email, password)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    swal('Success', 'Successfully Logged in', 'success')
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// SignUp social auth user
export const signUpSocialUser = (idToken) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const { data } = await signUpSocial(idToken)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    swal('Success', 'Successfully Logged in', 'success')

    // save auth details to local
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// completeProfile of auth user
export const completeProfileAction =
  (phone, college, gender, accessToken, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: USER_COMPLETE_PROFILE_REQUEST,
      })
      const { data } = await completeProfile(phone, college, gender, accessToken)
      console.log(data)
      dispatch({
        type: USER_COMPLETE_PROFILE_SUCCESS,
        payload: data,
      })

      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      userInfo.alreadyRegistered = true
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      swal('Success', 'Succes updated complete Profile', 'success').then(() => {
        navigate('/')
      })
    } catch (error) {
      dispatch({
        type: USER_COMPLETE_PROFILE_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

// logout action
export const userLogout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOGOUT,
  })
}
