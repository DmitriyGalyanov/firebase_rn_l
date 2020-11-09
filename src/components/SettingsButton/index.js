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
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={() => null}
		>
			<ImageBackground
				source={background}
				style={styles.button}
			>
				<Image
					source={icon}
					style={styles.icon}
				/>
			</ImageBackground>
		</TouchableOpacity>
	)
}