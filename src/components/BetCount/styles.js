import {StyleSheet} from 'react-native';

import {BET_COUNT_WIDTH, BET_COUNT_HEIGHT} from '../../constants';

const styles = StyleSheet.create({
	wrap: {
		width: BET_COUNT_WIDTH,
		height: BET_COUNT_HEIGHT,
		alignItems: 'center',
	},

	count: {
		lineHeight: 65,
		textAlign: 'center',
		color: '#fff',
		fontSize: 28,
	},
});

export default styles;