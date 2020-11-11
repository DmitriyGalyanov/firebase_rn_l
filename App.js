/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
	SafeAreaView,
	Alert,
} from 'react-native';

import store from 'app_redux/store';
import {Provider} from 'react-redux';

import remoteConfig from '@react-native-firebase/remote-config';
import messaging from '@react-native-firebase/messaging';

import GameScreen from 'screens/GameScreen';


function fetchRemoteConfig() {

	remoteConfig()
	.setDefaults({
		'test_3': 'platform__unknown',
	})
	.then(() => {
		return remoteConfig().setConfigSettings({
			minimumFetchIntervalMillis: 100,
		})
	})
	.then(() => {
		// const test_3 = remoteConfig().getValue('test_3')
		// console.log(test_3, 'test3')
		return remoteConfig().fetchAndActivate()
	})
	.then(() => {
		return remoteConfig().ensureInitialized()
	})
	.then(fetchedRemotely => {
		if (fetchedRemotely) {
			console.log('Configs were retrieved from the backend and activated.');

		} else {
			console.log(
				'No configs were fetched from the backend, and the local configs were already activated',
			);
		}
	});
};

const App: () => React$Node = () => {

	useEffect(() => {
		//await it?
		fetchRemoteConfig();
	}, [fetchRemoteConfig]);

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	useEffect(() => {

	});

	useEffect(() => {
		// TO REMOVE [COMMENT]
		// when we have link (from remote config) we display webView
		// otherwise display game part
		// TO REMOVE [COMMENT]
	}, []);

	return (
		<Provider store={store}>
			<SafeAreaView>
				<GameScreen />
			</SafeAreaView>
		</Provider>
	);
};

export default App;
