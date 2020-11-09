import {StyleSheet} from 'react-native';

const wrapWidth = 220;
const bgImgAspectRatio = 2.788571428571429;
const wrapHeight = wrapWidth / bgImgAspectRatio;

const styles = StyleSheet.create({
	wrap: {
		width: wrapWidth,
		height: wrapHeight,
		paddingLeft: 70,
		alignSelf: 'center'
	},

	text: {
		lineHeight: wrapHeight - 12,
		fontSize: 20,
		color: '#fff',
	},
});

export default styles;