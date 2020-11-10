import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
	name: 'settingsData',
	initialState: {
		test1: {
			name: 'test1',
			isActive: false,
		},
		test2: {
			name: 'test2',
			isActive: true,
		},
	},

	reducers: {
		toggleTest1: (state, _) => {
			state.test1.isActive = !state.test1.isActive;
		},

		toggleTest2: (state, _) => {
			state.test2.isActive = !state.test2.isActive;
		},
	}
});

export const {
	toggleTest1,
	toggleTest2,
} = settingsSlice.actions;

export const selectSettingsData = state => state.settingsSlice;

export default settingsSlice.reducer;