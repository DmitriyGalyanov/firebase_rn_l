import {StyleSheet} from 'react-native';

import {BET_BUTTON_WIDTH, BET_BUTTON_HEIGHT} from '../../constants';

const styles = StyleSheet.create({
	wrap: {
		width: BET_BUTTON_WIDTH,
		height: BET_BUTTON_HEIGHT,
	},

	button: {
		width: BET_BUTTON_WIDTH,
		height: BET_BUTTON_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 7,
	},
	
	text: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 24,
	},
});

export default styles;