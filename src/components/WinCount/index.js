import React, { useEffect } from 'react';

import {
	ImageBackground,
	Text,
} from 'react-native';

import background from './background.png';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	increaseScoreCount,
} from 'state_slices/slotMachineSlice';

import {initItems} from '../../workaround/reelItems';

import styles from './styles';


export default function WinCount() {
	const dispatch = useDispatch();

	const {isTouched, indices, scoreCount} = useSelector(selectSlotMachineData);

	const getCombination = () => {
		const indicesAmount = Object.keys(indices).length;

		let combination = [];

		for (let i = 1; i <= indicesAmount; i++) { //i = reel number

			const itemIndex = indices[i]; //current chosen item index

			const itemInitIndex = itemIndex % initItems.length;

			if (itemInitIndex === initItems[itemInitIndex].initIndex) {
				combination.push(initItems[itemInitIndex].itemName);
			}
		};
		return combination;
	};

	const combination = getCombination();

	const getPrizeModifier = () => {
		//kostyli eto ok govorili oni...
		const isLucky = combination.filter(item => item === '777');
		switch (isLucky.length) {
			case 3: return 200;
			case 2: return 100;
			case 1: return 50;
		};

		const isStrawberry = combination.filter(item => item === 'strawberry').length;
		if (isStrawberry === 3) return 150;
		
		const isBananas = combination.filter(item => item === 'bananas').length;
		if (isBananas === 3) return 100;
		
		const isCherry = combination.filter(item => item === 'cherry').length;
		if (isCherry === 3) return 70;

		const isTomato = combination.filter(item => item === 'tomato').length;
		if (isTomato === 3) return 50;

		const isWatermelon = combination.filter(item => item === 'watermelon').length;
		if (isWatermelon === 3) return 25;

		return 0;
	};

	const prizeModifier = getPrizeModifier();

	useEffect(() => {
		if (!isTouched) return;
		dispatch(increaseScoreCount({amount: prizeModifier}));
		console.log(prizeModifier, 'dispa')
	}, [indices]);

	console.log(scoreCount, 'score count')

	console.log('Combination: ', combination, 'Modifier: ', prizeModifier);

	return (
		<ImageBackground
			source={background}
			style={styles.wrap}
		>
			<Text style={styles.text}>
				{!isTouched && 'WinCount'}
				{isTouched && (prizeModifier)}
			</Text>
		</ImageBackground>
	)
}