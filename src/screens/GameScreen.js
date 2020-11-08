import React from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import BetBlock from 'components/BetBlock';


export default function GameScreen() {
	return (
		<View>
			<Text>Game Screen</Text>
			<BetBlock />
		</View>
	)
}