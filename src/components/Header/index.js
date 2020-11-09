import React from 'react';

import {
	View,
} from 'react-native';

import InfoButton from 'components/InfoButton';
import ScoreCount from 'components/ScoreCount';
import SettingsButton from 'components/SettingsButton';

import styles from './styles';


export default function Header() {

	return (
		<View style={styles.wrap}>
			<InfoButton />
			<ScoreCount />
			<SettingsButton />
		</View>
	)
}