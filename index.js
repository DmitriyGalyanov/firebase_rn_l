/**
 * @format
 */

import {AppRegistry} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import App from './App';
import {name as appName} from './app.json';

import iid from '@react-native-firebase/iid';

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
	console.log('And I\'m not sure what am I supposed to do about it')
});

// async function getInstanceId() {
// 	const token = await iid().getToken();
// 	// console.log('FCM token', token);
// }

// getInstanceId();

AppRegistry.registerComponent(appName, () => App);
