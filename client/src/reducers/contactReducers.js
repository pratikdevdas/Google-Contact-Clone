import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
      const contact = action.payload
      state.push({contact})
    },
  },
})

export const { addContact } = contactSlice.actions
export default contactSlice.reducer