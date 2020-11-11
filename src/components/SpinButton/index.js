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

import styles from './styles';


export default function SpinButton() {
	const dispatch = useDispatch();

	const {isSpinning} = useSelector(selectSlotMachineData);
	
	const background = isSpinning
		? require('./background_disabled.png')
		: require('./background.png');

	const handlePress = () => {
		if (isSpinning) return;

		dispatch(startSpinning());
	};

	return (
		<TouchableOpacity
			style={styles.wrap}
			activeOpacity={0.55}
			onPress={handlePress}
			disabled={isSpinning}
		>
			<Image
				source={background}
				style={styles.img}
			/>
		</TouchableOpacity>
	)
}