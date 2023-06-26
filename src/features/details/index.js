import { createSlice } from '@reduxjs/toolkit';

const detailsSlice = createSlice({
	name: 'details',
	initialState: {
		value: {
			details: '',
			loading: false,
			error: null,
			id: null,
		}
	},
	reducers: {
		detailsRequest: (state) => {
			state.value = {
				...state.value,
				loading: true,
				error: null
			}
		},
		detailsFailure: (state, action) => {
			state.value = {
				...state.value,
				loading: false,
				error: action.payload,
			}
		},
		detailsSuccess: (state, action) => {
			state.value = {
				...state.value,
				details: action.payload,
				loading: false,
				error: null,
			}
		},
		changeId: (state, action) => {
			state.value = {
				...state.value,
				id: action.payload,
				loading: false,
				error: null,
			}
		}
	}
})

export const {
	changeId,
	detailsFailure,
	detailsRequest,
	detailsSuccess
} = detailsSlice.actions

export default detailsSlice.reducer
