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
		betValue: 50,
		scoreCount: 0,
	},

	reducers: {
		startSpinning: (state, action) => {
			const {indices} = action.payload;
			state.indices = indices;

			state.isTouched = true;
			state.isSpinning = true;
		},
		stopSpinning: (state, _) => {
			state.isSpinning = false;
		},

		incrementBet: (state, _) => {
			if (state.betValue >= 100) return state; // 100 stays for max bet
			// although validation should be done by the UI
			state.betValue = state.betValue + 10;
			/*it is possible to let user set increment/decrement values,
				minimum/maximum bets via UI, if necessary*/
		},
		decrementBet: (state, _) => {
			if (state.betValue <= 10) return state; // 10 stays for min bet
			state.betValue = state.betValue - 10;
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

	incrementBet,
	decrementBet,

	increaseScoreCount,
} = slotMachineSlice.actions;

export const selectSlotMachineData = state => state.slotMachineSlice;

export default slotMachineSlice.reducer;