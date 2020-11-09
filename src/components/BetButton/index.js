import React from 'react';
import PropTypes from 'prop-types';

import {
	ImageBackground,
	TouchableOpacity,
	Text,
} from 'react-native';

import styles from './styles';


BetBlock.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool,
};
export default function BetBlock({title, onPress, isDisabled}) {
	const background = isDisabled
		? require('./background_disabled.png')
		: require('./background.png');

	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={onPress}
			disabled={isDisabled}
		>
			<ImageBackground
				source={background}
				style={styles.button}
			>
				<Text style={styles.text}>
					{title}
				</Text>
			</ImageBackground>
		</TouchableOpacity>
)
}