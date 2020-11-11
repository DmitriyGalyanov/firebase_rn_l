import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../constants';


WebViewScreen.propTypes = {
	platform: PropTypes.string.isRequired,
};
export default function WebViewScreen({platform}) {

	return (
		<View
			style={{
				height: WINDOW_HEIGHT,
				width: WINDOW_WIDTH,
			}}
		>
			<WebView
				source={{
					uri: 'https://www.google.com/'
				}}
			/>
		</View>
	)
}