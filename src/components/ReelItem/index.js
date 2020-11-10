import React from 'react';
import PropTypes from 'prop-types';

import {
	View,
	Image,
} from 'react-native';

import images from '../../imgs/images';

import styles from './styles';

ReelItem.propTypes = {
	itemName: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
};
export default function ReelItem({itemName, height, width}) {

	let pathToImg = null;

	const getImage = () => {
		switch (itemName) {
			case '777': return images[777]; break;
			case 'bananas': return images.bananas; break;
			case 'cherry': return images.cherry; break;
			case 'strawberry': return images.strawberry; break;
			case 'tomato': return images.tomato; break;
			case 'watermelon': return images.watermelon; break;
			default: pathToImg = null;
		};
	};

	const img = getImage();

	return (
		<View style={styles.wrap}>
			<Image
				source={img}
				style={{
					height: height ?? 60,
					width: width ?? 65
				}}
			/>
		</View>
	)
}