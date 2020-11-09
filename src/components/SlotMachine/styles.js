import {StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		borderWidth: 4,
		borderColor: 'red',
		borderRadius: 14,
		paddingVertical: 12,
		paddingHorizontal: 12,
		backgroundColor: 'rgba(31, 23, 0, 0.9)',
		justifyContent: 'space-between',
	},

	reelWrap: {
		borderRadius: 14,
		overflow: "hidden"
	}
});

export default styles;