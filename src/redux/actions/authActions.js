import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constants';
import { loginUser, registerUser } from '../apis';

// user register action
export const userRegister = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });
        const { data } = await registerUser(name, email, password);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error,
        });
    }
};

//user Login action
export const userLogin = (email, password) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const { data } = await loginUser(email, password);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// SignUp social auth user
export const signUpSocialUser = (idToken) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      })
      const config = {
        'Content-Type': 'application/json'
      }
      const body = {
        idToken: idToken
      }
  
      const { data } = await 
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      })
  
      // save auth details to local
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }







// logout action
export const userLogout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT,
    });
};
