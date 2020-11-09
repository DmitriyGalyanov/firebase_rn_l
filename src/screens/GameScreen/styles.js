import {StyleSheet, Dimensions} from 'react-native';

let {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({

	wrap: {
		padding: 8,
		resizeMode: 'cover',
		height: screenHeight,
		width: screenWidth,
		position: 'relative',
		justifyContent: 'space-between',
	},

	mainScreenWrap: {
		zIndex: 10
	}
});

export default styles;