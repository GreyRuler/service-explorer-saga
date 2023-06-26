import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		value: {
			items: [],
			loading: false,
			error: null,
		}
	},
	reducers: {
		homeRequest: (state) => {
			state.value = {
				...state.value,
				loading: true,
				error: null
			}
		},
		homeFailure: (state, action) => {
			state.value = {
				...state.value,
				loading: false,
				error: action.payload,
			}
		},
		homeSuccess: (state, action) => {
			state.value = {
				...state.value,
				items: action.payload,
				loading: false,
				error: null,
			}
		},
	}
})

export const {homeFailure, homeRequest, homeSuccess} = homeSlice.actions

export default homeSlice.reducer
