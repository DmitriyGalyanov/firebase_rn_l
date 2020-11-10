import React from 'react';

import {
	TouchableOpacity,
	Image,
} from 'react-native';

import img from './background.png';

import {useDispatch, useSelector} from 'react-redux';
import {
	selectSlotMachineData,
	startSpinning,
} from 'state_slices/slotMachineSlice';

import styles from './styles';


export default function SpinButton() {
	const dispatch = useDispatch();

	const {isSpinning} = useSelector(selectSlotMachineData);

	const listLength = 300; //LaDnO

	const getRandomInt = (min = 10, max = list.length - 2) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};


	const handlePress = () => {
		if (isSpinning) return;

		const indices = {
			'1': getRandomInt(10, listLength - 2),
			'2': getRandomInt(10, listLength - 2),
			'3': getRandomInt(10, listLength - 2),
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