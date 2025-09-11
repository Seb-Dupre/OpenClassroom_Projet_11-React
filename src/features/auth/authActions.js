import axios from 'axios'
import {
  loginStart,
  loginSuccess,
  loginFailure,
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateUserNameStart,
  updateUserNameSuccess,
  updateUserNameFailure
} from './authSlice'

const API_URL = 'http://localhost:3001/api/v1'

export const login = (email, password) => async dispatch => {
  dispatch(loginStart())
  try {
    const response = await axios.post(`${API_URL}/user/login`, {
      email,
      password
    })
    const token = response.data.body.token
    dispatch(loginSuccess(token))
  } catch (error) {
    dispatch(loginFailure('Email ou mot de passe invalide'))
  }
}

export const fetchProfile = () => async (dispatch, getState) => {
  dispatch(fetchProfileStart())
  const token = getState().auth.token

  try {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(fetchProfileSuccess(response.data.body))
  } catch (error) {
    dispatch(fetchProfileFailure('Erreur lors de la récupération du profil'))
  }
}

export const updateUserName = newUserName => async (dispatch, getState) => {
  dispatch(updateUserNameStart())
  const token = getState().auth.token

  try {
    const response = await axios.put(
      `${API_URL}/user/profile`,
      { userName: newUserName },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    dispatch(updateUserNameSuccess(response.data.body))
  } catch (error) {
    dispatch(
      updateUserNameFailure(
        "Erreur lors de la mise à jour du nom d'utilisateur"
      )
    )
  }
}
