import { configureStore } from '@reduxjs/toolkit';

import betReducer from './stateSlices/betSlice';
import modalsReducer from './stateSlices/modalsSlice';

export default configureStore({
	reducer: {
		betSlice: betReducer,
		modalsSlice: modalsReducer,
	},
});