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
	Text,
	Alert,
} from 'react-native';

import messaging from '@react-native-firebase/messaging';


const App: () => React$Node = () => {
	
	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);

	return (
		<>
			<SafeAreaView>
				<Text>Test</Text>
			</SafeAreaView>
		</>
	);
};

export default App;
