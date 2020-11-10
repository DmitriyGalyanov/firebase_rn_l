import { configureStore } from '@reduxjs/toolkit';

import modalsReducer from './stateSlices/modalsSlice';
import settingsReducer from './stateSlices/settingsSlice';
import slotMachineReducer from './stateSlices/slotMachineSlice';

export default configureStore({
	reducer: {
		modalsSlice: modalsReducer,
		settingsSlice: settingsReducer,
		slotMachineSlice: slotMachineReducer,
	},
});