import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	button: {
		width: 30,
		height: 30,
		borderRadius: 10,
		backgroundColor: '#2c51aa',
		alignItems: 'center',
	},
	button_disabled: {
		backgroundColor: '#959595'
	},
	buttonText: {
		lineHeight: 30,
		color: '#fff',
		fontSize: 20,
	},
});

export default styles;