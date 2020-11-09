import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrap: {
		borderWidth: 4,
		borderColor: 'red',
		borderRadius: 14,
		paddingTop: 25,
		paddingBottom: 25,
		paddingLeft: 12,
		paddingRight: 12,

		width: screenWidth - 16,
		backgroundColor: 'rgba(31, 23, 0, 0.9)',
	},

	rowWrap: {
		marginBottom: 10,
	}
});

export default styles;