import {createSlice} from '@reduxjs/toolkit';

export const betSlice = createSlice({
	name: 'betData',
	initialState: {
		currentBetValue: 50
	},

	reducers: {
		incrementBet: (state, action) => {
			if (state.currentBetValue >= 100) return state; // 100 stays for max bet
			// although validation should be done by the UI
			state.currentBetValue = state.currentBetValue + 10;
			/*it is possible to let user set increment/decrement values,
				minimum/maximum bets via UI, if necessary*/
		},
		decrementBet: (state, action) => {
			if (state.currentBetValue <= 10) return state; // 10 stays for min bet
			state.currentBetValue = state.currentBetValue - 10;
		},
	}
});

export const {
	incrementBet,
	decrementBet,
} = betSlice.actions;

export const selectBetData = state => state.betSlice;

export default betSlice.reducer;