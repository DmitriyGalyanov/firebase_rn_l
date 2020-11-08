import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
	selectBetData,
	incrementBet,
	decrementBet,
} from 'state_slices/betSlice';

import BetCount from 'components/BetCount';


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

	const decrementButtonStyles = decrementDisabled
		? [styles.button, styles.button_disabled]
		: styles.button;

	const incrementButtonStyles = incrementDisabled
		? [styles.button, styles.button_disabled]
		: styles.button;
	
	return (
		<View style={styles.wrap}>
			<TouchableOpacity
				style={decrementButtonStyles}
				onPress={() => handleDecrement()}
				disabled={decrementDisabled}
			>
				<Text style={styles.buttonText}>
					—
				</Text>
			</TouchableOpacity>
			<BetCount value={betValue}/>
			<TouchableOpacity
				style={incrementButtonStyles}
				onPress={() => handleIncrement()}
				disabled={incrementDisabled}
			>
				<Text style={styles.buttonText}>
					+
				</Text>
			</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	button: {
		width: 30,
		height: 30,
		borderRadius: 10,
		backgroundColor: '#2c51aa',
		alignItems: 'center',
	},
	button_disabled: {
		backgroundColor: '#959595'
	},
	buttonText: {
		lineHeight: 30,
		color: '#fff',
		fontSize: 20,
	},
});