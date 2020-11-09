import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {
	toggleTest1,
	toggleTest2,
} from 'state_slices/settingsSlice';

import ToggleButton from 'components/ToggleButton';

import styles from './styles';

SettingsItem.propTypes = {
	title: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
};
export default function SettingsItem({title, isActive}) {
	const dispatch = useDispatch();

	const onPress = () => {
		switch (title) {
			case 'test1': return dispatch(toggleTest1());
			case 'test2': return dispatch(toggleTest2());
		}
	};

	return (
		<View style={styles.wrap}>
			<Text style={styles.text}>
				{title}
			</Text>
			<ToggleButton
				isActive={isActive}
				onPress={onPress}
			/>
		</View>
	)
}