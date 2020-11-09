import React from 'react';

import {
	ImageBackground,
	View,
} from 'react-native';

import ModalWindow from 'components/ModalWindow';

import Header from 'components/Header';
import MachineWindow from 'components/MachineWindow';
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
				<ModalWindow style={styles.modalWrap}
					zIndex={isInfoModalOpen ? 20 : 0}
				/>
				<ModalWindow style={styles.modalWrap}
					zIndex={isSettingsModalOpen ? 20 : 0}
				/>
				<View style={styles.mainScreenWrap}>

					<Header />
					<MachineWindow />
					<WinCount />
					<Footer />

				</View>
			</ImageBackground>
		</>
	)
}