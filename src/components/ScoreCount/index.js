import React from 'react';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import {useSelector} from 'react-redux';
import {
	selectSlotMachineData,
} from 'state_slices/slotMachineSlice';

import styles from './styles';


export default function ScoreCount() {
	const {scoreCount} = useSelector(selectSlotMachineData);

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.text}>
				{scoreCount ?? 0}
			</Text>
		</ImageBackground>
	)
}