import {StyleSheet} from 'react-native';

import constants from '../../constants';

const styles = StyleSheet.create({
	list: {
		width: constants.REEL_WIDTH,
		paddingVertical: 8,
		paddingHorizontal: 6,
		backgroundColor: 'rgba(60, 24, 8, 0.9)',
		borderRadius: 12,
		alignItems: 'center',
	},

	itemWrap: {
		marginVertical: 3,
	},
});

export default styles;