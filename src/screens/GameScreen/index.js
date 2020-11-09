import React from 'react';

import {
	ImageBackground,
	View,
} from 'react-native';

import ModalWindow from 'components/ModalWindow';

import Header from 'components/Header';
import SlotMachine from 'components/SlotMachine';
import WinCount from 'components/WinCount';
import Footer from 'components/Footer';

import backgroundImg from './background.jpg';

import {useSelector} from 'react-redux';
import {selectModalsData} from 'state_slices/modalsSlice';

import styles from './styles';


export default function GameScreen() {
	const modalsData = useSelector(selectModalsData);

	const openModal = modalsData.filter(item => item.isOpen);

	const openModalName = openModal[0]?.name;

	const isInfoModalOpen = openModalName === 'infoModal';

	const isSettingsModalOpen = openModalName === 'settingsModal';

	return (
		<>
			<ImageBackground
				source={backgroundImg}
				style={styles.wrap}
			>
				{isInfoModalOpen && (
					<ModalWindow style={styles.modalWrap} />
				)}
				{isSettingsModalOpen && (
					<ModalWindow style={styles.modalWrap} />
				)}
				
				<View style={styles.mainScreenWrap}>
					<Header />
					<SlotMachine />
					<WinCount />
					<Footer />
				</View>
			</ImageBackground>
		</>
	)
}