import {StyleSheet} from 'react-native';

import constants from '../../constants';

const styles = StyleSheet.create({
	wrap: {
		borderWidth: 4,
		borderColor: 'red',
		borderRadius: 14,
		paddingTop: 25,
		paddingBottom: 25,
		paddingHorizontal: 12,
		width: constants.WINDOW_WIDTH - 16,
		backgroundColor: 'rgba(31, 23, 0, 0.9)',
	},

	rowWrap: {
		marginBottom: 10,
	}
});

export default styles;