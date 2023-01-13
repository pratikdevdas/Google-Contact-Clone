import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {toggle: true}
]

const toggleSlice = createSlice({
  name: 'toggling',
  initialState,
  reducers: {
    setToggle(state, action) {
      const toggle = action.payload
      state.push({toggle})
    },
  },
})

export const { setToggle } = toggleSlice.actions
export default toggleSlice.reducer