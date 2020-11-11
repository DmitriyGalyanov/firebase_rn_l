import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
} from 'react-native';

import {useSelector} from 'react-redux';
import {
	selectSettingsData,
} from 'state_slices/settingsSlice';

import SettingsItem from 'components/SettingsItem';

import styles from './styles';

import iid from '@react-native-firebase/iid';


SettingsBlock.propTypes = {
	children: PropTypes.element.isRequired,
};
export default function SettingsBlock({children}) {
	const [token, setToken] = useState('');
	
	useEffect(() => {
		if(!token) {
			getToken();
		}
	}, []);

	async function getToken() {
		const token = await iid().getToken();

		setToken(token);
	};

	//
	const settingsData = useSelector(selectSettingsData);

	return (
		<View style={styles.wrap}>
			<View style={styles.closeModalButtonWrap}>
				{children}
			</View>
			<Text>{token}</Text>
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