import React from 'react';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import styles from './styles';


export default function WinCount() {

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.text}>
				WinCount
			</Text>
		</ImageBackground>
	)
}