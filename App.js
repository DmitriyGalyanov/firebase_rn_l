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

import remoteConfig from '@react-native-firebase/remote-config';
import messaging from '@react-native-firebase/messaging';

import GameScreen from 'screens/GameScreen';


const App: () => React$Node = () => {

	useEffect(() => {
		remoteConfig()
			.setDefaults({
				test_condition3: 'not_fetched',
			})
			.then(() => {
				console.log('default remote config values set')
			})
			.then(() => remoteConfig().fetchAndActivate())
			// .then(fetched => {
			// 	if (fetched) {
			// 		console.log('configs retieved and activated');
			// 	} else {
			// 		console.log('no configs were fetched')
			// 	}
			// })
			// .then(() => console.log(remoteConfig().getAll(), 'effect'))

	}, []);

	// console.log(remoteConfig().getAll(), 'render')
	
	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	return (
		<SafeAreaView>
			<GameScreen />
		</SafeAreaView>
	);
};

export default App;
