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

// var onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
// 	(res) => {
// 		console.log(res, 'onInstallConversionData')
// 			// if (JSON.parse(res.data.is_first_launch) == true) {
// 			// 		if (res.data.af_status === 'Non-organic') {
// 			// 				var media_source = res.data.media_source;
// 			// 				var campaign = res.data.campaign;
// 			// 				console.log('This is first launch and a Non-Organic install. Media source: ' + media_source + ' Campaign: ' + campaign);
// 			// 		} else if (res.data.af_status === 'Organic') {
// 			// 				console.log('This is first launch and a Organic Install');
// 			// 		}
// 			// } else {
// 			// 		console.log('This is not first launch');
// 			// }
// 	},
// );

// var onAppOpenAttributionCanceller = appsFlyer.onAppOpenAttribution(res => {
// 	console.log(res, 'onAppOpenAttribution');
// });

// console.log(appsflyerDevKey, 'key');

appsFlyer.initSdk(
	{
		devKey: appsflyerDevKey,
		isDebug: false,
	},
	result => {
		console.log(result, 'appsflyer sdk initialized')
	},
	error => {
		console.error(error, 'error init appslyfer sdk')
	}
);

appsFlyer.getAppsFlyerUID((err, appsFlyerUID) => {
	if (err) {
		console.error(err);
	} else {
		// console.log('on getAppsFlyerUID: ' + appsFlyerUID);
	}
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
});

// async function getInstanceId() {
// 	const token = await iid().getToken();
// 	console.log('FCM token', token);
// };
// getInstanceId();

AppRegistry.registerComponent(appName, () => App);
