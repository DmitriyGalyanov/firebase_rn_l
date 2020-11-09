import { configureStore } from '@reduxjs/toolkit';

import betReducer from './stateSlices/betSlice';
import modalsReducer from './stateSlices/modalsSlice';
import settingsReducer from './stateSlices/settingsSlice';

export default configureStore({
	reducer: {
		betSlice: betReducer,
		modalsSlice: modalsReducer,
		settingsSlice: settingsReducer,
	},
});