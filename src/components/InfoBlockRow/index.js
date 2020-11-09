import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
} from 'react-native';

import ReelItem from 'components/ReelItem';

import styles from './styles';

InfoBlockRow.propTypes = {
	combination: PropTypes.arrayOf(PropTypes.shape({
		itemName: PropTypes.string,
	})).isRequired,
	name: PropTypes.string,
	score: PropTypes.string.isRequired,
};
export default function InfoBlockRow({combination, score}) {

	return (
		<View style={styles.wrap}>
			<View style={styles.combinationWrap}>
				{combination.map((item, index) => {
					return (
						<View style={styles.itemWrap} key={index}>
							<ReelItem
								itemName={item.itemName}
							/>
						</View>
					)
				})}
			</View>
			<Text style={styles.scoreText}>
				{score}
			</Text>
		</View>
	)
}