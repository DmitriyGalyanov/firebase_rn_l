import {createSlice} from '@reduxjs/toolkit';

export const slotMachineSlice = createSlice({
	name: 'slotMachineData',
	initialState: {
		isTouched: false,
		isSpinning: false,
		indices: {
			1: 0,
			2: 0,
			3: 0,
		},
		scoreCount: 0,
	},

	reducers: {
		startSpinning: (state, action) => {
			const {indices} = action.payload;
			state.indices = indices;

			state.isTouched = true;
			state.isSpinning = true;
		},

		stopSpinning: (state, action) => {
			state.isSpinning = false;
		},

		increaseScoreCount: (state, action) => {
			const {amount} = action.payload;
			state.scoreCount = state.scoreCount + amount;
		}
	}
});

export const {
	startSpinning,
	stopSpinning,
	increaseScoreCount,
} = slotMachineSlice.actions;

export const selectSlotMachineData = state => state.slotMachineSlice;

export default slotMachineSlice.reducer;