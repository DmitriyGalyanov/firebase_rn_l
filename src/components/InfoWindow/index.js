import React from 'react';

import {
	ScrollView,
	View,
} from 'react-native';

import InfoBlock from 'components/InfoBlock';

import styles from './styles';


const infoBlocksArray = [
	[
		{
			name: 'three 777',
			combination: [
				{
					itemName: '777',
				},
				{
					itemName: '777',
				},
				{
					itemName: '777',
				}
			],
			score: 'J'
		},
		{
			name: 'two 777',
			combination: [
				{
					itemName: '777',
				},
				{
					itemName: '777',
				},
			],
			score: '100'
		},
		{
			name: 'one 777',
			combination: [
				{
					itemName: '777',
				},
			],
			score: '50'
		}
	],

	[
		{
			name: 'three strawberry',
			combination: [
				{
					itemName: 'strawberry',
				},
				{
					itemName: 'strawberry',
				},
				{
					itemName: 'strawberry',
				}
			],
			score: '150'
		},
		{
			name: 'three bananas',
			combination: [
				{
					itemName: 'bananas',
				},
				{
					itemName: 'bananas',
				},
				{
					itemName: 'bananas',
				}
			],
			score: '100'
		},
		{
			name: 'three cherry',
			combination: [
				{
					itemName: 'cherry',
				},
				{
					itemName: 'cherry',
				},
				{
					itemName: 'cherry',
				}
			],
			score: '70'
		},
		{
			name: 'three tomato',
			combination: [
				{
					itemName: 'tomato',
				},
				{
					itemName: 'tomato',
				},
				{
					itemName: 'tomato',
				}
			],
			score: '50'
		},
		{
			name: 'three watermelon',
			combination: [
				{
					itemName: 'watermelon',
				},
				{
					itemName: 'watermelon',
				},
				{
					itemName: 'watermelon',
				}
			],
			score: '25'
		},
	]
];

export default function InfoWindow() {

	return (
		<ScrollView>
			{infoBlocksArray.map((block, index) => {
				return (
					<View style={styles.blockWrap} key={index}>
						<InfoBlock
							data={block}
						/>
					</View>
				)
			})}
		</ScrollView>
	)
}