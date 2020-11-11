import {StyleSheet} from 'react-native';

import constants from '../../constants';

const styles = StyleSheet.create({

	wrap: {
		padding: 8,
		resizeMode: 'cover',
		height: constants.WINDOW_HEIGHT,
		width: constants.WINDOW_WIDTH,
	},

	mainScreenWrap: {
		zIndex: 10,
		height: constants.WINDOW_HEIGHT - 16,
		width: constants.WINDOW_WIDTH - 16,
		justifyContent: 'space-between',
	}
});

export default styles;