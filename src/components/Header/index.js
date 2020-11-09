import React from 'react';

import {
	View,
} from 'react-native';

import RoundButton from 'components/RoundButton';
import ScoreCount from 'components/ScoreCount';
import SettingsButton from 'components/SettingsButton';

import {useDispatch} from 'react-redux';
import {
	openInfoModal,
	openSettingsModal,
} from 'state_slices/modalsSlice';

import styles from './styles';


export default function Header() {
	const dispatch = useDispatch();

	const handleInfoButtonPress = () => {
		dispatch(openInfoModal());
	};

	const handleSettingButtonPress = () => {
		dispatch(openSettingsModal());
	};

	return (
		<View style={styles.wrap}>
			<RoundButton
				title='i'
				onPress={handleInfoButtonPress}
			/>
			<ScoreCount />
			<SettingsButton
				onPress={handleSettingButtonPress}
			/>
		</View>
	)
}