import React from 'react';
import PropTypes from 'prop-types';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import styles from './styles';

BetCount.propTypes = {
	value: PropTypes.number.isRequired,
};
export default function BetCount({value}) {

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.count}>
				{value}
			</Text>
		</ImageBackground>
	)
}
