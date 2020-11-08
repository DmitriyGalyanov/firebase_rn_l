import { configureStore } from '@reduxjs/toolkit';

import betReducer from './stateSlices/betSlice';

export default configureStore({
	reducer: {
		betSlice: betReducer,
	},
});