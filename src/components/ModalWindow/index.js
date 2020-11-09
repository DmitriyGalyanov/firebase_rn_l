import React from 'react';

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

export default function ModalWindow() {
	const dispatch = useDispatch();

	const modalsData = useSelector(selectModalsData);

	const openModal = modalsData.filter(item => item.isOpen);

	const openModalName = openModal[0]?.name;

	const closeModal = () => {
		switch (openModalName) {
			case 'infoModal': dispatch(closeInfoModal()); break;
			case 'settingsModal': dispatch(closeSettingsModal()); break;
			default: return;
		}
	};

	const CloseModalButton = (
		<RoundButton
			title='X'
			onPress={closeModal}
		/>
	);

	return (
		<View style={styles.wrap}
			zIndex={20}
		>
			{openModalName === 'infoModal' && (
				<View style={styles.closeModalButtonWrap}>
					{CloseModalButton}
				</View>
			)}
			{openModalName === 'infoModal' && (
				<InfoWindow />
			)}
			{openModalName === 'settingsModal' && (
				<SettingsWindow>
					{CloseModalButton}
				</SettingsWindow>
			)}
		</View>
	)
}