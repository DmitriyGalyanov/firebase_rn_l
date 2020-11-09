import React from 'react';
// import PropTypes from 'prop-types';

import {
	View,
} from 'react-native';

import RoundButton from 'components/RoundButton';
import InfoWindow from 'components/InfoWindow';
import SettingsWindow from 'components/SettingsWindow';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectModalsData,
	closeInfoModal,
	closeSettingsModal,
} from 'state_slices/modalsSlice';

import styles from './styles';

// ModalWindow.propTypes = {
// };

export default function ModalWindow() {
	const dispatch = useDispatch();

	const modalsData = useSelector(selectModalsData);

	const openModal = modalsData.filter(item => item.isOpen);

	const openModalName = openModal[0]?.name;

	const closeModal = () => { //mb will come from props// or even use Redux/Context
		switch (openModalName) {
			case 'infoModal': dispatch(closeInfoModal()); break;
			case 'settingsModal': dispatch(closeSettingsModal()); break;
			default: return;
		}
	};


	return (
		<View style={styles.wrap}
			zIndex={20}
		>
			<RoundButton
				title='X'
				onPress={closeModal}
			/>
			{openModalName === 'infoModal' && (
				<InfoWindow />
			)}
			{openModalName === 'settingsModal' && (
				<SettingsWindow />
			)}
		</View>
	)
}