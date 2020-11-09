import React from 'react';
import PropTypes from 'prop-types';

import {
	ScrollView,
	View,
} from 'react-native';

import SettingsBlock from 'components/SettingsBlock';

import styles from './styles';


SettingsWindow.propTypes = {
	children: PropTypes.element.isRequired,
};
export default function SettingsWindow({children}) {

	return (
		<ScrollView contentContainerStyle={styles.wrap}>
			<View style={styles.blockWrap}>
				<SettingsBlock>
					{children}
				</SettingsBlock>
			</View>
		</ScrollView>
	)
}