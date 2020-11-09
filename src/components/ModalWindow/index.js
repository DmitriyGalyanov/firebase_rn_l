import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
} from 'react-native';

import RoundButton from 'components/RoundButton';
import InfoBlock from 'components/InfoBlock';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectModalsData,
	closeInfoModal,
	closeSettingsModal,
} from 'state_slices/modalsSlice';

import styles from './styles';

ModalWindow.propTypes = {
	zIndex: PropTypes.number.isRequired,
};
export default function ModalWindow({zIndex}) {
	const dispatch = useDispatch();

	const modalsData = useSelector(selectModalsData);

	const openModal = modalsData.filter(item => item.isOpen);

	const openModalName = openModal[0]?.name;

	console.log(openModalName, 'open modal name')

	const closeModal = () => { //mb will come from props// or even use Redux/Context
		console.log('close modal button clicked');
		switch (openModal[0].name) {
			case 'infoModal': dispatch(closeInfoModal()); break;
			case 'settingsModal': dispatch(closeSettingsModal()); break;
			default: return;
		}
	};

	return (
		<View style={styles.wrap}
			zIndex={zIndex}
		>
			<RoundButton
				title='X'
				onPress={closeModal}
			/>
			<InfoBlock />
		</View>
	)
}