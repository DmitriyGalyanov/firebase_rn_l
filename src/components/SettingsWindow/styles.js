import {StyleSheet} from 'react-native';

import constants from '../../constants';

const styles = StyleSheet.create({
	wrap: {
		minHeight: constants.WINDOW_HEIGHT,
	},

	blockWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: constants.WINDOW_HEIGHT,
	},
});

export default styles;