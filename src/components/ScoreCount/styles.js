import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const wrapWidth = screenWidth - 60 * 2 - 20 * 2; //40 = buttons width, 10 = margin;
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