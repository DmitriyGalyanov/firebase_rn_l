import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		paddingLeft: 16,
		paddingRight: 16,
		backgroundColor: 'rgba(60, 24, 8, 0.9)',
		borderRadius: 12,
		height: 80,
		alignItems: 'center',
		justifyContent: 'space-between'
		//shadow takes too much time for now
	},

	combinationWrap: {
		flexDirection: 'row',
	},

	itemWrap: {
		marginRight: 12,
	},

	scoreText: {
		fontSize: 44,
		fontWeight: 'bold',
		color: '#ffc22f',
	},
});

export default styles;