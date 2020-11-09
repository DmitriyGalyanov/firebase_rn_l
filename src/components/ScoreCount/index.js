import React from 'react';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import styles from './styles';


export default function ScoreCount() {

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.text}>
				scoreCount
			</Text>
		</ImageBackground>
	)
}