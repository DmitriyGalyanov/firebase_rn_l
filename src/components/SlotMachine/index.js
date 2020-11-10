import React from 'react';

import {
	View,
} from 'react-native';

import MachineReel from 'components/MachineReel';

import styles from './styles';

import items from '../../workaround/reelItems';

const slotMachineReels = [
	{reelNumber: 1, items},
	{reelNumber: 2, items},
	{reelNumber: 3, items}
];

export default function SlotMachine() {

	return (
		<View style={styles.wrap}>
			{slotMachineReels.map((reel, index) => {
				return (
					<View style={styles.reelWrap} key={index}>
						<MachineReel
							data={reel}
						/>
					</View>
				)
			})}
		</View>
	)
}