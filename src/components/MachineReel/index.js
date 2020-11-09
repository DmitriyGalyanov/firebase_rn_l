import React from 'react';

import {
	StyleSheet,
	ScrollView,
	View,
	Text,
} from 'react-native';

const testPicsArray = [
	'cherry',
	'banana',
	'tomato',
	'watermelon',
	'777',
	'strawberry',
];


export default function MachineReel() {

	return (
		<ScrollView
			style={styles.wrap}
			showsVerticalScrollIndicator={false}
			// scrollEnabled={false}
		>
			{testPicsArray.map((item, index) => {
				return (
					<View key={index}
						style={styles.item}
					>
						<Text>{item}</Text>
					</View>
				)
			})}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrap: {
		height: 150,
		// overflow: 'hidden',
	},

	item: {
		width: 50,
		height: 50,

	}
})