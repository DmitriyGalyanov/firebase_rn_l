import React from 'react';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	
} from 'state_slices/slotMachineSlice';

import {initItems} from '../../workaround/reelItems';

import styles from './styles';


export default function WinCount() {

	const {indices} = useSelector(selectSlotMachineData);

	const test = () => {
		const indicesAmount = Object.keys(indices).length
		for (let i = 1; i <= indicesAmount; i++) { //i = reel number

			const itemIndex = indices[i]; //current chosen item index

			const itemInitIndex = itemIndex % initItems.length;

			if (itemInitIndex === initItems[itemInitIndex].initIndex) {
				console.log('name: ', initItems[itemInitIndex].itemName,
					'current index: ', itemIndex,
					'item init index: ', itemInitIndex)
			}
		};
	}

	test();


	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.text}>
				WinCount
			</Text>
		</ImageBackground>
	)
}