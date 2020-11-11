/**
 * @format
 */

import {AppRegistry} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import App from './App';
import {name as appName} from './app.json';

import appsFlyer from 'react-native-appsflyer';

// import iid from '@react-native-firebase/iid';

import {appsflyerDevKey} from './src/constants';


appsFlyer.initSdk(
	{
		devKey: appsflyerDevKey,
		isDebug: true,
	},
	result => {
		console.log(result, 'res')
	},
	error => {
		console.error(error)
	}
);

appsFlyer.getAppsFlyerUID((err, appsFlyerUID) => {
	if (err) {
		console.error(err);
	} else {
		console.log('on getAppsFlyerUID: ' + appsFlyerUID);
	}
});

// appsFlyer.

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
});

// async function getInstanceId() {
// 	const token = await iid().getToken();
// 	// console.log('FCM token', token);
// }

// getInstanceId();

AppRegistry.registerComponent(appName, () => App);
