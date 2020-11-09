import React from 'react';
import PropTypes from 'prop-types';

import {
	ImageBackground,
	TouchableOpacity,
	Image,
} from 'react-native';

import background from './background.png';
import icon from './icon.png';

import styles from './styles';


SettingsButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};
export default function SettingsButton({onPress}) {

	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={onPress}
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