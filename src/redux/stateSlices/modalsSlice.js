import {createSlice} from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
	name: 'modalsData',
	initialState: [
		{
			name: 'infoModal',
			isOpen: false,
		},

		{
			name: 'settingsModal',
			isOpen: false,
		},
	],

	reducers: {
		openInfoModal: (state, action) => {
			state[0].isOpen = true;
			// you sure can use findIndex() / find()
		},
		closeInfoModal: (state, action) => {
			state[0].isOpen = false
		},

		openSettingsModal: (state, action) => {
			state[1].isOpen = true;
		},
		closeSettingsModal: (state, action) => {
			state[1].isOpen = false
		},
	}
});

export const {
	openInfoModal,
	closeInfoModal,
	openSettingsModal,
	closeSettingsModal,
} = modalsSlice.actions;

export const selectModalsData = state => state.modalsSlice;

export default modalsSlice.reducer;