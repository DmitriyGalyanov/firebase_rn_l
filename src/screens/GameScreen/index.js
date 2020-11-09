import React from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import MachineWindow from 'components/MachineWindow';
import BetBlock from 'components/BetBlock';


export default function GameScreen() {
	return (
		<View>
			<Text>Game Screen</Text>
			<MachineWindow />
			<BetBlock />
		</View>
	)
}