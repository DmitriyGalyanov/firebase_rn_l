import React from 'react';

import {
	ImageBackground,
} from 'react-native';

import InfoButton from 'components/InfoButton';
import SettingsButton from 'components/SettingsButton';
import MachineWindow from 'components/MachineWindow';
import BetBlock from 'components/BetBlock';

import backgroundImg from './background.jpg';

import styles from './styles';


export default function GameScreen() {
	return (
		<ImageBackground source={backgroundImg}
			style={styles.wrap}
		>
			<InfoButton />
			<SettingsButton />
			<MachineWindow />
			<BetBlock />
		</ImageBackground>
	)
}