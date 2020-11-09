import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
} from 'react-native';

import InfoBlockRow from 'components/InfoBlockRow';

import styles from './styles';


InfoBlock.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		combination: PropTypes.arrayOf(PropTypes.shape({
			itemName: PropTypes.string,
		})),
		name: PropTypes.string,
		score: PropTypes.string,
	})).isRequired,
};
export default function InfoBlock({data}) {

	return (
		<View style={styles.wrap}>
			{data.map(rowData => {
				return (
					<View style={styles.rowWrap} key={rowData.name}>
						<InfoBlockRow
							{...rowData}
						/>
					</View>
				)
			})}
		</View>
	)
}