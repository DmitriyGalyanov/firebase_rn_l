import React from 'react';

import {
	ImageBackground,
} from 'react-native';

import Header from 'components/Header';
import MachineWindow from 'components/MachineWindow';
import WinCount from 'components/WinCount';
import BetBlock from 'components/BetBlock';

import backgroundImg from './background.jpg';

import styles from './styles';


export default function GameScreen() {
	return (
		<ImageBackground
			source={backgroundImg}
			style={styles.wrap}
		>
			<Header />
			<MachineWindow />
			<WinCount />
			<BetBlock />
		</ImageBackground>
	)
}