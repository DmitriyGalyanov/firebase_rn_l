import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
} from 'react-native';

import {useSelector} from 'react-redux';
import {
	selectSettingsData,
} from 'state_slices/settingsSlice';

import SettingsItem from 'components/SettingsItem';

import styles from './styles';


SettingsBlock.propTypes = {
	children: PropTypes.element.isRequired,
};
export default function SettingsBlock({children}) {
	const settingsData = useSelector(selectSettingsData);

	return (
		<View style={styles.wrap}>
			<View style={styles.closeModalButtonWrap}>
				{children}
			</View>
			{Object.entries(settingsData).map(item => {
				const {name, isActive} = item[1];
				return (
					<View style={styles.itemWrap} key={name}>
						<SettingsItem
							title={name}
							isActive={isActive}
						/>
					</View>
				)
			})}
		</View>
	)
}