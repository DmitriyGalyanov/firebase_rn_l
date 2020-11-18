import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../constants';

WebViewScreen.propTypes = {
	url: PropTypes.string.isRequired,
};
export default function WebViewScreen({url}) {
	console.log('WebViewScreen URL: ', url);

	return (
		<View
			style={{
				height: WINDOW_HEIGHT,
				width: WINDOW_WIDTH,
			}}
		>
			<WebView
				source={{
					// uri: 'https://www.google.com/'
					uri: url
				}}
			/>
		</View>
	)
}