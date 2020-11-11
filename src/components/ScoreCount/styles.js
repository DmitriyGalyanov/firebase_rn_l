import {StyleSheet} from 'react-native';

import constants from '../../constants';

const wrapWidth = constants.WINDOW_WIDTH - 16 - 60 * 2 - 20 * 2;
//16 = padding, 40 = buttons width, 10 = margin;
const bgImgAspectRatio = 3.582010582010582;
const wrapHeight = wrapWidth / bgImgAspectRatio;

const styles = StyleSheet.create({
	wrap: {
		width: wrapWidth,
		height: wrapHeight,
		alignItems: 'center',
	},

	text: {
		lineHeight: wrapHeight - 16,
		textAlign: 'center',
		fontSize: 20,
		color: '#fff',
	},
});

export default styles;