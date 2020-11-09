import React from 'react';

import {
	View,
	Text,
} from 'react-native';

import MachineWindow from 'components/MachineWindow';
import BetBlock from 'components/BetBlock';

import styles from './styles';


export default function GameScreen() {
	return (
		<View style={styles.wrap}>
			<Text>Game Screen</Text>
			<MachineWindow />
			<BetBlock />
		</View>
	)
}