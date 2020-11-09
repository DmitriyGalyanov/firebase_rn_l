import React from 'react';
import PropTypes from 'prop-types';

import {
	ScrollView,
	View,
	Text,
} from 'react-native';

import ReelItem from 'components/ReelItem';

import styles from './styles';


MachineReel.propTypes = {
	data: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			itemName: PropTypes.string
		})),
		reelNumber: PropTypes.number.isRequired,
	}).isRequired,
};
export default function MachineReel({data}) {
	const {items} = data;

	return (
		<ScrollView
			style={styles.wrap}
			contentContainerStyle={styles.wrapContainer}
			showsVerticalScrollIndicator={false}
			// scrollEnabled={false}
		>
			{items.map(item => {
				const {itemName} = item;
				return (
					<View key={itemName}
						style={styles.itemWrap}
					>
						<ReelItem
							itemName={itemName}
							height={95}
							width={100}
						/>
					</View>
				)
			})}
		</ScrollView>
	)
}