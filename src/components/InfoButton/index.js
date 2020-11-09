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
		<TouchableOpacity
			style={styles.button}
			activeOpacity={0.55}
			onPress={() => null}
		>
			<ImageBackground
				source={background}
				style={styles.wrap}
			>
				<Text style={styles.text}>
					i
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}