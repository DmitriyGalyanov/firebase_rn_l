import {StyleSheet} from 'react-native';

import constants from '../../constants';

const styles = StyleSheet.create({
	wrap: {
		padding: 8,
		height: constants.WINDOW_HEIGHT,
		width: constants.WINDOW_WIDTH,
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
	},

	closeModalButtonWrap: {
		alignSelf: 'flex-end',
		marginVertical: 12,
	},
});

export default styles;