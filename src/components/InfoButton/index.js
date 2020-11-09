import React from 'react';

import {
	ImageBackground,
	TouchableOpacity,
	Text,
} from 'react-native';

import background from './background.png';

import styles from './styles';


export default function InfoButton() {

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<TouchableOpacity
				style={styles.button}
				onPress={() => null}
			>
				<Text style={styles.text}>
					i
				</Text>
			</TouchableOpacity>
		</ImageBackground>
	)
}