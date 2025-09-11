import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') || null,
  user: null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token')
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
      state.loading = false
      localStorage.setItem('token', action.payload)
    },
    loginFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },

    fetchProfileStart: state => {
      state.loading = true
      state.error = null
    },
    fetchProfileSuccess: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    fetchProfileFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },

    updateUserNameStart: state => {
      state.loading = true
      state.error = null
    },
    updateUserNameSuccess: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload
      }
      state.loading = false
    },
    updateUserNameFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },

    logout: state => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateUserNameStart,
  updateUserNameSuccess,
  updateUserNameFailure,
  logout
} = authSlice.actions

export default authSlice.reducer
