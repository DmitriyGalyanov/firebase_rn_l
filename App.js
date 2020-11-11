/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
	SafeAreaView,
	Alert,
} from 'react-native';

import store from 'app_redux/store';
import {Provider} from 'react-redux';

import remoteConfig from '@react-native-firebase/remote-config';
import messaging from '@react-native-firebase/messaging';

import GameScreen from 'screens/GameScreen';
import WebViewScreen from 'screens/WebViewScreen';


const App: () => React$Node = () => {
	const [platform, setPlatform] = useState('');

	useEffect(() => {
		remoteConfig()
		.setDefaults({
			'platform': '__unknown',
			'device_language': '__unknown',
		})
		.then(() => {
			return remoteConfig().setConfigSettings({
				minimumFetchIntervalMillis: 10,
			})
		})
		.then(() => remoteConfig().fetchAndActivate())
		.then(fetchedRemotely => {
			setPlatform(remoteConfig().getValue('platform').asString());
			if (fetchedRemotely) {
				console.log('Configs were retrieved from the backend and activated.');
			} else {
				console.log(
					'No configs were fetched from the backend, and the local configs were already activated',
				);
			}
		})
		.catch(er => console.error(er));
	}); // ???

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	// const platform = remoteConfig().getValue('platform').asString();

	console.log(remoteConfig().getValue('platform'), 'platf')
	// console.log(platform);

	// console.log('test');

	return (
		<Provider store={store}>
			<SafeAreaView>
				{platform === 'android' && (
					<WebViewScreen platform={platform} />
				)}
				{platform !== 'android' && (
					<GameScreen />
				)}
			</SafeAreaView>
		</Provider>
	);
};

export default App;
