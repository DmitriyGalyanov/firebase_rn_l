import React from 'react';
import PropTypes from 'prop-types';

import {
	TouchableOpacity,
	Image,
} from 'react-native';

import img from './background.png';

import styles from './styles';

SpinButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};
export default function SpinButton({onPress}) {

	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={onPress}
		>
			<Image
				source={img}
				style={styles.img}
			/>
		</TouchableOpacity>
	)
}