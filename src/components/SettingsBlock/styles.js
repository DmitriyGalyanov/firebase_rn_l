import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrap: {
		borderWidth: 4,
		borderColor: 'red',
		borderRadius: 14,
		paddingTop: 25,
		paddingBottom: 25,
		paddingHorizontal: 12,
		width: screenWidth - 16,
		backgroundColor: 'rgba(31, 23, 0, 0.9)',
	},

	closeModalButtonWrap: {
		alignSelf: 'flex-end',
		marginBottom: 38,
	},

	itemWrap: {
		marginBottom: 10,
	}
});

export default styles;