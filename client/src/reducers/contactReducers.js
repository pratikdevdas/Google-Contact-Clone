import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {}
]

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setContact(state, action) {
      const toggle = action.payload
      state.push({toggle})
    },
	addPerson(state,action){
		const addContact = n
	}
  },
})

export const { setPerson, addPerson } = personSlice.actions
export default personSlice.reducer