import React from 'react';
import PropTypes from 'prop-types';

import {
	ImageBackground,
	TouchableOpacity,
	Text,
} from 'react-native';

import background from './background.png';

import styles from './styles';


RoundButton.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
};
export default function RoundButton({title, onPress}) {

	return (
		<TouchableOpacity
			style={styles.button}
			activeOpacity={0.55}
			onPress={onPress}
		>
			<ImageBackground
				source={background}
				style={styles.wrap}
			>
				<Text style={styles.text}>
					{title}
				</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}