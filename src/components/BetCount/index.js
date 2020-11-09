import React from 'react';
import PropTypes from 'prop-types';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';


BetCount.propTypes = {
	value: PropTypes.number.isRequired,
};
export default function BetCount({value}) {

	return (
		<View style={styles.wrap}>
			<Text style={styles.count}>
				{value}
			</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	wrap: {
		width: 80,
		height: 65,
		borderRadius: 14,
		backgroundColor: '#95172f',
		alignItems: 'center',
		borderWidth: 4,
		borderColor: '#dbbe0b',
	},

	count: {
		lineHeight: 57,
		textAlign: 'center',
		color: '#fff',
		fontSize: 20,
	},
});