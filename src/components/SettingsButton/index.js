import React from 'react';

import {
	ImageBackground,
	TouchableOpacity,
	Image,
} from 'react-native';

import background from './background.png';
import icon from './icon.png';

import styles from './styles';


export default function SettingsButton() {

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<TouchableOpacity
				style={styles.button}
				onPress={() => null}
			>
				<Image
					source={icon}
					style={styles.icon}
				/>
			</TouchableOpacity>
		</ImageBackground>
	)
}