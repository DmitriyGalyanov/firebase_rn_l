import React from 'react';
import PropTypes from 'prop-types';

import {
	Text,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';

import styles from './styles';


BetBlock.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool,
};
export default function BetBlock({title, onClick, isDisabled}) {
	const background = isDisabled
		? require('./background_disabled.png')
		: require('./background.png');

	const buttonStyles = isDisabled
		? [styles.button, styles._disabled]
		: styles.button;
	
	return (
			<ImageBackground
				source={background}
				style={styles.wrap}
			>
				<TouchableOpacity
					style={buttonStyles}
					onPress={onClick}
					disabled={isDisabled}
				>
					<Text style={styles.text}>
						{title}
					</Text>
				</TouchableOpacity>
			</ImageBackground>
	)
}