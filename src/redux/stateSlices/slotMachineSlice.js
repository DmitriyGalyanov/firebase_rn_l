import {createSlice} from '@reduxjs/toolkit';

export const slotMachineSlice = createSlice({
	name: 'slotMachineData',
	initialState: {
		isSpinning: false,
		indices: {
			1: 0,
			2: 0,
			3: 0,
		},
	},

	reducers: {
		startSpinning: (state, action) => {
			const {indices} = action.payload;
			state.indices = indices;
			state.isSpinning = true;
		},

		stopSpinning: (state, action) => {
			state.isSpinning = false;
		},
	}
});

export const {
	startSpinning,
	stopSpinning,
} = slotMachineSlice.actions;

export const selectSlotMachineData = state => state.slotMachineSlice;

export default slotMachineSlice.reducer;