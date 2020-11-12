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

import appsFlyer from 'react-native-appsflyer';

import {appsflyerDevKey, bundleName} from './src/constants';

import {IDFA} from 'react-native-idfa';

import GameScreen from 'screens/GameScreen';
import WebViewScreen from 'screens/WebViewScreen';


const App: () => React$Node = () => {
	const [platform, setPlatform] = useState('');
	const [url, setUrl] = useState('');

	useEffect(() => {
		remoteConfig()
		.setDefaults({
			'platform': '__unknown',
			'device_language': '__unknown',
			'url': '_',
		})
		.then(() => {
			return remoteConfig().setConfigSettings({
				minimumFetchIntervalMillis: 10,
			})
		})
		.then(() => remoteConfig().fetchAndActivate())
		.then(fetchedRemotely => {
			setPlatform(remoteConfig().getValue('platform').asString());
			setUrl(remoteConfig().getValue('url').asString());
			if (fetchedRemotely) {
				console.log('Configs were retrieved from the backend and activated.');
			} else {
				console.log(
					'No configs were fetched from the backend, and the local configs were already activated',
				);
			}
		})
		.catch(er => console.error(er));
	}, []); //??

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	const [appsflyer_id, setAppsflyer_id] = useState('');

	useEffect(() => {
		appsFlyer.getAppsFlyerUID((err, appsflyerUID) => {
			if (err) {
				console.error(err);
			} else {
				console.log('on getAppsFlyerUID: ' + appsflyerUID);
				setAppsflyer_id(appsflyerUID);
			}
		});
	}, []);

	console.log(remoteConfig().getValue('platform'), 'platf');

	const [advertising_id, setAdvertising_id] = useState('');

	useEffect(() => {
		IDFA.getIDFA().then(idfa => {
			setAdvertising_id(idfa);
		})
		.catch(er => console.error(er));
	}, []);

	// useEffect(() => {
	// 	console.log(advertising_id, 'idddd')
	// }, [advertising_id]);

	const [finalUrl, setFinalUrl] = useState('');

	useEffect(() => {
		// setFinalUrl(`http://pagelink.club/5Hrvt8J3?app_id=${bundleName}&authentication=${appsflyerDevKey}&appsflyer_id=${appsflyer_id}&advertising_id`);
		setFinalUrl(`${url}?app_id=${bundleName}&authentication=${appsflyerDevKey}&appsflyer_id=${appsflyer_id}&advertising_id=${advertising_id}`);
	}, [url, bundleName, appsflyerDevKey, appsflyer_id, advertising_id]);

	useEffect(() => {
		console.log(finalUrl, 'final url');
	}, [finalUrl]);

	// INDEPENDENT ONLY GAME SCREEN RENDER

	return (
		<Provider store={store}>
			<SafeAreaView>
				<GameScreen />
			</SafeAreaView>
		</Provider>
	);

	// INDEPENDENT ONLY GAME SCREEN RENDER

	return (
		<Provider store={store}>
			<SafeAreaView>
				{platform === 'android' && (
					<WebViewScreen url={finalUrl} />
				)}
				{platform !== 'android' && (
					<GameScreen />
				)}
			</SafeAreaView>
		</Provider>
	);
};

export default App;