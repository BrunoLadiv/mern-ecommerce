import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload
      localStorage.setItem('userInfo'), JSON.stringify(user)
      state.user = user
    },
   
  },
})

export default authSlice.reducer

export const { setCredentials } = authSlice.actions
