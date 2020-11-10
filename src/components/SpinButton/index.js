import React from 'react';

import {
	TouchableOpacity,
	Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	startSpinning,
} from 'state_slices/slotMachineSlice';

import img from './background.png';

import styles from './styles';

export default function SpinButton() {
	const dispatch = useDispatch();

	const {isSpinning} = useSelector(selectSlotMachineData);

	// const listLength = 180; //LaDnO
	const listLength = 120; //LaDnO

	const getRandomInt = (min = 30, max = list.length - 4) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};


	const handlePress = () => {
		if (isSpinning) return;

		const indices = {
			'1': getRandomInt(30, listLength - 4),
			'2': getRandomInt(30, listLength - 4),
			'3': getRandomInt(30, listLength - 4),
		}; //kek ok

		dispatch(startSpinning({indices}));
	};

	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={handlePress}
			disabled={isSpinning}
		>
			<Image
				source={img}
				style={styles.img}
			/>
		</TouchableOpacity>
	)
}