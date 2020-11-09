import React from 'react';

import {
	View,
} from 'react-native';

import BetBlock from 'components/BetBlock';
import SpinButton from 'components/SpinButton';

import styles from './styles';


export default function Footer() {

	return (
		<View style={styles.wrap}>
			<BetBlock />
			<SpinButton />
		</View>
	)
}