import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrap: {
		minHeight: screenHeight,
	},

	blockWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: screenHeight,
	}
});

export default styles;