import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Text,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../constants';

import iid from '@react-native-firebase/iid';


WebViewScreen.propTypes = {
	platform: PropTypes.string.isRequired,
};
export default function WebViewScreen({platform}) {
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

	return (
		<View
			style={{
				height: WINDOW_HEIGHT,
				width: WINDOW_WIDTH,
			}}
		>
			<Text>{token}</Text>
			<WebView
				source={{
					uri: 'https://www.google.com/'
				}}
			/>
		</View>
	)
}