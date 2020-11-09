import React from 'react';

import {
	View,
} from 'react-native';

import MachineReel from 'components/MachineReel';

import styles from './styles';


const slotMachineReels = [
	{
		reelNumber: 1,
		items: [
			{
				itemName: '777',
			},
			{
				itemName: 'bananas',
			},
			{
				itemName: 'cherry',
			},
			{
				itemName: 'strawberry',
			},
			{
				itemName: 'tomato',
			},
			{
				itemName: 'watermelon',
			},
		]
	},
	{
		reelNumber: 1,
		items: [
			{
				itemName: '777',
			},
			{
				itemName: 'bananas',
			},
			{
				itemName: 'cherry',
			},
			{
				itemName: 'strawberry',
			},
			{
				itemName: 'tomato',
			},
			{
				itemName: 'watermelon',
			},
		]
	},
	{
		reelNumber: 1,
		items: [
			{
				itemName: '777',
			},
			{
				itemName: 'bananas',
			},
			{
				itemName: 'cherry',
			},
			{
				itemName: 'strawberry',
			},
			{
				itemName: 'tomato',
			},
			{
				itemName: 'watermelon',
			},
		],
	}
];

export default function SlotMachine() {

	return (
		<View style={styles.wrap}>
			{slotMachineReels.map((reel, index) => {
				return (
					<View style={styles.reelWrap} key={index}>
						<MachineReel
							data={reel}
						/>
					</View>
				)
			})}
		</View>
	)
}