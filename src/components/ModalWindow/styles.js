import {StyleSheet, Dimensions} from 'react-native';

let {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrap: {
		padding: 8,
		height: screenHeight,
		width: screenWidth,
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		// zIndex: 10
	},
});

export default styles;