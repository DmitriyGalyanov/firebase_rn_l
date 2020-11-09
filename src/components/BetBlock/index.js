import React from 'react';

import {
	View,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
	selectBetData,
	incrementBet,
	decrementBet,
} from 'state_slices/betSlice';


import BetButton from 'components/BetButton';
import BetCount from 'components/BetCount';

import styles from './styles';


export default function BetBlock() {
	const dispatch = useDispatch();

	const {currentBetValue: betValue} = useSelector(selectBetData);

	const maxBetValue = 100;
	const minBetValue = 10;
	//check betSlice comments//

	const decrementDisabled = betValue <= minBetValue;
	const incrementDisabled = betValue >= maxBetValue;

	const handleDecrement = () => {
		if (decrementDisabled) return null;
		dispatch(decrementBet());
	};
	const handleIncrement = () => {
		if (incrementDisabled) return null;
		dispatch(incrementBet());
	};
	
	return (
		<View style={styles.wrap}>
			<BetButton
				title='—'
				onPress={() => handleDecrement()}
				isDisabled={decrementDisabled}
			/>
			<BetCount value={betValue}/>
			<BetButton
				title='+'
				onPress={() => handleIncrement()}
				isDisabled={incrementDisabled}
			/>
		</View>
	)
}